// @ts-nocheck
import { useForm } from "react-hook-form";
import CommentWriteUI from "./commentWrite.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BAORD_COMMENT } from "./commentWrite.queries";
import { FETCH_BOARD_COMMENTS } from "../commentList/commentList.queries";
import { useState } from "react";

export default function CommentWrite() {
  const [createBoardComment] = useMutation(CREATE_BAORD_COMMENT);
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");

  // const onChangeWriter = (event) => {
  //   setWriter(event.target.value);
  // };

  // const onChangePassword = (event) => {
  //   setPassword(event.target.value);
  // };

  // const onChangeContents = (event) => {
  //   setContents(event.target.value);
  // };

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
            rating: 3,
          },
          boardId: router.query.Id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.Id },
          },
        ],
      });
      alert("댓글을 등록합니다.");
      setWriter("");
      setPassword("");
      setContents("");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <CommentWriteUI
      handleSubmit={handleSubmit}
      register={register}
      onSubmit={onSubmit}
      // onChangeWriter={onChangeWriter}
      // onChangePassword={onChangePassword}
      // onChangeContents={onChangeContents}
      Writer={writer}
      password={password}
      contents={contents}
    />
  );
}
