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
  RecommentButton,
} from "./recommentList.styles";

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
                <RecommentButton src="/images/commentButton.svg/" />
              </ContentsWrapper>
            </BodyWrapper>
          </CommentWrapper>
          <CreatedAt>{data.createdAt}</CreatedAt>
        </Wrapper>
      ))}
    </div>
  );
}
