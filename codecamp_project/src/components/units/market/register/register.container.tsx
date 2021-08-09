import { useForm } from "react-hook-form";
import RegisterUI from "./register.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import router from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_USEDITEM } from "./register.queries";
import { Modal } from "antd";

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

  async function onSubmit(data) {
    try {
      await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.productName,
            remarks: data.productCharacter,
            contents: data.productExplanation,
            price: data.price,
          },
        },
      });
      Modal.info({ content: "게시글을 등록합니다." });
    } catch (error) {
      Modal.error({ content: error.message });
    }
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
