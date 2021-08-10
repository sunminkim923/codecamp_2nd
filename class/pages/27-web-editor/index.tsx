import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { useRouter } from "next/router";
// import ReactQuill from "react-quill";
import dynamic from "next/dynamic";

import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function WebEditorPage() {
  const router = useRouter();
  const { handleSubmit, register, setValue } = useForm();
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickButton = async (data) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      router.push(`/27-web-editor-detail/${result.data.createBoard._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onChangeContents = (value) => {
    setValue("contents", value);
  };

  return (
    <form onSubmit={handleSubmit(onClickButton)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      {/* 내용: <textarea {...register("contents")} /> */}
      내용 : <ReactQuill onChange={onChangeContents} />
      <button type="submit">게시물 등록하기</button>
    </form>
  );
}
