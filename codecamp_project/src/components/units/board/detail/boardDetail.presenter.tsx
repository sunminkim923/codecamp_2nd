// @ts-nocheck
import CommentWrite from "./comment/commentWrite/commentWrite.container";
import CommentList from "./comment/commentList/commentList.container";
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
  UnderLine01,
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
  UnderLine02,
} from "./boardDetail.styles";

export default function BoardDetailUI(props) {
  return (
    <>
      <PageWrapper>
        <Wrapper>
          <HeadWrapper>
            <ProfileWrapper>
              <ProfileImg src="/images/profile.svg/" />
              <WriterWrapper>
                <Writer> {props.data?.fetchBoard.writer} </Writer>
                <Date> Date: {props.data?.fetchBoard.createdAt} </Date>
              </WriterWrapper>
            </ProfileWrapper>
            <IconWrapper>
              <Link src="/images/link.png" />
              <Location src="/images/location.png" />
            </IconWrapper>
          </HeadWrapper>
          <UnderLine01 />
          <Title> {props.data?.fetchBoard.title} </Title>
          <ImageBox />
          <Contents> {props.data?.fetchBoard.contents}</Contents>
          <YoutubeWrapper>
            <YoutubeBox> {props.data?.fetchBoard.youtubeUrl} </YoutubeBox>
          </YoutubeWrapper>
          <LikeCountWrapper>
            <LikeWrapper>
              <LikeButton src="/images/likeButton.png/" />
              <LikeCount> {props.data?.fetchBoard.likeCount} </LikeCount>
            </LikeWrapper>
            <DisLikeWrapper>
              <DisLikeButton src="/images/disLikeButton.png/" />
              <DisLikeCount>{props.data?.fetchBoard.dislikeCount}</DisLikeCount>
            </DisLikeWrapper>
          </LikeCountWrapper>
        </Wrapper>
        <ButtonWrapper>
          <ListButton onClick={props.onClickList}>목록으로 </ListButton>
          <EditButton>수정하기</EditButton>
          <DeleteButton>삭제하기</DeleteButton>
        </ButtonWrapper>
        <UnderLine02 />
        <CommentWrite />
        <CommentList />
      </PageWrapper>
    </>
  );
}
