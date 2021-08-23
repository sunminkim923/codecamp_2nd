import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ReCommentListUI from "./recommentList.presenter";
import { FETCH_USEDITEM_QUESTION_ANSWER } from "./recommentList.queries";

export default function ReCommentList(props) {
  const { data: answerData } = useQuery(FETCH_USEDITEM_QUESTION_ANSWER, {
    variables: { useditemQuestionId: props.commentId },
  });

  return <ReCommentListUI answerData={answerData} />;
}
