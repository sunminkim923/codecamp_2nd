import { useForm } from "react-hook-form";
import RegisterUI from "./register.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import router from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_USEDITEM } from "./register.queries";

const schema = yup.object().shape({
  productName: yup.string().required("상품명을 입력하세요"),
  productCharacter: yup.string().required("상품의 특징을 입력해주세요"),
  productExplanation: yup
    .string()
    .required("상품의 설명을 입력해주세요")
    .min(50, "50자 이상 입력해주세요"),
  price: yup
    .number()
    .typeError("가격은 숫자로 입력해 주세요")
    .required("상품의 가격을 입력해주세요"),
  address: yup.string().required("주소를 입력해주세요"),
  addressDetail: yup.string().required("상세주소를 입력하세요"),
});

export default function Register() {
  const [createUseditem] = useMutation(CREATE_USEDITEM);

  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    createUseditem({
      variables: {
        createUseditemInput: {
          name: data.name,
          contents: data.contents,
          price: data.price,
          images: data.images,
        },
      },
    });
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
