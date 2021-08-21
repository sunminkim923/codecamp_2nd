import {
  Wrapper,
  HeadWrapper,
  ProfileImg,
  ContentsWrapper,
  TopWrapper,
  Writer,
  ButtonWrapper,
  CommentEdit,
  CommentDelete,
  Contents,
  WritedDate,
  UnderLine,
} from "./commentlist.styles";

export default function CommentListItem(props) {
  return (
    <>
      <Wrapper key={data._id}>
        <HeadWrapper>
          <ProfileImg src="/images/profile.svg/" />
          <ContentsWrapper>
            <TopWrapper>
              <Writer>{data.user.name}</Writer>
              <ButtonWrapper>
                <CommentEdit
                  id={props.data._id}
                  src="/images/commentEdit.svg/"
                  onClick={props.onClickEdit}
                />
                <CommentDelete src="/images/commentDelete.svg" />
              </ButtonWrapper>
            </TopWrapper>
            <Contents>{data.contents}</Contents>
          </ContentsWrapper>
        </HeadWrapper>
        <WritedDate>{data.user.createdAt}</WritedDate>
        <UnderLine />
      </Wrapper>
    </>
  );
}
