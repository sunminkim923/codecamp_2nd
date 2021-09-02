//@ts-nocheck

import BoardWriteUI from "./boardWrite.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "./boardWrite.queries";
import { Modal } from "antd";
import { useRouter } from "next/router";

export default function BoardWrite() {
  const [createBoard] = useMutation(CREATE_BOARD);
  const router = useRouter();

  const schema = yup.object().shape({
    writer: yup.string().required("이름을 입력하세요"),
    password: yup.string().required("비밀번호를 입력해주세요"),
    title: yup.string().required("제목을 입력해주세요"),
    contents: yup.string().required("내용을 입력해주세요"),
    youtubeUr: yup.string(),
  });

  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            title: data.title,
            password: data.password,
            contents: data.contents,
            youtubeUrl: data.youtubeUrl,
          },
        },
      });
      Modal.info({ content: "게시글을 등록하겠습니다." });
      router.push(`/board/detail/${result.data?.createBoard._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <BoardWriteUI
      handleSubmit={handleSubmit}
      register={register}
      errors={formState.errors}
      onSubmit={onSubmit}
      isActive={formState.isValid}
    />
  );
}
