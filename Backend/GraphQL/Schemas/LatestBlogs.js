const LatestBlogsSchema = `#graphql

type LatestBlog {
  id: ID!
  title: String!
  body: String!
  description: String!
  image: String!
  createdAt: String!
}

type Query {
  get_all_latest_blogs: [LatestBlog!]!
  get_one_latest_blog(id: ID!): LatestBlog!
}

`;
export default LatestBlogsSchema
