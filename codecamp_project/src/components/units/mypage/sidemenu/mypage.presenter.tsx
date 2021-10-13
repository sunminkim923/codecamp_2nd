import MybasketPage from "../mybasket/mybasket.container";
import MyProfilePage from "../myprofile/myprofile.container";
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

export default function SideMenuUI(props: any) {
  return (
    <>
      <PageWrapper>
        <UserInfoWrapper>
          <Title>MYPAGE</Title>
          <ProfileImg src="/images/profile.svg/" />
          <UserName>{props.data?.fetchUserLoggedIn.name}</UserName>
          <PointWrapper>
            <PigIcon src="/images/pig.png/" />
            <Point>{props.data?.fetchUserLoggedIn.userPoint.amount} P</Point>
          </PointWrapper>
          <MyBasketWrapper>
            <BasketIcon src="/images/basket.png/" />
            <MyBasket>내 장터</MyBasket>
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
        {/* <MybasketPage /> */}
        <MyProfilePage />
      </PageWrapper>
    </>
  );
}
