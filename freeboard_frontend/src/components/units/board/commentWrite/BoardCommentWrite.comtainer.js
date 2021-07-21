import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import { gql, useMutation } from "@apollo/client";
import router from "next/router";
import { CREATE_BOARD_COMMENT } from "./BoardCommentWrite.queries";
import { useState } from "react";

const inits = {
  writer: "",
  password: "",
  contents: "",
  rating: 0,
};

export default function BoardCommentWrite() {
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  const [input, setInput] = useState(inits);

  function onChangeInputs(event) {
    const inputs = { ...input };
    inputs[event.target.name] = event.target.value;
    setInput(inputs);
  }

  function onChangeStar(value) {
    setInput({ ...input, rating: value });
    console.log(value);
  }

  async function onClickSubmit() {
    try {
      await createBoardComment({
        variables: {
          boardId: router.query.boardId,
          createBoardCommentInput: input,
        },
      });
      alert("댓글을 등록합니다");
      setInput(inits);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <BoardCommentWriteUI
      onClickSubmit={onClickSubmit}
      onChangeInputs={onChangeInputs}
      onChangeStar={onChangeStar}
    />
  );
}
