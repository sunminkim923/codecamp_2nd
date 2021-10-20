import ReCommentListItem from "./recommentListItem";

export default function ReCommentListUI(props: any) {
  return (
    <div>
      {props.answerData?.fetchUseditemQuestionAnswers.map((data: any) => (
        <ReCommentListItem data={data} loggedInuser={props.loggedInuser} />
      ))}
    </div>
  );
}
