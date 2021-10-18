// @ts-nocheck
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { FETCH_USEDITEM_QUESTION_ANSWERS } from "../recommentlist/recommentList.queries";
import RecommnetWriteUI from "./recommentWrite.presenter";
import { CREATE_USEDITEM_QUESTION_ANSWER } from "./recommentWrite.queries";

export default function RecommentWrite(props) {
  const [textLength, setTextLength] = useState(0);
  const [contents, setContents] = useState("");

  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USEDITEM_QUESTION_ANSWER
  );

  const onChangeInput = (event) => {
    setTextLength(event.target.value.length);
    setContents(event.target.value);
  };

  const onClickExit = () => {
    props.setIsRecomment(false);
  };

  const onClickSubmit = async (data) => {
    
    
    try {
      const result = await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: { contents: contents },
          useditemQuestionId: props.data,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.data },
          },
        ],
      });
      setContents("");
      alert("댓글을 등록합니다.");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <RecommnetWriteUI
      onChangeInput={onChangeInput}
      textLength={textLength}
      contents={contents}
      onClickExit={onClickExit}
      onClickSubmit={onClickSubmit}
    />
  );
}
