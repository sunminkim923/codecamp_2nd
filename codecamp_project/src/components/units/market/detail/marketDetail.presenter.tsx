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
  MapAddress,
  SellerName,
  SellerDate,
} from "./marketDetail.styles";
import CommentWrite from "./comment/commentwrite/commentwrite.container";
import CommentList from "./comment/commentlist/commentlist.container";
import ReComment from "./comment/recommentlist/recommentList.contatiner";
import { Modal } from "antd";
import { getDate } from "../../../../commons/libraries/utils";

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
                <SellerName>
                  {props.data?.fetchUseditem.seller?.name}
                </SellerName>
                <SellerDate>
                  {getDate(props.data?.fetchUseditem.createdAt)}
                </SellerDate>
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
          <Price>{props.data?.fetchUseditem.price}???</Price>
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
          <Map id="map" />
          <MapAddress>
            ?????? ?????? ?????? :{" "}
            {props.data?.fetchUseditem.useditemAddress?.address}{" "}
            {props.data?.fetchUseditem.useditemAddress?.addressDetail}
          </MapAddress>
          <UnderLine />
          {props.marketSeller === props.loggedInUser && (
            <ButtonWrapper>
              <ListButton onClick={props.onClickList}>????????????</ListButton>
              <EditButton onClick={props.onClickEdit}>????????????</EditButton>
              {props.isModal && (
                <Modal
                  title="???????????????"
                  visible={props.isOpen}
                  onOk={props.onClickOk}
                  onCancel={props.onClickCancel}
                >
                  <div>???????????? ?????????????????????????</div>
                </Modal>
              )}
              <DeleteButton onClick={props.onClickDelete}>
                ????????????
              </DeleteButton>
            </ButtonWrapper>
          )}
          {props.marketSeller !== props.loggedInUser && (
            <BuyerButtonWrapper>
              <ButtonWrapperBuyer>
                <ListButton onClick={props.onClickList}>????????????</ListButton>
                <BuyButton onClick={props.onClickBuyItem}>????????????</BuyButton>
                <Modal
                  title="????????????"
                  visible={props.isOpen}
                  onOk={props.onClickBuyItemOk}
                  onCancel={props.onClickCancel}
                >
                  <div>????????? ?????????????????????????</div>
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
