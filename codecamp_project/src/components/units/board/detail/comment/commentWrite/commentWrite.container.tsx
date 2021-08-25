// @ts-nocheck
import { useForm } from "react-hook-form";
import CommentWriteUI from "./commentWrite.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BAORD_COMMENT } from "./commentWrite.queries";

export default function CommentWrite() {
  const [createBoardComment] = useMutation(CREATE_BAORD_COMMENT);
  const router = useRouter();

  const schema = yup.object().shape({
    writer: yup.string().required("이름을 입력해주세요"),
    password: yup.string().required("비밀번호를 입력해주세요"),
    contents: yup.string().required("내용을 입력해주세요"),
  });

  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: data.writer,
            password: data.password,
            contents: data.contents,
          },
          boardId: router.query.Id,
        },
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <CommentWriteUI
      handleSubmit={handleSubmit}
      register={register}
      onSubmit={onSubmit}
    />
  );
}
