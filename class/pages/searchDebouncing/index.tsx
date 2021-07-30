import { gql, useQuery } from "@apollo/client"
import { IQuery, IQueryFetchBoardsArgs } from "../../src/commons/typs/generated/types"
import styled from "@emotion/styled"
import { useState } from "react"
import _ from "lodash"




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
export default function SearchPage() {

    const { data, refetch } = useQuery(FETCH_BOARDS);
    const [search, setSearch] = useState("")

    const getDebounce = _.debounce((data) => (
        refetch({ search: data })
        setSearch(data)
    ), 500)


    function onChangeSearch(event) {
        
        getDebounce(event.target.value)
    }

    // function onClickSearch () {
    //     refetch({ search: search})
    // }

    function onClickPage(event: MouseEvent<HTMLSpanElement>) {
        refetch({ search: search, page: Number(event.target.id) })
    }
    return (
        <>
            <input type="text" onChange={onChangeSearch} />
            {/* <button onClick={onClickSearch}> 검색하기 </button> */}
            {data?.fetchBoards.map((data) => (
                <div key={data._id}>
                    <Column>{data.writer}</Column>
                    <Column>{data.title}</Column>
                    <Column>{data.createdAt}</Column>
                </div>
            ))}
            {new Array(10).fill(1).map((_, index) => (
                <Page key={index} id={String(index + 1)} onClick={onClickPage}>  {index + 1} </Page>
            ))}
        </>

    )

}