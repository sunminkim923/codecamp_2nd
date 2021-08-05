import FormUI from "./form.presenter";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { LOGIN_USER } from "./form.queries";
import { Modal } from "antd";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("이메일 형식에 적합하지 않습니다.")
    .required("이메일은 필수 입력창입니다."),
  password: yup
    .string()
    .min(8, "비밀번호는 8자 이상이어야 합니다.")
    .max(15, "비밀번호는 15자 이하여야 합니다.")
    .required(),
});

export default function Form() {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [loginUser] = useMutation(LOGIN_USER);

  async function onSubmit(data) {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      console.log(result.data?.loginUser.accessToken);
      Modal.info({ content: "로그인완료!" });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }
  return (
    <FormUI
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      isActive={formState.isValid}
      errors={formState.errors}
    />
  );
}
