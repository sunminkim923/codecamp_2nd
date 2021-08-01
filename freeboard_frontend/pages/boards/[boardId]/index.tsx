import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.containers"
import BoardCommentWrite from "../../../src/components/units/board/commentWrite/BoardCommentWrite.comtainer"
import BoardCommentList from "../../../src/components/units/board/commentList/BoardCommentList.container"

export default function DetailPage () {
    

    return (
        <>
            <BoardDetail />
            <BoardCommentWrite />
            <BoardCommentList />
        </>
    )

}



