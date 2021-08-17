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

export default function CommentListUI(props) {
  return (
    <PageWrapper>
      {props.data?.fetchUseditemQuestions.map((data) => (
        <Wrapper>
          <HeadWrapper>
            <ProfileImg src="/images/profile.svg/" />
            <ContentsWrapper>
              <TopWrapper>
                <Writer>{data.user.name}</Writer>
                <CommentButton src="/images/commentButton.svg/" />
              </TopWrapper>
              <Contents>{data.contents}</Contents>
            </ContentsWrapper>
          </HeadWrapper>
          <WritedDate>{data.user.createdAt}</WritedDate>
          <UnderLine />
        </Wrapper>
      ))}
    </PageWrapper>
  );
}
