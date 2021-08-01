import {
  Wrapper,
  PageWrapper,
  BoardTitle,
  TopWrapper,
  WriterWrapper,
  Text,
  WriterInput,
  PasswordWrapper,
  PasswordInput,
  TitleWrapper,
  Title,
} from "./BoardWrite.styles";

export default function BoardWriteUI() {
  return (
    <>
      <PageWrapper>
        <Wrapper>
          <BoardTitle>게시물 등록</BoardTitle>
          <TopWrapper>
            <WriterWrapper>
              <Text>작성자</Text>
              <WriterInput type="text" placeholder="이름을 입력하세요" />
            </WriterWrapper>
            <PasswordWrapper>
              <Text>비밀번호</Text>
              <PasswordInput
                type="password"
                placeholder="비밀번호를 입력하세요"
              />
            </PasswordWrapper>
          </TopWrapper>
          <TitleWrapper>
            <Text>제목</Text>
            <Title type="text" placeholder="제목을 입력하세요" />
          </TitleWrapper>
        </Wrapper>
      </PageWrapper>
    </>
  );
}
