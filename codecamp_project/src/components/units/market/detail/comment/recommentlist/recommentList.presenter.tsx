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

export default function ReCommentListUI(props: any) {
  return (
    <div>
      {props.answerData?.fetchUseditemQuestionAnswers.map((data: any) => (
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
                  {props.loggedInuser === data.user._id && (
                    <EditButton
                      src="/images/commentEdit.svg/"
                      onClick={onClickEdit}
                    />
                  )}

                  {props.loggedInuser === data.user._id && (
                    <DeleteButton src="/images/commentDelete.svg" />
                  )}
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
