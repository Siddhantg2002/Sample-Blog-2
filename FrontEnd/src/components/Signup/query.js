import { gql } from '@apollo/client';

const SIGNUP = gql`
 mutation CreateUser($username: String!, $email: String!, $password: String!){
  createUser(username: $username, email: $email, password: $password) {
    username
    email
    password
  }
}
`;

export default SIGNUP