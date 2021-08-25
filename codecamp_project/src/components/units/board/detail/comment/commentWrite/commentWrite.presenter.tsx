import {
  PageWrapper,
  Wrapper,
  HeadWrapper,
  CommentIcon,
  Title,
  StarPoint,
  InputWrapper,
  Input,
  BottomWrapper,
  TextLength,
  SubmitButton,
} from "./commentWrite.styles";

export default function CommentWriteUI() {
  return (
    <>
      <PageWrapper>
        <Wrapper>
          <HeadWrapper>
            <CommentIcon src="/images/comment_icon.png" />
            <Title>댓글</Title>
          </HeadWrapper>
          <StarPoint />
          <InputWrapper>
            <Input placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다." />
            <BottomWrapper>
              <TextLength>0 / 100</TextLength>
              <SubmitButton>등록하기</SubmitButton>
            </BottomWrapper>
          </InputWrapper>
        </Wrapper>
      </PageWrapper>
    </>
  );
}
