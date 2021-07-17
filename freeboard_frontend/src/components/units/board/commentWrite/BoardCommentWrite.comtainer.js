import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import { useMutation } from "@apollo/client";
import { Writer } from "../write/BoardWrite.styles";

export default function BoardCommentWrite() {
  return <BoardCommentWriteUI />;
}

const [createBoardComment] = useMutation(createBoardComment);

function onClickSubmit() {
  try {
    const result = createBoardComment({
      variables: {
        cereateBoardCommentInput: writer,
        password,
        contents,
        rating,
      },
    });
    alert("댓글을 등록합니다");
  } catch (error) {
    alert(error.message);
  }
}
