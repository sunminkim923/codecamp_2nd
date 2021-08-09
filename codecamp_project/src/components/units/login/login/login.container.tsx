import { useForm } from "react-hook-form";
import LoginUI from "./login.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "./login.queries";
import { Modal } from "antd";
import router from "next/router";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("이메일을 입력해주세요")
    .required("이메일을 입력해주세요"),
  password: yup.string().required("비밀번호를 입력해주세요"),
});

export default function Login() {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [loginUser] = useMutation(LOGIN_USER);

  async function onSubmit(data) {
    try {
      await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      Modal.info({ content: "반갑습니다^^" });
      router.push("/landing");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  function onClickSignUp() {
    router.push("/login/signup");
  }

  return (
    <LoginUI
      handleSubmit={handleSubmit}
      register={register}
      onSubmit={onSubmit}
      isActive={formState.isValid}
      errors={formState.errors}
      onClickSignUp={onClickSignUp}
    />
  );
}