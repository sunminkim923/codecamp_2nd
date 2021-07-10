import { gql, useQuery } from '@apollo/client'
import {useRouter} from 'next/router'

const FETCH_BOARD = gql`
    query fetchBoard($boardID: ID!) {
        fetchBoard(boardId:$boardID){
        writer
        title
        contents
        }
    }
    `

export default function DetailPage () {
    const router = useRouter()
    const { data } = useQuery (
        FETCH_BOARD,
        { variables: { boardID: router.query.boardID } }
    )
    // 실행되면서 날아감 

    console.log(data)

    return (
        <>
            <div>작성자: {data && data.fetchBoard.writer}님</div>
            <div>글제목: {data?.fetchBoard.title} </div> // 위랑 같은뜻 , 옵셔널체이닝
            <div>글내용: {data && data.fetchBoard.contents} </div>
            {/* <div>상세보기 {router.query.boardID}번페이지 입니다.</div> */}
        </>

    )
}

