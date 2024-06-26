import { gql } from "@apollo/client";

const GET_ALL_BLOGS = gql`
  query get_paginated_ALL_blog($page: Int!, $limit: Int!) {
  get_paginated_ALL_blog(page: $page, limit: $limit) {
    total
    results {
      id
      title
      author
      body
      image
      date
    }
  }
}
`;

export default GET_ALL_BLOGS;
