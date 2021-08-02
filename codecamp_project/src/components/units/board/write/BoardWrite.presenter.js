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
  RadioButton,
  Radio,
  SubmitButtonWrapper,
  SubmitButton,
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
          <ContentsWrapper>
            <Text>내용</Text>
            <Contents type="text" placeholder="내용을 입력하세요" />
          </ContentsWrapper>
          <AdressWrapper>
            <Text>주소</Text>
            <ZoneCode type="text" placeholder="우편번호"></ZoneCode>
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
          <Text>메인설정</Text>
          <RadioWrapper>
            <RadioButton>
              <Radio type="radio" />
              <span>유튜브</span>
            </RadioButton>
            <RadioButton>
              <Radio type="radio" />
              <span>유튜브</span>
            </RadioButton>
          </RadioWrapper>
          <SubmitButtonWrapper>
            <SubmitButton>등록하기</SubmitButton>
          </SubmitButtonWrapper>
        </Wrapper>
      </PageWrapper>
    </>
  );
}
