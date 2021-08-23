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
  DeleteButton,
} from "./market-detail.styles";
import CommentWrite from "../../../commons/comment/commentwrite/commentwrite.container";
import CommentList from "../../../commons/comment/commentlist/commentlist.container";
import ReComment from "../../../commons/comment/recommentlist/recommentList.contatiner";
import { Modal } from "antd";

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
              <LikeHeart
                src="/images/heart.svg"
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
            <DeleteButton onClick={props.onClickDelete}>삭제하기</DeleteButton>
          </ButtonWrapper>
        </Wrapper>
      </PageWrapper>
      <CommentWrite />
      <CommentList />
      <ReComment />
    </>
  );
}
