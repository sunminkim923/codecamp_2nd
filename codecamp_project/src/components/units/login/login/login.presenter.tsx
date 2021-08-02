import {
    PageWrapper,
    Wrapper,
    Title,
    EmailInput,
    PasswordInput,
    KeepLogin,
    LoginButton,
    UnderLine,
    OnclickWrapper,
    FindEmail,
    FindPassword,
    Join,
    Error,
    Checkbox,
    CheckboxWrapper,


} from "./login.styles"

export default function LoginUI(props) {

    return (
        <>
            <PageWrapper>
                <Wrapper>
                    <Title>code.camp</Title>
                    <EmailInput type="text" placeholder="이메일을 입력하세요" onChange={props.onChangeEmail} />
                    <Error>{props.emailError}</Error>
                    <PasswordInput type="password" placeholder="비밀번호를 입력하세요" onChange={props.onChangePassword} />
                    <Error>{props.passwordError}</Error>
                    <CheckboxWrapper>
                        <Checkbox type="checkbox" />
                        <KeepLogin>로그인상태 유지</KeepLogin>
                    </CheckboxWrapper>
                    <LoginButton onClick={props.onClickLogin}>로그인하기</LoginButton>
                    <UnderLine></UnderLine>
                    <OnclickWrapper>
                        <FindEmail >아이디 찾기</FindEmail>
                        <div>|</div>
                        <FindPassword>비밀번호 찾기</FindPassword>
                        <div>|</div>
                        <Join onClick={props.onClickJoin} >회원가입</Join> 
                    </OnclickWrapper>     
                </Wrapper>
            </PageWrapper>

        </>

    )
}