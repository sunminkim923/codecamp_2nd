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
    
        // 실행되면서 날아감

        return (
            <BoardDetailUI qqq={data} />


        )
}
