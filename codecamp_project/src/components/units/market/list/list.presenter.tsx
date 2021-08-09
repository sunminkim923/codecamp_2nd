import withAuth from "../../../commons/hocs/withAuth";
import { useQuery } from "@apollo/client";
import { FETCH_USEDITEMS } from "./list.queries";
import {
  PageWrapper,
  Wrapper,
  Title,
  BestProductWrapper,
  BestProduct,
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
} from "./list.styles";

function MarketListUI() {
  const { data } = useQuery(FETCH_USEDITEMS);

  return (
    <PageWrapper>
      <Wrapper>
        <Title>베스트상품</Title>
        <BestProductWrapper>
          <BestProduct></BestProduct>
          <BestProduct></BestProduct>
          <BestProduct></BestProduct>
          <BestProduct></BestProduct>
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
          <ProductWrapper>
            <ProductImg />
            <ProductExplanationWrapper>
              <ContentsWrapper>
                <ProductName>삼성전자 갤럭시탭A 10.1</ProductName>
                <ProductCharacter>2019 LTE 32GB</ProductCharacter>
                <ProductTag>#삼성전자 #갤럭시탭 #갓성비</ProductTag>
                <ProfileWrapper>
                  <ProfileImg src="/images/profile-small.svg" />
                  판매자
                  <HeartPoint src="/images/heart-small.svg" /> 20
                </ProfileWrapper>
              </ContentsWrapper>
              <PriceWrapper>
                <Price>200000원</Price>
              </PriceWrapper>
            </ProductExplanationWrapper>
          </ProductWrapper>
          {data?.fetchUseditems.map((data, index) => (
            <ProductWrapper>
              <ProductImg />
              <ProductExplanationWrapper>
                <ContentsWrapper>
                  <ProductName>{data.name}</ProductName>
                  <ProductCharacter>{data.remarks}</ProductCharacter>
                  <ProductTag>#삼성전자 #갤럭시탭 #갓성비</ProductTag>
                  <ProfileWrapper>
                    <ProfileImg src="/images/profile-small.svg" />
                    판매자
                    <HeartPoint src="/images/heart-small.svg" /> 20
                  </ProfileWrapper>
                </ContentsWrapper>
                <PriceWrapper>
                  <Price>{data.price}</Price>
                </PriceWrapper>
              </ProductExplanationWrapper>
            </ProductWrapper>
          ))}
          <SubmitButtonWrapper>
            <SubmitButton>상품등록하기</SubmitButton>
          </SubmitButtonWrapper>
        </ProductListWrapper>
      </Wrapper>
    </PageWrapper>
  );
}

export default withAuth(MarketListUI);
