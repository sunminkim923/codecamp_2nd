import {
    Wrapper,
    Logo,
    Title,
    Email,
    LineWrapper,
    Password,
    Login,
    FindWrapper,
    FindEmail,
    FindPassword,
    Signup,
    VerticalLine,
    Kakao,

} from '../../styles/eats/Eats'


export default function eats () {



    return (
        <Wrapper>
            <Logo> </Logo>
            <Title> 
                잇츠로드
            </Title>
            <Email type='text' placeholder='이메일을 입력해 주세요.'>
            </Email>
            <LineWrapper>
            </LineWrapper>
            <Password type='password' placeholder='비밀번호를 확인해주세요.'>
            </Password>
            <LineWrapper></LineWrapper>
            <Login>로그인</Login>
            <FindWrapper>
                <FindEmail>이메일 찾기</FindEmail>
                <VerticalLine></VerticalLine>
                <FindPassword>비밀번호 찾기</FindPassword>
                <VerticalLine></VerticalLine>
                <Signup>회원가입</Signup>
            </FindWrapper>
            <Kakao>카카오톡으로 로그인</Kakao>
        </Wrapper>

    )








}