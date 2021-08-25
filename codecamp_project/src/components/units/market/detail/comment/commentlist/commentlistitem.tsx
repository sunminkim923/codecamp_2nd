import ReCommentList from "../recommentlist/recommentList.contatiner";
import RecommentWrite from "../reccomentWrite/recommentWrite.container";
import { useState } from "react";

import {
  Wrapper,
  HeadWrapper,
  ProfileImg,
  ContentsWrapper,
  TopWrapper,
  Writer,
  ButtonWrapper,
  CommentEdit,
  ReComment,
  CommentDelete,
  Contents,
  WritedDate,
  UnderLine,
  EditWrapper,
  ExitWrapper,
  ExitButton,
  InputWrapper,
  CommentInput,
  SubmitWrapper,
  TextLength,
  SubmitButton,
} from "./commentlist.styles";

//@ts-ignore
export default function CommentListItem(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [isRecomment, setIsRecomment] = useState(false);
  const [textLength, setTextLength] = useState(0);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onClickExit = () => {
    setIsEdit(false);
  };

  const onClickRecomment = () => {
    setIsRecomment(true);
  };

  //@ts-ignore
  const onChangeText = (event) => {
    setTextLength(event.target.value.length);
  };

  return (
    <>
      <Wrapper key={props.data._id}>
        {!isEdit && (
          <div>
            <HeadWrapper>
              <ProfileImg src="/images/profile.svg/" />
              <ContentsWrapper>
                <TopWrapper>
                  <Writer>{props.data.user.name}</Writer>
                  <ButtonWrapper>
                    <CommentEdit
                      id={props.data._id}
                      src="/images/commentEdit.svg/"
                      onClick={onClickEdit}
                      // onClick={onClickAaa}
                    />
                    <ReComment
                      src="/images/commentButton.svg/"
                      onClick={onClickRecomment}
                    />
                    <CommentDelete src="/images/commentDelete.svg" />
                  </ButtonWrapper>
                </TopWrapper>
                <Contents>{props.data.contents}</Contents>
              </ContentsWrapper>
            </HeadWrapper>
            <WritedDate> {props.data.user.createdAt} </WritedDate>
          </div>
        )}
        {isEdit && (
          <EditWrapper>
            <ExitWrapper>
              <ExitButton
                src="/images/commentDelete.svg/"
                onClick={onClickExit}
              />
            </ExitWrapper>
            <InputWrapper>
              <CommentInput
                placeholder="수정할 댓글을 입력해주세요"
                onChange={onChangeText}
              />
              <SubmitWrapper>
                <TextLength> {textLength} / 100 </TextLength>
                <SubmitButton>답글등록</SubmitButton>
              </SubmitWrapper>
            </InputWrapper>
          </EditWrapper>
        )}
        {isRecomment && (
          <RecommentWrite
            data={props.data._id}
            setIsRecomment={setIsRecomment}
          />
        )}
        <ReCommentList commentId={props.data?._id} />
        <UnderLine />
      </Wrapper>
    </>
  );
}
