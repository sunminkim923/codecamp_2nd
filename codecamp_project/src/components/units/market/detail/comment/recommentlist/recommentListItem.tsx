import { useState } from "react";
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

export default function ReCommentListItem(props: any) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  return (
    <Wrapper key={props.data._id}>
      {!isEdit && (
        <div>
          <CommentWrapper>
            <ArrowImg src="/images/arrow_comment.png/" />
            <BodyWrapper>
              <ProfileImg src="/images/profile.svg/" />
              <ContentsWrapper>
                <WriterWrapper>
                  <WriterName>{props.data.user.name}</WriterName>
                  <Contents>{props.data.contents}</Contents>
                </WriterWrapper>
                <EditWrapper>
                  {props.loggedInuser === props.data.user._id && (
                    <EditButton
                      src="/images/commentEdit.svg/"
                      onClick={onClickEdit}
                    />
                  )}

                  {props.loggedInuser === props.data.user._id && (
                    <DeleteButton src="/images/commentDelete.svg" />
                  )}
                </EditWrapper>
              </ContentsWrapper>
            </BodyWrapper>
          </CommentWrapper>
          <CreatedAt>{props.data.createdAt}</CreatedAt>
        </div>
      )}
      {isEdit && <div>수정</div>}
    </Wrapper>
  );
}
