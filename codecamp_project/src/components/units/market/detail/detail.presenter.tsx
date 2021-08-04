import {
  PageWrapper,
  Wrapper,
  HeadWrapper,
  ProfileWrapper,
  Profile,
  WriterWrapper,
  LocationWrapper,
  Icon01,
  Location,
  UnderLine,
  ProductTitleWrapper,
  TitleWrapper,
  Character,
  Product,
  LikePointWrapper,
  LikeHeart,
  LikePoint,
  Price,
  ProductImageWrapper,
  ImageWrapper,
  ProductExplanation,
  ProductTag,
  Map,
  ButtonWrapper,
  ListButton,
  EditButton,
} from "./detail.styles";
export default function ProductDetailUI() {
  return (
    <PageWrapper>
      <Wrapper>
        <HeadWrapper>
          <ProfileWrapper>
            <Profile src="/images/profile.svg" />
            <WriterWrapper>
              <div>판매자</div>
              <div>Date : 2021.02.18</div>
            </WriterWrapper>
          </ProfileWrapper>
          <LocationWrapper>
            <Icon01 src="/images/file.svg" />
            <Location src="/images/local.svg" />
          </LocationWrapper>
        </HeadWrapper>
        <UnderLine></UnderLine>
        <ProductTitleWrapper>
          <TitleWrapper>
            <Character>2019 LTE 32GB</Character>
            <Product>삼성전자 갤럭시탭A 10.1</Product>
          </TitleWrapper>
          <LikePointWrapper>
            <LikeHeart src="/images/heart.svg" />
            <LikePoint>20</LikePoint>
          </LikePointWrapper>
        </ProductTitleWrapper>
        <Price>240,120원</Price>
        <ProductImageWrapper>
          <ImageWrapper></ImageWrapper>
        </ProductImageWrapper>
        <ProductExplanation></ProductExplanation>
        <ProductTag>#삼성전자 #갤럭시탭 #갓성비</ProductTag>
        <UnderLine />
        <Map />
        <UnderLine />
        <ButtonWrapper>
          <ListButton>목록으로</ListButton>
          <EditButton>수정하기</EditButton>
        </ButtonWrapper>
      </Wrapper>
    </PageWrapper>
  );
}
