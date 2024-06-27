const UserSchema = `#graphql

type Users {
  id: ID!
  username: String!
  email: String!
  password: String!
  image: String!
  phone_number: String!
  expiry_of_Token: String!
  createdAt: String!
}

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

type Query {
  getUsers: [Users!]!
  get_one_User: Users!
}
type Mutation {
    createUser(username: String!, email: String!, password: String!): Users!
    updateUser(username:String, email: String, password: String, image: String, phone_number: String): Users!
    deleteUser: Boolean!
}

`;
export default UserSchema
