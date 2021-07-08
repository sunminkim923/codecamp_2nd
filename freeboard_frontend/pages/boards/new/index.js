import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'
// import { assertScalarType } from 'graphql'
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

} from '../../../styles/boards/new/BoardsNew'
import { SingleFieldSubscriptionsRule } from 'graphql'

export default function New() {

    const [writer, setWriter] = useState ('')
    const [password, setPassword] = useState ('')
    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')

    const [writerError,setWriterError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [titleError, setTitleError] = useState('')
    const [contentsError, setContentsError] = useState('')

    const [qqq] = useMutation (
        gql`
            mutation aaaa ($boards:CreateBoardInput!){

                createBoard(createBoardInput:$boards) {
                    _id
                }
            }
        `
    )
    
    async function onClickSubmit() {
        if (writer === "") {
            setWriterError("이름을 입력하세요")
        }
        if (password === "") {
            setPasswordError("비밀번호를 입력하세요.")
        } 
        if (title === "") {
            setTitleError("제목을 입력하세요")
        }
        if (contents === "") {
            setContentsError("내용을 입력하세요")
        }
        try {
            const result = await qqq({
                variables: {
                    boards:{
                        writer: writer,
                        password: password,
                        title: title,
                        contents: contents
                    }
                }
            })
            alert("등록합니다")
        } catch (error){
            alert(error.message)
        } 
        
    }

    

    function onChangeWriter(event) {
        setWriter(event.target.value)
        if(event.target.value !== ""){
            setWriterError("")
        }
    }
    
    function onChangePassword(event) {
        setPassword(event.target.value)
        if(event.target.value !== "") {
            setPasswordError("")
        }
    }
    function onChangeTitle(event) {
        setTitle(event.target.value)
        if(event.target.value !== "") {
            setTitleError("")
        }
    }

    function onChangeContents(event) {
        setContents(event.target.value)
        if(event.target.value !=="") {
            setContentsError("")
        }
    }

    return (
    <Wrapper>
        <Title>게시물 등록</Title>
        <WriterWrapper>
            <InputWrapper>
                <Label>작성자</Label>
                <Writer name="writer" type="text" placeholder="이름을 입력해주세요." onChange={onChangeWriter}></Writer>
                <Error> {writerError} </Error>
            </InputWrapper>
            <InputWrapper>
                <Label> 비밀번호</Label>
                <Password name="password" type='password' onChange={onChangePassword} placeholder='비밀번호를 입력해주세요'></Password>
                <Error>{passwordError}</Error>
            </InputWrapper>
        </WriterWrapper>
        <InputWrapper>
            <Label>제목</Label>
            <Subject name="title" type='text' placeholder='제목을 작성해주세요.' onChange={onChangeTitle}></Subject>
            <Error>{titleError}</Error>
        </InputWrapper>
        <InputWrapper>
            <Label>내용</Label>
            <Contents name="contents" type='text' placeholder='내용을 작성해주세요.' onChange={onChangeContents}></Contents>
            <Error>{contentsError}</Error>
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
                <SubmitButton onClick={onClickSubmit}>
                    등록하기
                </SubmitButton>
            </ButtonWrapper>
            
        



        
    </Wrapper>    
    )
}

