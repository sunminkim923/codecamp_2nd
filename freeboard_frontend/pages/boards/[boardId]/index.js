import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"

import { 
    Wrapper,
    HeadWrapper,
    HeadLine,
    ContentsWrapper,
    AdressBox,
    WriterWrapper,
    ContentsTitle,
    ContentsImages,
    ContentsText,
    YoutubeBox,
    

} from '../../../styles/boards/boardId/BoardId'

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId:$boardId) {
            writer
            title
            contents
            images
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

    return (
    <Wrapper>
        <HeadWrapper>
            <AdressBox></AdressBox>
            <WriterWrapper>{data?.fetchBoard.writer}</WriterWrapper>
        </HeadWrapper>
        <HeadLine></HeadLine>
        <ContentsWrapper>
            <ContentsTitle>{data?.fetchBoard.title}</ContentsTitle>
            <ContentsImages>{data?.fetchBoard.images}</ContentsImages>
            <ContentsText>{data?.fetchBoard.contents}</ContentsText>
        </ContentsWrapper>
        <YoutubeBox>{data?.fetchBoard.youtubeUrl}</YoutubeBox>
    </Wrapper>



    )



}


