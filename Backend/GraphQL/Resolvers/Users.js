import prisma from "../../prisma/prisma.js";
import bcrypt from "bcrypt";
import decryptJWT from "../../Auth/Decrypt.cjs";
import createToken from "../../Auth/JWT.cjs";
import { GraphQLError } from "graphql";
import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET;

const UserResolvers = {
  Query: {
    getUsers: async () => {
      return prisma.users.findMany();
    },
    get_one_User: async (_, __, contextValue) => {
      const { token } = contextValue;
      if (!token) {
        throw new GraphQLError("User is not authenticated", {
          extensions: {
            code: "UNAUTHENTICATED",
            http: { status: 401 },
          },
        });
      }
        console.log(token)
        const decodedToken = await decryptJWT(token);
        const userID = decodedToken.id;
        console.log(decodedToken)
        const user = await prisma.users.findUnique({
          where: { id: userID },
        });
        return user;
    },

    
  },
  Mutation: {
    createUser: async (_, { username, email, password }, contextValue) => {
      const existingUser = await prisma.users.findFirst({
        where: {
          OR: [{ email }, { username }],
        },
      });
      if (existingUser) {
        throw new GraphQLError("User already exists", {
          extensions: {
            code: "BAD_USER_INPUT",
          },
        });
      }

      // Hash the password before storing it
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create the new user
      const user = await prisma.users.create({
        data: {
          username,
          email,
          password: hashedPassword,
        },
      });

      const token = await createToken(user.id);
      contextValue.res.set("Authorization", `Bearer ${token}`);
      console.log(token)
      console.log("User Created Successfully")
      return user;
    },

    updateUser: async (_,{ username, email, password, image, phone_number }, contextValue) => {
      if (!contextValue.token) {
        throw new GraphQLError("User is not authenticated", {
          extensions: {
            code: "UNAUTHENTICATED",
            http: { status: 401 },
          },
        });
      }

      try {
        const decodedToken = jwt.verify(contextValue.token, secretKey);
        const userID = decodedToken.id;

        const existingUser = await prisma.users.findFirst({
          where: {
            id: userID,
          },
        });

        if (!existingUser) {
          throw new GraphQLError("User not found", {
            extensions: {
              code: "BAD_USER_INPUT",
            },
          });
        }

        return prisma.users.update({
          where: {
            id: userID,
          },
          data: {
            username,
            email,
            password,
            image,
            phone_number,
          },
        });
      } catch (error) {
        throw new GraphQLError("Invalid or expired token", {
          extensions: {
            code: "UNAUTHENTICATED",
            http: { status: 401 },
          },
        });
      }
    },

    deleteUser: async(_, __ ,contextValue)=>{
      const {token} = contextValue;
      console.log(token)
      if (!contextValue.token) {
        throw new GraphQLError("User is not authenticated", {
          extensions: {
            code: "UNAUTHENTICATED",
            http: { status: 401 },
          },
        });
      }
        const decodedToken = await decryptJWT(token);
        const userID = decodedToken.id;

        const user = await prisma.users.delete({
          where: { id: userID },
        });
        return true;

    }
  },
};

export default UserResolvers;
