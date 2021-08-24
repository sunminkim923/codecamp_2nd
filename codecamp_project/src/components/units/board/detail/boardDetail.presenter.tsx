import {
  PageWrapper,
  Wrapper,
  HeadWrapper,
  ProfileWrapper,
  ProfileImg,
  WriterWrapper,
  Writer,
  Date,
  IconWrapper,
  Link,
  Location,
  UnderLine,
  Title,
  ImageBox,
  Contents,
  YoutubeWrapper,
  YoutubeBox,
  LikeCountWrapper,
  LikeWrapper,
  DisLikeWrapper,
  LikeButton,
  LikeCount,
  DisLikeButton,
  DisLikeCount,
  ButtonWrapper,
  ListButton,
  EditButton,
  DeleteButton,
} from "./boardDetail.styles";

export default function BoardDetailUI() {
  return (
    <>
      <PageWrapper>
        <Wrapper>
          <HeadWrapper>
            <ProfileWrapper>
              <ProfileImg src="/images/profile.svg/" />
              <WriterWrapper>
                <Writer>작성자</Writer>
                <Date>Date:2020.09.23</Date>
              </WriterWrapper>
            </ProfileWrapper>
            <IconWrapper>
              <Link src="/images/link.png" />
              <Location src="/images/location.png" />
            </IconWrapper>
          </HeadWrapper>
          <UnderLine />
          <Title>게시글 제목입니다.</Title>
          <ImageBox />
          <Contents>가다나라마바사</Contents>
          <YoutubeWrapper>
            <YoutubeBox></YoutubeBox>
          </YoutubeWrapper>
          <LikeCountWrapper>
            <LikeWrapper>
              <LikeButton src="/images/likeButton.png/" />
              <LikeCount>2000</LikeCount>
            </LikeWrapper>
            <DisLikeWrapper>
              <DisLikeButton src="/images/disLikeButton.png/" />
              <DisLikeCount>2000</DisLikeCount>
            </DisLikeWrapper>
          </LikeCountWrapper>
        </Wrapper>
        <ButtonWrapper>
          <ListButton>목록으로 </ListButton>
          <EditButton>수정하기</EditButton>
          <DeleteButton>삭제하기</DeleteButton>
        </ButtonWrapper>
        <UnderLine />
      </PageWrapper>
    </>
  );
}
