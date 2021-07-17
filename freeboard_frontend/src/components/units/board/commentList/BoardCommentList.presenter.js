import {
  CommentEditWrapper,
  CommentWriter,
  CommentPassword,
  CommentEditBox,
  CommentEdit,
} from "./BoardCommentList.styles";

export default function BoardCommentListUI() {
  return (
    <CommentEditWrapper>
      <CommentWriter></CommentWriter>
      <CommentPassword></CommentPassword>
      <CommentEditBox>
        <CommentEdit></CommentEdit>
        <CommentEditButton>수정하기</CommentEditButton>
      </CommentEditBox>
    </CommentEditWrapper>
  );
}
