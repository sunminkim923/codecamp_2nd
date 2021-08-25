// @ts-nocheck
import {
  PageWrapper,
  Wrapper,
  HeadWrapper,
  PofileImg,
  ContentsWrapper,
  TopWrapper,
  WriterWrapper,
  WriterName,
  StarPoint,
  ButtonWrapper,
  EditButton,
  DeleteButton,
  Contents,
  CreateDate,
  UnderLine,
} from "./commentList.styles";

export default function CommentListUI(props) {
  return (
    <PageWrapper>
      {props.commentData?.fetchBoardComments.map((data) => (
        <Wrapper>
          <HeadWrapper>
            <PofileImg src="/images/profile.svg/" />
            <ContentsWrapper>
              <TopWrapper>
                <WriterWrapper>
                  <WriterName>{data?.writer}</WriterName>
                  <StarPoint value={data.rating} />
                </WriterWrapper>
                <ButtonWrapper>
                  <EditButton src="/images/commentEdit.svg/" />
                  <DeleteButton src="/images/commentDelete.svg/" />
                </ButtonWrapper>
              </TopWrapper>
              <Contents>{data?.contents}</Contents>
            </ContentsWrapper>
          </HeadWrapper>
          <CreateDate>{data?.createdAt}</CreateDate>
          <UnderLine />
        </Wrapper>
      ))}
    </PageWrapper>
  );
}
