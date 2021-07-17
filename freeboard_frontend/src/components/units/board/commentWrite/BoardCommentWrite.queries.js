import { gql } from "@apollo/client";

export const CREATE_BOARD_COMMENT = gql`
    mutaion createBoardComment ($createBoardCommentInput: CreateBoardCommentInput!, $boardId: ID! ) {
        createBoardComment (createBoardCommentInput: $createBoardCommentInput, boardId: $boardId) {
            
        }
    }
`;
