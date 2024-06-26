import { gql } from "@apollo/client";

const GET_ALL_BLOGS_CONTENT = gql`
  query get_one_ALL_blog($id: ID!) {
    get_one_ALL_blog(id: $id) {
      title
      body
      image
      date
      author
    }
  }
`;

export default GET_ALL_BLOGS_CONTENT;
