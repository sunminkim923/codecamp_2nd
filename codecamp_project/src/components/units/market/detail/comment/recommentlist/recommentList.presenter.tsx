import {
  Wrapper,
  CommentWrapper,
  ArrowImg,
  BodyWrapper,
  ProfileImg,
  ContentsWrapper,
  WriterWrapper,
  WriterName,
  Contents,
  CreatedAt,
  EditWrapper,
  DeleteButton,
  EditButton,
} from "./recommentList.styles";

const onClickEdit = () => {};

export default function ReCommentListUI(props) {
  return (
    <div>
      {props.answerData?.fetchUseditemQuestionAnswers.map((data) => (
        <Wrapper>
          <CommentWrapper key={data._id}>
            <ArrowImg src="/images/arrow_comment.png/" />
            <BodyWrapper>
              <ProfileImg src="/images/profile.svg/" />
              <ContentsWrapper>
                <WriterWrapper>
                  <WriterName>{data.user.name}</WriterName>
                  <Contents>{data.contents}</Contents>
                </WriterWrapper>
                <EditWrapper>
                  <EditButton
                    src="/images/commentEdit.svg/"
                    onClick={onClickEdit}
                  />
                  <DeleteButton src="/images/commentDelete.svg" />
                </EditWrapper>
              </ContentsWrapper>
            </BodyWrapper>
          </CommentWrapper>
          <CreatedAt>{data.createdAt}</CreatedAt>
        </Wrapper>
      ))}
    </div>
  );
}
