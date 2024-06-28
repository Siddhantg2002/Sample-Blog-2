import { gql } from "@apollo/client";

const LOGIN = gql`
  mutation LOGIN($email: String!, $password: String!) {
    LoggedIn_User(email: $email, password: $password)
  }
`;

export default LOGIN;
