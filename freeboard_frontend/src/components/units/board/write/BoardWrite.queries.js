import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
    mutation createBoard ($createBoard:CreateBoardInput!){

        createBoard(createBoardInput:$createBoard) {
            _id
        }
    }
`