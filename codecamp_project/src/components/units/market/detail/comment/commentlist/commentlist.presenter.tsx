import { PageWrapper } from "./commentlist.styles";
import CommentListItem from "./commentlistitem";

//@ts-ignore
export default function CommentListUI(props) {
  return (
    <PageWrapper>
      {/* @ts-ignore */}
      {props.commentData?.fetchUseditemQuestions.map((data, index) => (
        <CommentListItem data={data} />
      ))}
    </PageWrapper>
  );
}
