import { PageWrapper, UnderLine } from "./commentlist.styles";
import CommentListItem from "./commentlistitem";

export default function CommentListUI(props) {
  return (
    <PageWrapper>
      {props.data?.fetchUseditemQuestions.map((data, index) => (
        <UnderLine />
      ))}
    </PageWrapper>
  );
}
