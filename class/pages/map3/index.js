import {gql, useMutation, useQuery} from '@apollo/client'
import styled from '@emotion/styled'
import {getDate} from '../../src/commoms/libraries/utils'
const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            _id
            writer
            title
            contents
            createdAt
        }
    }
`

const DELETE_BOARD = gql`
    mutation deleteBoard($boardId: ID!){
        deleteBoard(boardId: $boardId)
    }
`

const Row = styled.div`
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid gray;
    display: flex;
    flex-direction: row;  // 생략가능
`
const Column = styled.div`
    width: 20%;
`


export default function Map3Page () {

    const { data } = useQuery(FETCH_BOARDS)
    const [ deleteBoard ] = useMutation(DELETE_BOARD)

    async function onClickDelete(event){
        alert("해당글을 삭제합니다")
        
        try{
        await deleteBoard({
            variables: {boardId: event.target.id },
            refetchQueries: [{query: FETCH_BOARDS}]
        })
        alert("삭제가 완료되었습니다")
        } catch(error) {
            alert(error.message)
        }
    }

    return (

        <div>
            <Row>
                <Column><input type="checkbox" /></Column>
                <Column>번호</Column>
                <Column>작성자</Column>
                <Column>제목</Column>
                <Column>작성일</Column>
            </Row>
            {data?.fetchBoards.map((data, index) => (
            <Row key={data.id}>
                <Column><input type="checkbox" /></Column>
                <Column>{index}</Column>
                <Column>{data.writer}</Column>
                <Column>{data.title}</Column>
                {/* <span>{data.contents}</span> */}
                <Column>{getDate(data.createdAt)}</Column>
                <Column><button id={data._id} onClick={onClickDelete}>삭제하기</button> </Column>
            </Row>
            ))}
            <button>삭제하기</button>
        </div>
    )
}