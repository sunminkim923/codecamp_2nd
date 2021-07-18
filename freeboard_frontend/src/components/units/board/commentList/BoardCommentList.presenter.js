import {
  CommentEditWrapper,
  CommentWriter,
  CommentPassword,
  CommentEditBox,
  CommentEdit,
  CommentWrapper,
  Profile,
  CommentContentsWrapper,
  Writer,
  Contents,
  Date,
} from "./BoardCommentList.styles";

export default function BoardCommentListUI() {
  return (
    <>
      <CommentEditWrapper>
        <CommentWriter></CommentWriter>
        <CommentPassword></CommentPassword>
        <CommentEditBox>
          <CommentEdit></CommentEdit>
          <CommentEditButton>수정하기</CommentEditButton>
        </CommentEditBox>
      </CommentEditWrapper>
      <CommentWrapper>
        <Profile></Profile>
        <CommentContentsWrapper>
          <Writer></Writer>
          <Contents></Contents>
          <Date></Date>
        </CommentContentsWrapper>
      </CommentWrapper>
    </>
  );
}
