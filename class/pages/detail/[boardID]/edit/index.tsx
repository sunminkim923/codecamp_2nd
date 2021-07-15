import { gql, useQuery } from "@apollo/client"
import {useRouter} from "next/router"
import { IQuery } from "../../../../src/commons/typs/generated/types"
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container"


const FETCH_BOARD = gql`
    query fetchBoard($aaa: ID!){
        fetchBoard(boardId: $aaa ){
            writer
            title
            contents
        }
    }
`


export default function EditPage (){
    // const isEdit = true
    
    const router = useRouter()
    const { data } =useQuery<IQuery>(FETCH_BOARD, {
        variables: { aaa: router.query.boardID }
    })

    

    return <BoardWrite isEdit={true} data={data} />



}