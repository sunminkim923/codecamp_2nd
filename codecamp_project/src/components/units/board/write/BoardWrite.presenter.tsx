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
  ContentsWrapper,
  Contents,
  AdressWrapper,
  ZoneCode,
  SearchAdress,
  Adress,
  AdressDetail,
  YoutubeWrapper,
  Youtube,
  UploadWrapper,
  Upload,
  RadioWrapper,
  Radio,
  Text02,
  SubmitButtonWrapper,
  SubmitButton,
  Error,
} from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <>
      <PageWrapper>
        <Wrapper>
          <BoardTitle>게시물 등록</BoardTitle>
          <TopWrapper>
            <WriterWrapper>
              <Text>작성자</Text>
              <WriterInput
                type="text"
                placeholder="이름을 입력하세요"
                onChange={props.onChangeWriter}
              />
              <Error>{props.writerError}</Error>
            </WriterWrapper>
            <PasswordWrapper>
              <Text>비밀번호</Text>
              <PasswordInput
                type="password"
                placeholder="비밀번호를 입력하세요"
                onChange={props.onChangePassword}
              />
              <Error>{props.passwordError}</Error>
            </PasswordWrapper>
          </TopWrapper>
          <TitleWrapper>
            <Text>제목</Text>
            <Title
              type="text"
              placeholder="제목을 입력하세요"
              onChange={props.onChangeTitle}
            />
            <Error>{props.titleError}</Error>
          </TitleWrapper>
          <ContentsWrapper>
            <Text>내용</Text>
            <Contents
              type="text"
              placeholder="내용을 입력하세요"
              onChange={props.onChangeContents}
            />
            <Error>{props.contentsError}</Error>
          </ContentsWrapper>
          <AdressWrapper>
            <Text>주소</Text>
            <ZoneCode type="text" placeholder="우편번호" readOnly></ZoneCode>
            <SearchAdress>주소 검색하기</SearchAdress>
            <Adress placeholder="주소를 검색해주세요" readOnly />
            <AdressDetail type="text" placeholder="상세주소를 입력하세요" />
          </AdressWrapper>
          <YoutubeWrapper>
            <Text>유튜브</Text>
            <Youtube type="text" placeholder="링크를 입력하세요" />
          </YoutubeWrapper>
          <Text>사진첨부</Text>
          <UploadWrapper>
            <Upload>
              <div>+</div>
              <div>Upload</div>
            </Upload>
            <Upload>
              <div>+</div>
              <div>Upload</div>
            </Upload>
            <Upload>
              <div>+</div>
              <div>Upload</div>
            </Upload>
          </UploadWrapper>
          <RadioWrapper>
            <Text>메인설정</Text>
            <Radio type="radio" name="radio" />
            <Text02>유튜브</Text02>
            <Radio type="radio" name="radio" />
            <Text02>사진</Text02>
          </RadioWrapper>
          <SubmitButtonWrapper>
            <SubmitButton onClick={props.onClickSubmit}>등록하기</SubmitButton>
          </SubmitButtonWrapper>
        </Wrapper>
      </PageWrapper>
    </>
  );
}
