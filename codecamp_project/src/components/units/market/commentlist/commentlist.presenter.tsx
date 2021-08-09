import {
  PageWrapper,
  Wrapper,
  HeadWrapper,
  ProfileImg,
  ContentsWrapper,
  TopWrapper,
  Writer,
  CommentButton,
  Contents,
  WritedDate,
  UnderLine,
} from "./commentlist.styles";

export default function CommentListUI() {
  return (
    <PageWrapper>
      <Wrapper>
        <HeadWrapper>
          <ProfileImg src="/images/profile.svg/" />
          <ContentsWrapper>
            <TopWrapper>
              <Writer>작성자</Writer>
              <CommentButton src="/images/commentButton.svg/" />
            </TopWrapper>
            <Contents>댓글 내용</Contents>
          </ContentsWrapper>
        </HeadWrapper>
        <WritedDate>2021.02.22</WritedDate>
        <UnderLine />
      </Wrapper>
    </PageWrapper>
  );
}
