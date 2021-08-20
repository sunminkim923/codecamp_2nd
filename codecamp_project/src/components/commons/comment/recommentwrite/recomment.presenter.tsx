import {
  Wrapper,
  CommentWrapper,
  ArrowImg,
  ProfileImg,
  ContentsWrapper,
  WriterWrapper,
  WriterName,
  Contents,
  RecommentButton,
} from "./recomment.styles";

export default function ReCommentUI() {
  return (
    <Wrapper>
      <CommentWrapper>
        <ArrowImg src="/images/arrow_comment.png/" />
        <ProfileImg src="/images/profile.svg/" />
        <ContentsWrapper>
          <WriterWrapper>
            <WriterName>판매자</WriterName>
            <Contents>얼마까지 원하시나요?</Contents>
          </WriterWrapper>
          <RecommentButton src="/images/commentButton.svg/" />
        </ContentsWrapper>
      </CommentWrapper>
    </Wrapper>
  );
}
