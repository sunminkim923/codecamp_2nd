
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
    Youtube,
    ImageWrapper,
    UploadButton,
    OptionWrapper,
    RadioButton,
    RadioLabel,
    ButtonWrapper,
    SubmitButton,
    Error

} from './BoardWrite.styles'



export default function BoardWriteUI(props) { 

    return (
        <Wrapper>
            <Title>게시물 등록</Title>
            <WriterWrapper>
                <InputWrapper>
                    <Label>작성자</Label>
                    <Writer name="writer" type="text" placeholder="이름을 입력해주세요." onChange={props.aaa}></Writer>
                    <Error> {props.qqq} </Error>
                </InputWrapper>
                <InputWrapper>
                    <Label> 비밀번호</Label>
                    <Password name="password" type='password' onChange={props.bbb} placeholder='비밀번호를 입력해주세요'></Password>
                    <Error>{props.www}</Error>
                </InputWrapper>
            </WriterWrapper>
            <InputWrapper>
                <Label>제목</Label>
                <Subject name="title" type='text' placeholder='제목을 작성해주세요.' onChange={props.ccc}></Subject>
                <Error>{props.eee}</Error>
            </InputWrapper>
            <InputWrapper>
                <Label>내용</Label>
                <Contents name="contents" type='text' placeholder='내용을 작성해주세요.' onChange={props.ddd}></Contents>
                <Error>{props.rrr}</Error>
            </InputWrapper>
            <InputWrapper>
                <Label>주소</Label>
                <ZipcodeWrapper>
                    <Zipcode placeholder='07250'></Zipcode>
                    <SearchButton>우편번호 검색</SearchButton>
                </ZipcodeWrapper>
                <Address />
                <Address />
            </InputWrapper>
            <InputWrapper>
                <Label>유튜브</Label>
                <Youtube placeholder='링크를 입력해주세요'></Youtube>
            </InputWrapper>
            <ImageWrapper>
                <Label>사진첨부</Label>
                <UploadButton>
                    <div>+</div>
                    <div>Upload</div>
                </UploadButton>
                <UploadButton>
                    <div>+</div>
                    <div>Upload</div>
                </UploadButton>
                <UploadButton>
                    <div>+</div>
                    <div>Upload</div>
                </UploadButton>
            </ImageWrapper>
            <OptionWrapper>
                <Label>메인 설정</Label>
                <RadioButton type="radio"></RadioButton>
                <RadioLabel>유튜브</RadioLabel>
                <RadioButton type="radio"></RadioButton> 
                <RadioLabel>사진</RadioLabel>
            </OptionWrapper>
            <ButtonWrapper>
                <SubmitButton onClick={props.ttt}>
                    등록하기
                </SubmitButton>
            </ButtonWrapper>
        </Wrapper>    
    )
}