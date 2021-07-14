export default function BoardDetailUI (props){
    return (
        <>
            <div>작성자: {props.qqq && props.qqq.fetchBoard.writer}님</div>
            <div>글제목: {props.qqq?.fetchBoard.title} </div>  {/* 위랑 같은 뜻, 옵셔널체이닝 */}
            <div>글내용: {props.qqq && props.qqq.fetchBoard.contents} </div>
            <button onClick={props.onClickEdit}>수정하기</button>
            {/* <div>상세보기 {router.query.boardID}번페이지 입니다.</div> */}
        </>



    )
}