import { gql } from '@apollo/client';

const GET_LATEST_BLOGS = gql`
  query getlatestblogs {
    get_all_latest_blogs {
      id
      title
      description
      image
    }
  }
`;

export default GET_LATEST_BLOGS