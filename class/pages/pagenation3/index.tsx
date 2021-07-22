import { gql, useQuery } from "@apollo/client"
import { IQuery } from "../../src/commons/typs/generated/types"
import styled from "@emotion/styled"
import { useState } from "react"
const FETCH_BOARD = gql`
    query fetchBoards($aaa: Int){
        fetchBoards(page: $aaa){
            _id
            writer
            title
        }
    }
`
const FETCH_BOARDS_COUNT = gql`
    query fetchBoardsCount {
        fetchBoardsCount
    }
`

const Column = styled.span`
    margin: 0px 50px;
`
const Page = styled.span`
    margin: 0px 10px;
    cursor: pointer;
`


export default function PagenationPage () {
    const [startPage, setStartPage] = useState(1)
    const { data, refetch } = useQuery<IQuery> (FETCH_BOARD, {variables: { aaa: startPage }})
    const { data: bbb } = useQuery<IQuery> ( FETCH_BOARDS_COUNT )
    const lastPage = Math.ceil(Number(bbb?.fetchBoardsCount) / 10)
    function onClickPage(event) {
        refetch({aaa: Number(event.target.id)});
    }
    function onClickPrevPage () {
        if(startPage <= 1) return ;
        setStartPage (prev => prev - 10) ;
    }
    function onClickNextPage () {
        if(startPage + 10 > lastPage) return ;
        setStartPage (prev => prev + 10)
    }

    return (
    <div>
        {data?.fetchBoards.map((data) => (
            <div key={data._id}>
             <Column>{data.writer}</Column>
             <Column>{data.title}</Column>
            </div>
    ))}
    <Page onClick={onClickPrevPage}>이전</Page>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data, index) => (
        startPage + index <= lastPage && (<Page key={ startPage + index } onClick={onClickPage} id={startPage + index}>
            {startPage + index}
        </Page>
        )
    ))}
    <Page onClick={onClickNextPage}>다음</Page>
    </div>
    ) 
}
