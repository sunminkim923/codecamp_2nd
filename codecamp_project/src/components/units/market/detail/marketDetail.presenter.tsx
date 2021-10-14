//@ts-nocheck
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
  BuyerButtonWrapper,
  ButtonWrapperBuyer,
  ListButton,
  EditButton,
  DeleteButton,
  BuyButton,
} from "./marketDetail.styles";
import CommentWrite from "./comment/commentwrite/commentwrite.container";
import CommentList from "./comment/commentlist/commentlist.container";
import ReComment from "./comment/recommentlist/recommentList.contatiner";
import { Modal } from "antd";

//@ts-ignore
export default function MarketDetailUI(props) {
  return (
    <>
      <PageWrapper>
        <Wrapper>
          <HeadWrapper>
            <ProfileWrapper>
              <Profile src="/images/profile.svg" />
              <WriterWrapper>
                <div>{props.data?.fetchUseditem.seller?.name}</div>
                <div>{props.data?.fetchUseditem.createdAt}</div>
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
              <LikeHeart
                src="/images/toggle_icon_filled.png"
                onClick={props.onClickToggle}
              />
              <LikePoint>{props.data?.fetchUseditem.pickedCount}</LikePoint>
            </LikePointWrapper>
          </ProductTitleWrapper>
          <Price>{props.data?.fetchUseditem.price}원</Price>
          <ProductImageWrapper>
            {props.data?.fetchUseditem.images.map((data) => (
              <ImageWrapper
                key={data}
                src={data ? `https://storage.googleapis.com/${data}` : ""}
              />
            ))}
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
          {props.marketSeller === props.loggedInUser && (
            <ButtonWrapper>
              <ListButton onClick={props.onClickList}>목록으로</ListButton>
              <EditButton onClick={props.onClickEdit}>수정하기</EditButton>
              {props.isModal && (
                <Modal
                  title="게시글삭제"
                  visible={props.isOpen}
                  onOk={props.onClickOk}
                  onCancel={props.onClickCancel}
                >
                  <div>게시글을 삭제하시겠습니까?</div>
                </Modal>
              )}
              <DeleteButton onClick={props.onClickDelete}>
                삭제하기
              </DeleteButton>
            </ButtonWrapper>
          )}
          {props.marketSeller !== props.loggedInUser && (
            <BuyerButtonWrapper>
              <ButtonWrapperBuyer>
                <ListButton onClick={props.onClickList}>목록으로</ListButton>
                <BuyButton onClick={props.onClickBuyItem}>구매하기</BuyButton>
                <Modal
                  title="상품구매"
                  visible={props.isOpen}
                  onOk={props.onClickBuyItemOk}
                  onCancel={props.onClickCancel}
                >
                  <div>상품을 구매하시겠습니까?</div>
                </Modal>
              </ButtonWrapperBuyer>
            </BuyerButtonWrapper>
          )}
        </Wrapper>
      </PageWrapper>
      <CommentWrite />
      <CommentList />
      <ReComment />
    </>
  );
}
