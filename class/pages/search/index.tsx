import { gql, useQuery } from "@apollo/client"
import { IQuery, IQueryFetchBoardsArgs } from "../../src/commons/typs/generated/types"
import styled from "@emotion/styled"
import { MouseEvent, useState } from "react"

const FETCH_BOARDS = gql`
    query fetchBoards ($search: String, $page: Int) {
        fetchBoards (search: $search, page: $page) {
            _id
            writer
            title
            createdAt
        }
    }
`
const Column = styled.span`
    padding: 0px 50px;
`
const Page = styled.span`
    padding: 0px 10px;
`

interface IProps {
    isMatched: boolean
}
const Word = styled.span`
    color: ${(props:IProps) => (props.isMatched ? "blue" : "black")};
`
export default function SearchPage () {

    const { data, refetch } = useQuery(FETCH_BOARDS);
    const [ search, setSearch] = useState("")
    const [ keyword, setKeyword] = useState("")

    function onChangeSearch (event) {
        setSearch(event.target.value)
    }

    function onClickSearch () {
        refetch({ search: search})
        setKeyword(search)
    }

    function onClickPage (event:MouseEvent<HTMLSpanElement>) {
        refetch({ search: keyword, page: Number(event.target.id) })
    }
    return (
        <>
            <input type="text" onChange={onChangeSearch} />
            <button onClick={onClickSearch}> 검색하기 </button>
            {data?.fetchBoards.map((data) => (
                <div key={data._id}>
                    <Column>{data.writer}</Column>
                    <Column>{data.title.replaceAll(search, `@#@$${search}@#@$`).split("@#@$").map((data, index) => (
                        <Word key={index} isMatched={search === data}>{data}</Word>
                    ))}
                    </Column>
                    <Column>{data.createdAt}</Column>
                </div>
            ))}
            {new Array (10).fill(1).map((_, index) =>(
                <Page key={index} id={String(index + 1 )} onClick={onClickPage}>  {index + 1 } </Page>
            ))}
        </>

    )
    
}

