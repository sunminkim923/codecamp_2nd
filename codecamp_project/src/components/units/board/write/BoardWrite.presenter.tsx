//@ts-nocheck
import ImageUpload from "../../../commons/imageupload/imageupload";
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
} from "./boardWrite.styles";

// @ts-ignore
export default function BoardWriteUI(props) {
  return (
    <>
      <PageWrapper>
        <Wrapper>
          <form
            onSubmit={props.handleSubmit(
              !props.isEdit ? props.onSubmit : props.onEdit
            )}
          >
            <BoardTitle>게시물 등록</BoardTitle>
            <TopWrapper>
              <WriterWrapper>
                <Text>작성자</Text>
                <WriterInput
                  placeholder="이름을 입력해주세요"
                  type="text"
                  {...props.register("writer")}
                />
                <Error>{props.errors.writer?.message}</Error>
              </WriterWrapper>
              <PasswordWrapper>
                <Text>비밀번호</Text>
                <PasswordInput
                  placeholder="비밀번호를 입력해주세요"
                  type="password"
                  {...props.register("password")}
                />
                <Error>{props.errors.password?.message}</Error>
              </PasswordWrapper>
            </TopWrapper>
            <TitleWrapper>
              <Text>제목</Text>
              <Title
                placeholder="제목을 입력해주세요"
                type="text"
                {...props.register("title")}
              />
              <Error>{props.errors.title?.message}</Error>
            </TitleWrapper>
            <ContentsWrapper>
              <Text>내용</Text>
              <Contents
                placeholder="내용을 입력해주세요"
                type="text"
                {...props.register("contents")}
              />
              <Error>{props.errors.contents?.message}</Error>
            </ContentsWrapper>
            <AdressWrapper>
              <Text>주소</Text>
              <ZoneCode type="text" placeholder="우편번호" readOnly></ZoneCode>
              <SearchAdress type="button">주소 검색하기</SearchAdress>
              <Adress placeholder="주소를 검색해주세요" readOnly />
              <AdressDetail type="text" placeholder="상세주소를 입력하세요" />
            </AdressWrapper>
            <YoutubeWrapper>
              <Text>유튜브</Text>
              <Youtube
                type="text"
                placeholder="링크를 입력하세요"
                {...props.register("youtubeUrl")}
              />
            </YoutubeWrapper>
            <Text>사진첨부</Text>
            <UploadWrapper>
              <ImageUpload setImageFile={props.setImageFile} />
            </UploadWrapper>
            {/* <RadioWrapper>
              <Text>메인설정</Text>
              <Radio type="radio" name="radio" id="youtube" />
              <lavel for="youtube">유튜브</lavel>
              <Radio type="radio" name="radio" />
              <Text02>사진</Text02>
            </RadioWrapper> */}
            <SubmitButtonWrapper>
              <SubmitButton type="submit" isActive={props.isActive}>
                등록하기
              </SubmitButton>
            </SubmitButtonWrapper>
          </form>
        </Wrapper>
      </PageWrapper>
    </>
  );
}