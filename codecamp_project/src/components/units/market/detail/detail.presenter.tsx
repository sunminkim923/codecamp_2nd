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
export default function ProductDetailUI(props) {
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
            <Character>{props.data?.fetchUseditem.remarks}</Character>
            <Product>{props.data?.fetchUseditem.name}</Product>
          </TitleWrapper>
          <LikePointWrapper>
            <LikeHeart src="/images/heart.svg" />
            <LikePoint>20</LikePoint>
          </LikePointWrapper>
        </ProductTitleWrapper>
        <Price>{props.data?.fetchUseditem.price}원</Price>
        <ProductImageWrapper>
          <ImageWrapper></ImageWrapper>
        </ProductImageWrapper>
        <ProductExplanation>
          {props.data?.fetchUseditem.contents}
        </ProductExplanation>
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
