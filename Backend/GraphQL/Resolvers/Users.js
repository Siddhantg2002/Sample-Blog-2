import prisma from "../../prisma/prisma.js";
import bcrypt from "bcrypt";
import decryptJWT from "../../Auth/Decrypt.cjs";
import createToken from "../../Auth/JWT.cjs";
import { GraphQLError } from "graphql";

const UserResolvers = {
  Query: {
    getUsers: async () => {
      return prisma.users.findMany();
    },
    get_one_User: async (_, __, contextValue) => {
      if (!contextValue.token) {
        throw new GraphQLError("User is not authenticated", {
          extensions: {
            code: "UNAUTHENTICATED",
            http: { status: 401 },
          },
        });
      }
      const decodedToken = await decryptJWT(contextValue.token);
      const userID = decodedToken.id;
      return await prisma.users.findUnique({
        where: {
          id: userID,
        },
      });
    },
  },

  Mutation: {
    createUser: async (_, { username, email, password }) => {
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
      return user;
    },
    updateUser: async (
      _,
      { username, email, password, image, phone_number },
      contextValue
    ) => {
      if (!contextValue.token) {
        throw new GraphQLError("User is not authenticated", {
          extensions: {
            code: "UNAUTHENTICATED",
            http: { status: 401 },
          },
        });
      }
      const decodedToken = await decryptJWT(contextValue.token);
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
      const updateData = { username, email, image, phone_number };
      if (password) {
        const salt = await bcrypt.genSalt();
        updateData.password = await bcrypt.hash(password, salt);
      }
      return prisma.users.update({
        where: {
          id: userID,
        },
        data: updateData,
      });
    },
    deleteUser: async (_, __, contextValue) => {
      if (!contextValue.token) {
        throw new GraphQLError("User is not authenticated", {
          extensions: {
            code: "UNAUTHENTICATED",
            http: { status: 401 },
          },
        });
      }
      const decodedToken = await decryptJWT(contextValue.token);
      const userID = decodedToken.id;
      await prisma.users.delete({
        where: {
          id: userID,
        },
      });
      return true;
    },
    LoggedIn_User: async (_, { email, password }, contextValue) => {
      const { res } = contextValue;
      const user = await prisma.users.findUnique({ where: { email } });
      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
          const token = await createToken(user.id);
          res.cookie("jwt", token)
          return true;
        }
        throw new GraphQLError("Incorrect Password", {
          extensions: {
            code: "BAD_USER_INPUT",
          },
        });
      }
      throw new GraphQLError("Incorrect Email", {
        extensions: {
          code: "BAD_USER_INPUT",
        },
      });
    },
  },
};

export default UserResolvers;
// {
//   httpOnly: true,
//   sameSite: 'Strict', // or 'Lax' based on your requirements
//   maxAge: 60 * 60 * 24 * 7 // 1 week in seconds
// }