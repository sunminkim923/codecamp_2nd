import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"

import { 
    Wrapper,
    HeadWrapper,
    HeadLine,
    ContentsWrapper,
    AdressBox,
    WriterWrapper,

} from '../../../styles/boards/boardId/BoardId'

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId:$boardId) {
            writer
            title
            contents
            youtubeUrl
        }

    }

`

export default function DetailPage () {
    const router = useRouter()  
    const { data } = useQuery (
        FETCH_BOARD,
        {
            variables: {boardId: router.query.boardId }
        }

    )


        // <div>작성자 : {data?.fetchBoard.writer} </div>
        // <div>제목:: : {data?.fetchBoard.title}</div>
        // <div>글내용: : {data?.fetchBoard.contents} </div> */

    return (
    <Wrapper>
        <HeadWrapper>
            <AdressBox></AdressBox>
            <WriterWrapper>
                <div>{data?.fetchBoard.writer}</div>
            </WriterWrapper>
        </HeadWrapper>
        <HeadLine></HeadLine>
        <ContentsWrapper>
            
        </ContentsWrapper>


    </Wrapper>

    



    )







}


