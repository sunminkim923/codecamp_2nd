import ReactPlayer from "react-player";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import {
  BigWrapper,
  Wrapper,
  HeadWrapper,
  HeadLine,
  ContentsWrapper,
  AdressBox,
  WriterWrapper,
  Profile,
  WriterInfo,
  WriterName,
  WriterDate,
  ContentsTitle,
  ContentsImages,
  ContentsText,
  IconWrapper,
  LikeWrapper,
  DisLikeWrapper,
  ButtonWrapper,
  ListButton,
  EditButton,
  DeleteButton,
  LineBox,
} from "./BoardDetail.styles";

const YoutubeBox = ReactPlayer;
const LikeButton = styled(LikeOutlined)`
  margin-right: 20px;
`;
const DisLikeButton = styled(DislikeOutlined)`
  margin-left: 20px;
`;

export default function BoardDetailUI(props) {
  console.log(props.data?.fetchBoard);
  return (
    <BigWrapper>
      <Wrapper>
        <HeadWrapper>
          <AdressBox>영등포구</AdressBox>
          <WriterWrapper>
            <Profile src="/images/vector.png"></Profile>
            <WriterInfo>
              <WriterName>{props.data?.fetchBoard.writer}</WriterName>
              <WriterDate>2</WriterDate>
            </WriterInfo>
          </WriterWrapper>
        </HeadWrapper>
        <HeadLine></HeadLine>
        <ContentsWrapper>
          <ContentsTitle>{props.data?.fetchBoard.title}</ContentsTitle>
          <ContentsImages>{props.data?.fetchBoard.images}</ContentsImages>
          <ContentsText>{props.data?.fetchBoard.contents}</ContentsText>
        </ContentsWrapper>
        <YoutubeBox
          url={props.data?.fetchBoard.youtubeUrl}
          margin-top="200px"
        ></YoutubeBox>
        <IconWrapper>
          <LikeWrapper>
            <LikeButton />
            <div></div>
          </LikeWrapper>
          <DisLikeWrapper>
            <DisLikeButton />
            <div></div>
          </DisLikeWrapper>
        </IconWrapper>
      </Wrapper>
      <ButtonWrapper>
        <ListButton onClick={props.onClickList}>목록으로</ListButton>
        <EditButton onClick={props.onClickEdit}>수정하기</EditButton>
        <DeleteButton>삭제하기</DeleteButton>
      </ButtonWrapper>
      <LineBox></LineBox>
    </BigWrapper>
  );
}
