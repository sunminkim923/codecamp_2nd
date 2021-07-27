import ReactPlayer from "react-player";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import {
  BigWrapper,
  Wrapper,
  HeadWrapper,
  HeadLine,
  ContentsWrapper,
  WriterWrapper,
  Profile,
  WriterInfo,
  WriterName,
  WriterDate,
  IconWrapper,
  Icon_1,
  Icon_2,
  ContentsTitle,
  ContentsImages,
  ContentsText,
  LikeWrapper,
  Like,
  LikeCount,
  DisLike,
  DisLikeCount,
  ButtonWrapper,
  ListButton,
  EditButton,
  DeleteButton,
  LineBox,
} from "./BoardDetail.styles";

const YoutubeBox = ReactPlayer;
const LikeButton = styled(LikeOutlined)``;
const DisLikeButton = styled(DislikeOutlined)``;

export default function BoardDetailUI(props) {
  console.log(props.data?.fetchBoard);
  return (
    <BigWrapper>
      <Wrapper>
        <HeadWrapper>
          <WriterWrapper>
            <Profile src="/images/vector.png"></Profile>
            <WriterInfo>
              <WriterName>{props.data?.fetchBoard.writer}</WriterName>
              <WriterDate>2</WriterDate>
            </WriterInfo>
          </WriterWrapper>
          <IconWrapper>
            <Icon_1 />
            <Icon_2>아이콘2</Icon_2>
          </IconWrapper>
        </HeadWrapper>
        <HeadLine></HeadLine>
        <ContentsWrapper>
          <ContentsTitle>{props.data?.fetchBoard.title}</ContentsTitle>
          <ContentsImages src="/images/dog_4.jpg">
            {/* {props.data?.fetchBoard.images} */}
          </ContentsImages>
          <ContentsText>{props.data?.fetchBoard.contents}</ContentsText>
        </ContentsWrapper>
        <YoutubeBox
          url={props.data?.fetchBoard.youtubeUrl}
          margin-top="200px"
        ></YoutubeBox>
        <LikeWrapper>
          <Like>
            <LikeButton />
            <LikeCount>123</LikeCount>
          </Like>
          <DisLike>
            <DisLikeButton />
            <DisLikeCount>123</DisLikeCount>
          </DisLike>
        </LikeWrapper>
      </Wrapper>
      <ButtonWrapper>
        <ListButton onClick={props.onClickList}>목록으로</ListButton>
        <EditButton onClick={props.onClickEdit}>수정하기</EditButton>
        <DeleteButton onClick={props.onClickDelete}>삭제하기</DeleteButton>
      </ButtonWrapper>
      <LineBox></LineBox>
    </BigWrapper>
  );
}
