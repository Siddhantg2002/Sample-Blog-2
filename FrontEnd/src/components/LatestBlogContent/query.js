import { gql } from "@apollo/client";

const GET_ONE_LATEST_BLOGS_CONTENT = gql`
  query GetLatestBlogsContent($id: ID!) {
    get_one_latest_blog(id: $id) {
      title
      body
      image
    }
  }
`;

export default GET_ONE_LATEST_BLOGS_CONTENT;
