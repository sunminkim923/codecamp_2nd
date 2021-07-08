import { useState } from 'react'
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
    LogoTop,
    LogoBottom,
    Error
} from '../../styles/eats/Eats'


export default function eats () {

    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')

    function onClickLogin () {
        if (email ==='') {
            setEmail ("이메일주소를 다시 확인해주세요")
        } if (password === '') {
            setPassword ("비밀번호를 다시 확인해주세요.")
        } 
    
    }
    
// @ 들어있는지 확인 하는법 iunclude 활용


    return (
        <Wrapper>
            <Logo> 
                <LogoBottom src="/eats/logo_bottom.png" />
                <LogoTop src="/eats/logo_top.png" />
            </Logo>
            <Title> 
                잇츠로드
            </Title>
            <Email name="email" type='text' placeholder='이메일을 입력해 주세요.'>
            </Email>
            <LineWrapper></LineWrapper>
            <Error>{email}</Error>
            <Password name="password" type='password' placeholder='비밀번호를 확인해주세요.'></Password>
            <Error>{password}</Error>
            <LineWrapper></LineWrapper>
            <Login onClick={onClickLogin}>로그인</Login>
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