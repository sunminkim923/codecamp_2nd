import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import BoardDetailUI from "./BoardDetail.prersenter"
import { FETCH_BOARD } from "./BoardDetail.queries"


export default function BoardDetail() {


        const router = useRouter()
        const { data } = useQuery (
            FETCH_BOARD,
            { variables: { boardID: router.query.boardID } }
        )
        function onClickEdit (){
            router.push(`/detail/${router.query.boardID}/edit`)
        }

        return (
            <BoardDetailUI 
            qqq={data} 
            onClickEdit={onClickEdit}
            
            />


        )
}
