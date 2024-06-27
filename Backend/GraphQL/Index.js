import LatestBlogsSchema from "./Schemas/LatestBlogs.js";
import LatestBlogsResolvers from "./Resolvers/LatestBlogs.js";

import AllBlogsSchema from "./Schemas/AllBlogs.js";
import AllBlogsResolvers from "./Resolvers/AllBlogs.js";

import UserSchema from "./Schemas/Users.js";
import UserResolvers from "./Resolvers/Users.js";


const typeDefs = `#graphql
  ${LatestBlogsSchema}
  ${AllBlogsSchema}
  ${UserSchema}
`;
const resolvers = {
  Query: {
    ...LatestBlogsResolvers.Query,
    ...AllBlogsResolvers.Query,
    ...UserResolvers.Query,
  },
  Mutation: {
    ...UserResolvers.Mutation,
  },
};

export {typeDefs, resolvers}