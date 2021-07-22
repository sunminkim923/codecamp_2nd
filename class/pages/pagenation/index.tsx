import { gql, useQuery } from "@apollo/client"
import { IQuery } from "../../src/commons/typs/generated/types"
import styled from "@emotion/styled"
const FETCH_BOARD = gql`
    query fetchBoards($aaa: Int){
        fetchBoards(page: $aaa){
            _id
            writer
            title
        }
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
    const { data, refetch } = useQuery<IQuery> (FETCH_BOARD, {variables: { aaa:1 }})

    function onClickPage(event) {
        refetch({aaa: Number(event.target.id)});
    }

    return (
    <div>
        {data?.fetchBoards.map((data) => (
            <div key={data._id}>
             <Column>{data.writer}</Column>
             <Column>{data.title}</Column>
            </div>
    ))}
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data) => (
        <Page key={data} onClick={onClickPage} id={data}>
            {data}
        </Page>
    ))}
    </div>
    ) 
}