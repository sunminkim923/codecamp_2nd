import {
    PageWrapper,
    Wrapper,
    Title,
    Text,
    InputBox,
    JoinButton,
    Error,
} from "./signup.styles"

export default function SignupUI(props) {

    return (
        <PageWrapper>
            <Wrapper>
                <Title>회원가입</Title>
                <Text>이름</Text>
                <InputBox type="text" placeholder="이름을 입력하세요" onChange={props.onChangeName}/>
                <Error>{props.nameError}</Error>
                <Text>이메일</Text>
                <InputBox type="text" placeholder="이메일을 입력하세요" onChange={props.onChangeEmail} />
                <Error>{props.emailError}</Error>
                <Text>비밀번호</Text>
                <InputBox type="password" placeholder="비밀번호를 입력하세요" onChange={props.onChangePassword} />
                <Error>{props.passwordError}</Error>
                <Text>비밀번호 확인</Text>
                <InputBox type="password" placeholder="비밀번호를 입력하세요" onChange={props.onChangeSamePassword}/>
                <Error>{props.samePasswordError}</Error>
                <JoinButton onClick={props.onClickJoin} >회원가입하기</JoinButton>
            </Wrapper>
        </PageWrapper>
    )
}