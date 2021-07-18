import { gql } from "@apollo/client";

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments {
    fetchBoardComments {
      writer
      contents
      user
    }
  }
`;
