import styled from '@emotion/styled'

export const Wrapper = styled.div`
    margin: 100px;
    width: 640px;
    height: 1138px;
    padding-top: 43px;
    padding-bottom: 83px;
    padding-right: 50px;
    padding-left: 50px;
    border: 1px solid black;
    display: flex;  
    flex-direction: column;
    align-items: center;
    background-image: url("/eats/login_background.png");
`;

export const Logo = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid red;
    margin-top: 181px;
`;

export const Title = styled.div`
    width: 218px;
    height: 62px;
    margin-top: 27px;
    font-size: 60px;
    font-weight: bold;
    letter-spacing: --2px;
    color: #ffffff;
`;

export const Email = styled.input`
    width: 540px;
    height: 24;
    margin-top: 168px;
    font-size: 24px;
    border: none;
`
export const LineWrapper = styled.div`
    width: 540px;
    height: 1px;
    margin-top: 20px;
    border-bottom: 1px solid #ffffff;
    opacity : 0.4;
`;

export const Password = styled.input`
    width: 540px;
    height: 24px;
    margin-top: 57px;
    font-size: 24px;
    border: none;
`;

export const Login = styled.button`
    width: 540px;
    height: 76px;
    margin-top: 50px;
    padding: 25px;
    border-radius: 38px;
    font-size: 26px;
    font-weight: bold;
    text-align: center;
`
export const FindWrapper = styled.div`
    width: 100%;
    font-size: 20px;
    display: flex;
    justify-content: space-evenly;
`;

export const FindEmail = styled.button`
    width: 95px;
    height: 20px;
    margin-top: 44px;
    border: none;
`;

export const FindPassword = styled.button`
    width: 113px;
    height: 20px;
    margin-top: 44px;
    border: none;
`;

export const Signup = styled.button`
    width: 74px;
    height: 20px;
    margin-top: 44px;
    border: none;
`;

export const VerticalLine = styled.div`
    width: 1px;
    height: 12px;
    margin-top: 48px;
    border: 1px solid black;
`;

export const Kakao = styled.button`
    width: 540px;
    height: 76px;
    margin-top: 60px;
    padding: 18px 128px;
    border: 2px solid #fae100;
    border-radius: 38px;
    background-color: white;
`;

export const LogoTop = styled.img`
    position: absolute;
    top: 325px;
`;

export const LogoBottom = styled.img`
    position:relative;
`;

export const Error = styled.div`
    height: 20px;
    margin-top: 10px;
`;
