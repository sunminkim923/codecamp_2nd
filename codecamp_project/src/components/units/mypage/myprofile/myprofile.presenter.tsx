import {
  Wrapper,
  Title,
  InputWrapper,
  Text,
  Input,
  ButtonWrapper,
  ChangeButton,
} from "./myprofile.styles";

export default function MyProfilePageUI() {
  return (
    <Wrapper>
      <Title>비밀번호 변경</Title>
      <InputWrapper>
        <Text>현재 비밀번호</Text>
        <Input type="password" placeholder="현재비밀번호를 입력해주세요" />
      </InputWrapper>
      <InputWrapper>
        <Text>새 비밀번호</Text>
        <Input type="password" placeholder="새 비밀번호를 입력해주세요" />
      </InputWrapper>
      <InputWrapper>
        <Text>새 비밀번호 확인</Text>
        <Input type="password" placeholder="새 비밀번호를 확인해주세요" />
      </InputWrapper>
      <ButtonWrapper>
        <ChangeButton>비밀번호 변경</ChangeButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
