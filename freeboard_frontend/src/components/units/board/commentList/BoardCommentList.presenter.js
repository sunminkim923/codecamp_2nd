import { useQuery } from "@apollo/client";
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";
import {
  CommentEditWrapper,
  CommentWriter,
  CommentPassword,
  CommentEditBox,
  CommentEdit,
  CommentEditButton,
  CommentWrapper,
  TopWrapper,
  WriterWrapper,
  IconWrapper,
  Profile,
  CommentContentsWrapper,
  Writer,
  Contents,
  Date,
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
          <CommentEdit
            type="text"
            placeholder="수정할 내용을 작성해주세요"
          ></CommentEdit>
          <CommentEditButton>수정하기</CommentEditButton>
        </CommentEditBox>
      </CommentEditWrapper>

      <CommentWrapper>
        <Profile src="/Vector.svg"></Profile>
        <CommentContentsWrapper>
          <TopWrapper>
            <WriterWrapper>
              <Writer>작성자</Writer>
              <span>별점</span>
            </WriterWrapper>
            <IconWrapper>
              <span>버튼1</span>
              <span>버튼2</span>
            </IconWrapper>
          </TopWrapper>
          {props.data?.fetchBoardComments.map((data) => (
            <Contents>
              <span>{data.writer}</span>
              <span>{data.contents}</span>
            </Contents>
          ))}
          <Date></Date>
        </CommentContentsWrapper>
      </CommentWrapper>
    </>
  );
}
