const AllBlogsSchema = `#graphql

type AllBlogs {
  id: ID!
  title: String!
  body: String!
  author: String!
  date: String!
  image: String!
  createdAt: String!
}

type PaginatedAllBooks {
  total: Int!
  Current_limt: Int!
  current_Page: Int!
  next_Page: Int!
  previous_Page: Int!
  results: [AllBlogs!]!
}

type Query {
  get_all_ALL_blogs: [AllBlogs!]!
  get_one_ALL_blog(id: ID!): AllBlogs!
  get_paginated_ALL_blog(page: Int!, limit: Int!): PaginatedAllBooks!
}

`;
export default AllBlogsSchema
