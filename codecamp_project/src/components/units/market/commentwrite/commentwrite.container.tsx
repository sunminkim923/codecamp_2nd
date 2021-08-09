import { useMutation } from "@apollo/client";
import CommentWriteUI from "./commentwrite.presenter";
import { CREATE_USEDITEM_QUESTION } from "./commentwrite.queries";

export default function CommentWrite() {
  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);

  const onClickRegister = () => {
    createUseditemQuestion({
      variables: {
        createUseditemQuestionInput: {
          contents,
        },
      },
    });
  };

  return <CommentWriteUI onClickRegister={onClickRegister} />;
}
