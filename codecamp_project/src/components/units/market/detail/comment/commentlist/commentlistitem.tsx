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
import { useMutation } from "@apollo/client";
import { UPDATE_USEDITEM_QUESTION } from "./commentlist.queries";
import { Modal } from "antd";
import { FETCH_BOARD_COMMENTS } from "../../../../board/detail/comment/commentList/commentList.queries";
import { useRouter } from "next/router";

//@ts-ignore
export default function CommentListItem(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [isRecomment, setIsRecomment] = useState(false);
  const [textLength, setTextLength] = useState(0);
  const [contents, setContents] = useState("");

  const router = useRouter();

  const [updateUseditemQuestion] = useMutation(UPDATE_USEDITEM_QUESTION);

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
    setContents(event.target.value);
    setTextLength(event.target.value.length);
  };

  const onClicSubmit = async () => {
    try {
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents: contents,
          },
          useditemQuestionId: props.data._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: props.data._id },
          },
        ],
      });
      setIsEdit(false);
      Modal.info({ content: "댓글을 수정합니다." });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  console.log("asd", contents);

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
                <SubmitButton onClick={onClicSubmit}>수정하기</SubmitButton>
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
