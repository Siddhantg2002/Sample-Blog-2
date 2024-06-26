import LatestBlogsSchema from "./Schemas/LatestBlogs.js";
import LatestBlogsResolvers from "./Resolvers/LatestBlogs.js";

import AllBlogsSchema from "./Schemas/AllBlogs.js";
import AllBlogsResolvers from "./Resolvers/AllBlogs.js";


const typeDefs = `#graphql
  ${LatestBlogsSchema}
  ${AllBlogsSchema}
`;
const resolvers = {
  Query: {
    ...LatestBlogsResolvers.Query,
    ...AllBlogsResolvers.Query,
  },
  // Mutation: {
  //   ...BookResolvers.Mutation,
  //   ...AuthorResolvers.Mutation,
  // },
};

export {typeDefs, resolvers}