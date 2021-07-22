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
    const { data: dataBoardsCount } = useQuery<IQuery> ( FETCH_BOARDS_COUNT )
    const lastPage = Math.ceil(Number(dataBoardsCount?.fetchBoardsCount) / 10)
    function onClickPage(event: MouseEvent<HTMLSpanElement>) {
        refetch({aaa: Number((event.target as Element).id)});
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
    {new Array(10).fill(1).map((_, index) => (
        startPage + index <= lastPage && (
        <Page 
        key={ startPage + index } 
        onClick={onClickPage} 
        id={String(startPage + index)}>
            {startPage + index}
        </Page>
        )
    ))}
    <Page onClick={onClickNextPage}>다음</Page>
    </div>
    ) 
}
