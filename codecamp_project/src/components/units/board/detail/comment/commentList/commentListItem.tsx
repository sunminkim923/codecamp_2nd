//@ts-nocheck
import { useState } from "react";
import CommentWrite from "../commentWrite/commentWrite.container";
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
} from "./commentList.styles";

export default function CommentListItem(props) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
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
              <DeleteButton src="/images/commentDelete.svg/" />
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
