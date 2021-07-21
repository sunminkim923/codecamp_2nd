import {
  CommentWrapper,
  Comment,
  CommentWriter,
  CommentPassword,
  Star,
  CommentBox,
  CommentText,
  SubmitButton,
} from "./BoardCommentWrite.styles";

export default function BoardCommentWriteUI(props) {
  return (
    <CommentWrapper>
      <div>
        <img src="/rate_review-24px.svg"></img>
        <Comment>댓글</Comment>
      </div>
      <CommentWriter
        type="text"
        placeholder="작성자"
        name="writer"
        onChange={props.onChangeInputs}
      />
      <CommentPassword
        type="password"
        placeholder="비밀번호"
        name="password"
        onChange={props.onChangeInputs}
      />
      <Star onChange={props.onChangeStar} allowHalf defaultValue={2.5} />
      <CommentBox>
        <CommentText
          type="text"
          placeholder="개인정보를 공유 및 요청하거나, 명예 회손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          name="contents"
          onChange={props.onChangeInputs}
        ></CommentText>
        <SubmitButton onClick={props.onClickSubmit}>등록하기</SubmitButton>
      </CommentBox>
    </CommentWrapper>
  );
}
