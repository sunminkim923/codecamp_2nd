import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import CommentWriteUI from "./commentwrite.presenter";
import { CREATE_USEDITEM_QUESTION } from "./commentwrite.queries";
import { FETCH_USEDITEM_QUESTIONS } from "../commentlist/commentlist.queries";

export default function CommentWrite() {
  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);
  const router = useRouter();
  const [contents, setContents] = useState("");

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onClickRegister = async (data) => {
    try {
      const result = await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: { contents: contents },
          useditemId: router.query.id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.id },
          },
        ],
      });
      console.log(result.data.createUseditemQuestion.contents);
      alert("댓글을 등록합니다.");
      console.log(data);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <CommentWriteUI
      onClickRegister={onClickRegister}
      onChangeContents={onChangeContents}
    />
  );
}
