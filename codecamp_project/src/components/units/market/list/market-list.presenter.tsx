import ViewedProduct from "../../../commons/viewed-product/viewedproduct";
import PagenationPage from "../../../commons/pagenations/pagenations.container";
import {
  PageWrapper,
  Wrapper,
  Title,
  BestProductWrapper,
  BestProduct,
  BestProductImg,
  BestProductInfoWrapper,
  BestProductName,
  BestProductInfoBottomWrapper,
  BestProductCharacterWrapper,
  BestProductRemarks,
  BestProductPrice,
  BestProductHeartPointWrapper,
  BestProductHeart,
  BestProductHeartPoint,
  ProductListWrapper,
  TopWrapper,
  TextWrapper,
  SearchWrapper,
  Text,
  SearchInput,
  SearchDate,
  SearchButton,
  ProductWrapper,
  ProductImg,
  ProductExplanationWrapper,
  ProductName,
  ProductCharacter,
  ProductTag,
  ProfileWrapper,
  ProfileImg,
  HeartPoint,
  ContentsWrapper,
  PriceWrapper,
  Price,
  SubmitButtonWrapper,
  SubmitButton,
  StickyWrapper,
} from "./market-list.styles";

export default function MarketListUI(props) {
  return (
    <PageWrapper>
      <Wrapper>
        <Title>베스트상품</Title>
        <BestProductWrapper>
          {props.newData?.fetchUseditemsOfTheBest.map((data, index) => (
            <BestProduct key={data._id}>
              <BestProductImg
                src={
                  data.images[0]
                    ? `https://storage.googleapis.com/${data.images[0]}`
                    : " "
                }
              />
              <BestProductInfoWrapper
                onClick={() => props.onClickBestProduct(data._id)}
              >
                <BestProductName>{data.name}</BestProductName>
                <BestProductInfoBottomWrapper>
                  <BestProductCharacterWrapper>
                    <BestProductRemarks>{data.remarks}</BestProductRemarks>
                    <BestProductPrice>{data.price} 원</BestProductPrice>
                  </BestProductCharacterWrapper>
                  <BestProductHeartPointWrapper>
                    <BestProductHeart src="/images/heart-small.svg" />
                    <BestProductHeartPoint>
                      {data.pickedCount}
                    </BestProductHeartPoint>
                  </BestProductHeartPointWrapper>
                </BestProductInfoBottomWrapper>
              </BestProductInfoWrapper>
            </BestProduct>
          ))}
        </BestProductWrapper>
        <ProductListWrapper>
          <TopWrapper>
            <TextWrapper>
              <Text>판매중상품</Text>
              <Text>판매된상품</Text>
            </TextWrapper>
            <SearchWrapper>
              <SearchInput placeholder="제품을 검색해주세요" />
              <SearchDate>2020.12.02 ~ 2020.12.02</SearchDate>
              <SearchButton>검색</SearchButton>
            </SearchWrapper>
          </TopWrapper>
          {props.data?.fetchUseditems.map((data) => (
            <ProductWrapper key={data._id}>
              <ProductImg
                src={
                  data.images[0]
                    ? `https://storage.googleapis.com/${data.images[0]}`
                    : " "
                }
              />
              <ProductExplanationWrapper
                onClick={() => props.onClickProduct(data._id)}
              >
                <ContentsWrapper>
                  <ProductName>{data.name}</ProductName>
                  <ProductCharacter>{data.remarks}</ProductCharacter>
                  <ProductTag>{data.tags}</ProductTag>
                  <ProfileWrapper>
                    <ProfileImg src="/images/profile-small.svg" />
                    판매자
                    <HeartPoint src="/images/heart-small.svg" />
                    {data.pickedCount}
                  </ProfileWrapper>
                </ContentsWrapper>
                <PriceWrapper>
                  <Price>{data.price} 원</Price>
                </PriceWrapper>
              </ProductExplanationWrapper>
            </ProductWrapper>
          ))}
          <SubmitButtonWrapper>
            <PagenationPage refetch={props.refetch} />
            <SubmitButton onClick={props.onClickSubmit}>
              상품등록하기
            </SubmitButton>
          </SubmitButtonWrapper>
        </ProductListWrapper>
      </Wrapper>
      <StickyWrapper>
        <ViewedProduct></ViewedProduct>
      </StickyWrapper>
    </PageWrapper>
  );
}

// export default withAuth(MarketListUI);
