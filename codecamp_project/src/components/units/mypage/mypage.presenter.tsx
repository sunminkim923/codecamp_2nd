import {
  PageWrapper,
  UserInfoWrapper,
  Title,
  ProfileImg,
  UserName,
  PointWrapper,
  PigIcon,
  Point,
  MyBasketWrapper,
  BasketIcon,
  MyBasket,
  MyPointWrapper,
  MyPoint,
  MyProfileWrapper,
  ProfileIcon,
  MyProfile,
} from "./mypage.styles";

export default function MypageUI() {
  return (
    <>
      <PageWrapper>
        <UserInfoWrapper>
          <Title>MYPAGE</Title>
          <ProfileImg src="/images/profile.svg/" />
          <UserName>노원두</UserName>
          <PointWrapper>
            <PigIcon src="/images/pig.png/" />
            <Point>100,000P</Point>
          </PointWrapper>
          <MyBasketWrapper>
            <BasketIcon src="/images/basket.png/" />
            <MyBasket>내장터</MyBasket>
          </MyBasketWrapper>
          <MyPointWrapper>
            <PigIcon src="/images/pig.png/" />
            <MyPoint>내 포인트</MyPoint>
          </MyPointWrapper>
          <MyProfileWrapper>
            <ProfileIcon src="/images/profile.svg/" />
            <MyProfile>내 프로필</MyProfile>
          </MyProfileWrapper>
        </UserInfoWrapper>
      </PageWrapper>
    </>
  );
}
