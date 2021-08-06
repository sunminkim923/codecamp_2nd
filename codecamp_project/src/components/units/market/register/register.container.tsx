import { useForm } from "react-hook-form";
import RegisterUI from "./register.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import router from "next/router";

const schema = yup.object().shape({
  productName: yup.string().required("상품명을 입력하세요"),
  productCharacter: yup.string().required("상품의 특징을 입력해주세요"),
  productExplanation: yup
    .string()
    .required("상품의 설명을 입력해주세요")
    .min(50, "50자 이상 입력해주세요"),
  price: yup
    .number()
    // .typeError("가격은 숫자로 입력해 주세요")
    .required("상품의 가격을 입력해주세요"),
  address: yup.string().required("주소를 입력해주세요"),
  addressDetail: yup.string().required("상세주소를 입력하세요"),
});

export default function Register() {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onSubmit() {
    console.log(formState.isValid);
    console.log(formState.errors);
    alert("등록되었습니다");
  }

  return (
    <RegisterUI
      handleSubmit={handleSubmit}
      register={register}
      onSubmit={onSubmit}
      errors={formState.errors}
      isActive={formState.isValid}
    />
  );
}
