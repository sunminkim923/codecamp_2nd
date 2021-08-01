import { gql, useQuery } from "@apollo/client"
import { useState } from "react"
import PagenationsPageUI from "./pagenations.presenter"
// const FETCH_BOARDS = gql`
//     query fetchBoards($page: Int){
//         fetchBoards(page: $page){
//             _id
//             writer
//             title
//         }
//     }
// `


export default function PagenationPage(props) {
    const [startPage, setStartPage] = useState(1)
    // const {  } = useQuery (FETCH_BOARDS, {variables: { page: startPage }}) 

    function onClickPage(event) {
        props.refetch({page: Number(event.target.id)})
    }

    function onClickPrevPage () {
        setStartPage( prev => prev - 10 )
}
    function onClickNextPage() {
        setStartPage( prev => prev + 10 )
    }

 return (
     <>
        <PagenationsPageUI 
            onClickPage = {onClickPage}
            onClickPrevPage={onClickPrevPage}
            onClickNextPage={onClickNextPage}
            startPage={startPage}
            // data={data}
        />
        
    </>
 )
}