import { gql } from "@apollo/client";

const USERNAME = gql`
  query GetoneUser {
    get_one_User {
      username
    }
  }
`;

export default USERNAME;
