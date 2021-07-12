import { gql } from "@apollo/client";


export const FETCH_BOARD = gql`
    query fetchBoard($boardID: ID!) {
        fetchBoard(boardId:$boardID){
        writer
        title
        contents
        }
    }
`