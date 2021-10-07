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
} from "./login.styles";
import Payment from "../../../commons/payment/payment";
import KakaoLogin from "react-kakao-login";

//@ts-ignore
export default function LoginUI(props) {
  return (
    <>
      <PageWrapper>
        <Wrapper>
          <form onSubmit={props.handleSubmit(props.onSubmit)}>
            <Title>code.camp</Title>
            <EmailInput
              type="text"
              placeholder="이메일을 입력하세요"
              {...props.register("email")}
            />
            <Error>{props.errors.email?.message}</Error>
            <PasswordInput
              type="password"
              placeholder="비밀번호를 입력하세요"
              {...props.register("password")}
            />
            <Error>{props.errors.password?.message}</Error>
            <CheckboxWrapper>
              <Checkbox type="checkbox" />
              <KeepLogin>로그인상태 유지</KeepLogin>
            </CheckboxWrapper>
            {/* @ts-ignore */}
            <LoginButton type="submit" isActive={props.isActive}>
              로그인하기
            </LoginButton>
          </form>
          <UnderLine></UnderLine>
          <OnclickWrapper>
            <FindEmail>아이디 찾기</FindEmail>
            <div>|</div>
            <FindPassword>비밀번호 찾기</FindPassword>
            <div>|</div>
            <Join onClick={props.onClickSignUp}>회원가입</Join>
          </OnclickWrapper>
          <Payment />
        </Wrapper>
        <KakaoLogin
          token={"fe853892c0427192f5e132563ab9f6aa"}
          onSuccess={console.log}
          onFail={console.error}
          onLogout={console.info}
        />
      </PageWrapper>
    </>
  );
}
