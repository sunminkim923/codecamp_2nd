import {
  CommentEditWrapper,
  CommentWriter,
  CommentPassword,
  CommentEditBox,
  CommentEdit,
  CommentEditButton,
  CommentWrapper,
  HeadWrapper,
  TopWrapper,
  IconWrapper,
  Profile,
  Writer,
  Contents,
  Date,
  StarPoint,
} from "./BoardCommentList.styles";

export default function BoardCommentListUI(props) {
  return (
    <>
      <CommentEditWrapper>
        <CommentWriter type="text" placeholder="작성자"></CommentWriter>
        <CommentPassword
          type="password"
          placeholder="비밀번호"
        ></CommentPassword>
        <CommentEditBox>
          <CommentEdit type="text" placeholder="안녕하세요"></CommentEdit>
          <CommentEditButton>수정하기</CommentEditButton>
        </CommentEditBox>
      </CommentEditWrapper>

      {props.data?.fetchBoardComments.map((data) => (
        <CommentWrapper>
          <HeadWrapper>
            <TopWrapper>
              <Profile src="/Vector.svg"></Profile>
              <Writer>{data.writer}</Writer>
              <StarPoint>별점</StarPoint>
            </TopWrapper>
            <IconWrapper>
              <span>버튼1</span>
              <span>버튼2</span>
            </IconWrapper>
          </HeadWrapper>
          <Contents>{data.contents}</Contents>
          <Date></Date>
        </CommentWrapper>
      ))}
    </>
  );