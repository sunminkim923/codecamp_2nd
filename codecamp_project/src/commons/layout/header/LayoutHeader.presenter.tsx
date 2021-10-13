import {
  Header,
  BrandLogo,
  UserWrapper,
  ProfileImg,
  Text,
  HeightLine,
  UserPoint,
} from "./LayoutHeader.styles";

export default function LayoutHeaderUI(props: any) {
  return (
    <Header>
      <BrandLogo onClick={props.onClickLogo} src="/images/porschelogo.png" />
      {!props.userLoggedIn ? (
        <UserWrapper>
          <Text onClick={props.onClickLogin}>로그인</Text>
          <HeightLine />
          <Text onClick={props.onClickSignup}>회원가입</Text>
        </UserWrapper>
      ) : (
        <UserWrapper>
          <ProfileImg src="/images/profile.svg" />
          <Text>{props.data?.fetchUserLoggedIn.name}님</Text>
          <HeightLine />
          <UserPoint>
            {props.data?.fetchUserLoggedIn.userPoint.amount} Point
          </UserPoint>
          <HeightLine />
          <Text onClick={props.onClickLogout}>로그아웃</Text>
        </UserWrapper>
      )}
    </Header>
  );
}
