import { EditButton } from "../detail/BoardDetail.styles";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import {
  Wrapper,
  Title,
  WriterWrapper,
  InputWrapper,
  Label,
  Writer,
  Password,
  Subject,
  Contents,
  ZipcodeWrapper,
  Zipcode,
  SearchButton,
  Address,
  AddressDetail,
  Youtube,
  ImageWrapper,
  ImageUpload,
  UploadButton,
  OptionWrapper,
  RadioButton,
  RadioLabel,
  ButtonWrapper,
  SubmitButton,
  Error,
} from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer
            name="writer"
            type="text"
            placeholder="이름을 입력해주세요."
            onChange={props.onChangeInputs}
            defaultValue={props.data?.fetchBoard.writer}
            readOnly={props.data?.fetchBoard.writer}
          ></Writer>
          <Error> {props.writerError} </Error>
        </InputWrapper>
        <InputWrapper>
          <Label> 비밀번호</Label>
          <Password
            name="password"
            type="password"
            onChange={props.onChangeInputs}
            placeholder="비밀번호를 입력해주세요"
          ></Password>
          <Error>{props.passwordError}</Error>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject
          name="title"
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={props.onChangeInputs}
          defaultValue={props.data?.fetchBoard.title}
        ></Subject>
        <Error>{props.titleError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents
          name="contents"
          type="text"
          placeholder="내용을 작성해주세요."
          onChange={props.onChangeInputs}
          defaultValue={props.data?.fetchBoard.contents}
        ></Contents>
        <Error>{props.contentsError}</Error>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <Zipcode>{props.zonecode}</Zipcode>
          <SearchButton onClick={props.onClickSearch}>주소 검색</SearchButton>
          {props.isClick && (
            <Modal
              text="주소를 입력하세요"
              visible={props.isClick}
              onOk={props.onClickCancel}
              onCancel={props.onClickCancel}
            >
              <DaumPostcode onComplete={props.onComplete} />
            </Modal>
          )}
        </ZipcodeWrapper>
        <Address placeholder="주소를 검색해주세요">{props.address}</Address>
        <AddressDetail type="text" placeholder="상세주소를 입력해주세요" />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube
          name="youtubeUrl"
          placeholder="링크를 입력해주세요"
          onChange={props.onChangeInputs}
        ></Youtube>
      </InputWrapper>
      <ImageWrapper>
        <Label>사진첨부</Label>
        <UploadButton onClick={props.onClickUpload01}>
          <div> + </div>
          <div>Upload</div>
        </UploadButton>
        <UploadButton>
          <div> + </div>
          <div>Upload</div>
        </UploadButton>
        <UploadButton>
          <div> + </div>
          <div>Upload</div>
        </UploadButton>
      </ImageWrapper>
      <ImageUpload
        ref={props.fileRef}
        type="file"
        onChange={props.onChangeFile}
      />
      <OptionWrapper>
        <Label>메인 설정</Label>
        <RadioButton type="radio"></RadioButton>
        <RadioLabel>유튜브</RadioLabel>
        <RadioButton type="radio"></RadioButton>
        <RadioLabel>사진</RadioLabel>
      </OptionWrapper>
      <ButtonWrapper>
        {!props.isEdit && (
          <SubmitButton onClick={props.onClickSubmit} active={props.active}>
            등록하기
          </SubmitButton>
        )}
        {props.isEdit && (
          <EditButton onClick={props.onClickEdit} active={props.active}>
            수정하기
          </EditButton>
        )}
        {props.isModal && (
          <Modal
            title="게시글 등록"
            visible={props.isOpen}
            onOk={props.onClickOk}
            onCancel={props.onClickCancel}
          >
            <div>게시글을 등록합니까?</div>
          </Modal>
        )}
      </ButtonWrapper>
    </Wrapper>
  );
}
