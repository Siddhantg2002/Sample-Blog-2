const UserBlogSchema = `#graphql

type UserBlogs {
    id: ID!
    user_id: ID!
    User: Users!
    title: String!
    author: String!
    date: String
    content: String!
    image: String!
    createdAt: String
    updatedAt: String
   }

`;
export default UserBlogSchema;
