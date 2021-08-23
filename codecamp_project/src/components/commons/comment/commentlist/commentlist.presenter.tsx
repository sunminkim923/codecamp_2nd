import { PageWrapper } from "./commentlist.styles";
import CommentListItem from "./commentlistitem";

export default function CommentListUI(props) {
  return (
    <PageWrapper>
      {props.commentData?.fetchUseditemQuestions.map((data, index) => (
        <CommentListItem data={data} />
      ))}
    </PageWrapper>
  );
}
