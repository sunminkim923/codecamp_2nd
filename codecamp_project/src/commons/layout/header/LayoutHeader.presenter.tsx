import {
  Header,
  BrandLogo,
  UserWrapper,
  ProfileImg,
  Text,
  HeightLine,
} from "./LayoutHeader.styles";

export default function LayoutHeaderUI(props) {
  return (
    <Header>
      <BrandLogo src="/images/porschelogo.png" />
      <UserWrapper>
        <ProfileImg src="/images/profile.svg" />
        <Text onClick={props.onClickLogin}>로그인</Text>
        <HeightLine />
        <Text>회원가입</Text>
      </UserWrapper>
    </Header>
  );
}
