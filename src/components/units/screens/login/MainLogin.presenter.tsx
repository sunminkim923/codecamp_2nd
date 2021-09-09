import * as React from 'react';
import {Controller} from 'react-hook-form';
import {
  Wrapper,
  LogoWrapper,
  LogoImg,
  UserInput,
  LoginButtonWrapper,
  LoginButton,
} from './MainLogin.style';
import SocialLogin from './socialLogin/socialLogin.container';

const MainLoginPageUi = (props: any) => {
  return (
    <Wrapper>
      <LogoWrapper>
        <LogoImg source={require('../../../../imgs/logo.png')} />
      </LogoWrapper>
      <Controller
        control={props.control}
        name="Email"
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => (
          <UserInput
            onBlur={onBlur}
            onChangeText={(data: string) => onChange(data)}
            value={value}
            placeholder="이메일을 입력해주세요"
          />
        )}
      />
      <Controller
        control={props.control}
        name="Password"
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => (
          <UserInput
            onBlur={onBlur}
            onChangeText={(el: any) => onChange(el)}
            value={value}
            placeholder="비밀번호를 입력해주세요"
            secureTextEntry={true} // 비밀번호 입력
          />
        )}
      />
      <LoginButtonWrapper onPress={props.handleSubmit(props.onSubmit)}>
        <LoginButton>{'로그인'}</LoginButton>
      </LoginButtonWrapper>
      <SocialLogin />
    </Wrapper>
  );
};
export default MainLoginPageUi;
