import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import * as Sentry from "@sentry/nextjs";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function SafetyPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  const onChangeInput = (key) => (event) => {
    setInputs((prev) => ({
      ...prev,
      [key]: event?.target.value,
    }));
  };

  const onClickSubmit = async () => {
    setIsSubmitting(true);
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: { ...inputs },
        },
      });
      //   throw new Error("강제로 에러 발생시키기!");
      console.log(result);
      setIsSubmitting(false);
    } catch (error) {
      Sentry.captureException(error);
      alert(error.message);
    }
  };

  return (
    <>
      <div>
        작성자 : <input type="text" onChange={onChangeInput("writer")} />
      </div>
      <div>
        비밀번호 : <input type="text" onChange={onChangeInput("password")} />
      </div>
      <div>
        제목 : <input type="text" onChange={onChangeInput("title")} />
      </div>
      <div>
        내용 : <input type="text" onChange={onChangeInput("contents")} />
      </div>
      <button disabled={isSubmitting} onClick={onClickSubmit}>
        등록하기
      </button>
    </>
  );
}
