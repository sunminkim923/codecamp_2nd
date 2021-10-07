//@ts-nocheck
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import CommentWrite from "../commentWrite/commentWrite.container";
import { DELETE_BOARD_COMMENT } from "./commentList.queries";
import {
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
  ModalInputWrapper,
} from "./commentList.styles";

export default function CommentListItem(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [onCancel, setOnCancel] = useState(false);
  const [onOk, setOnOk] = useState(false);
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onClickDelete = () => {
    setIsModal(true);
    setIsOpen(true);

    // deleteBoardComment({
    //   variables: {
    //     boardCommentId: props.data._id,
    //   },
    // });
  };

  return (
    <Wrapper key={props.data._id}>
      <HeadWrapper>
        <PofileImg src="/images/profile.svg/" />
        <ContentsWrapper>
          <TopWrapper>
            <WriterWrapper>
              <WriterName>{props.data?.writer}</WriterName>
              <StarPoint value={props.data.rating} />
            </WriterWrapper>
            <ButtonWrapper>
              <EditButton
                src="/images/commentEdit.svg/"
                onClick={onClickEdit}
              />
              <DeleteButton
                src="/images/commentDelete.svg/"
                onClick={onClickDelete}
              />
              {isModal && (
                <Modal title="댓글삭제" visible={isOpen}>
                  <ModalInputWrapper>
                    <div>비밀번호를 입력해주세요</div>
                    <input type="password" />
                  </ModalInputWrapper>
                </Modal>
              )}
            </ButtonWrapper>
          </TopWrapper>
          <Contents>{props.data?.contents}</Contents>
        </ContentsWrapper>
      </HeadWrapper>
      <CreateDate>{props.data?.createdAt}</CreateDate>
      {isEdit && (
        <CommentWrite isEdit={isEdit} data={props.data} setIsEdit={setIsEdit} />
      )}
      <UnderLine />
    </Wrapper>
  );
}
