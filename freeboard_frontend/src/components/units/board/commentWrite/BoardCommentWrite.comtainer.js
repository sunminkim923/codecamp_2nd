import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import { gql, useMutation } from "@apollo/client";
import router from "next/router";
import { CREATE_BOARD_COMMENT } from "./BoardCommentWrite.queries";

export default function BoardCommentWrite() {
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  function onClickSubmit() {
    try {
      const result = createBoardComment({
        variables: {
          boardId: router.query.boardId,
          cereateBoardCommentInput: { writer, password, contents },
        },
      });
      alert("댓글을 등록합니다");
    } catch (error) {
      alert(error.message);
    }
  }

  return <BoardCommentWriteUI />;
}
