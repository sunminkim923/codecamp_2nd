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
import CommentWrite from "../commentwrite/commentwrite.container";
import CommentList from "../commentlist/commentlist.container";
import ReComment from "../recomment/recomment.contatiner";

export default function ProductDetailUI(props) {
  return (
    <>
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
          <ProductExplanation
            dangerouslySetInnerHTML={{
              __html: props.data?.fetchUseditem.contents,
            }}
          ></ProductExplanation>
          <ProductTag>{props.data?.fetchUseditem.tags}</ProductTag>
          <UnderLine />
          <Map />
          <UnderLine />
          <ButtonWrapper>
            <ListButton onClick={props.onClickList}>목록으로</ListButton>
            <EditButton onClick={props.onClickEdit}>수정하기</EditButton>
          </ButtonWrapper>
        </Wrapper>
      </PageWrapper>
      <CommentWrite />
      <CommentList />
      <ReComment />
    </>
  );
}
