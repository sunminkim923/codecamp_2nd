//@ts-nocheck
import { useForm } from "react-hook-form";
import MarketWriteUI from "./marketWrite.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_USEDITEM,
  UPDATE_USEDITEM,
  UPLOAD_FILE,
} from "./marketWrite.queries";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { FETCH_USEDITEM } from "../detail/marketDetail.queries";
import { useState } from "react";

const schema = yup.object().shape({
  productName: yup.string().required("상품명을 입력하세요"),
  productCharacter: yup.string().required("상품의 특징을 입력해주세요"),
  productExplanation: yup
    .string()
    .required("상품의 설명을 입력해주세요")
    .min(30, "30자 이상 입력해주세요"),
  price: yup
    .number()
    .typeError("가격은 숫자로 입력해 주세요")
    .required("상품의 가격을 입력해주세요"),
  address: yup.string().required("주소를 입력해주세요"),
  addressDetail: yup.string().required("상세주소를 입력하세요"),
});

export default function MarketWrite(props) {
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USEDITEM);
  const [updateUseditem] = useMutation(UPDATE_USEDITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [imageFile, setImageFile] = useState([]);

  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.id },
  });

  const { handleSubmit, register, formState, setValue, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    try {
      const resultFiles = await Promise.all(
        imageFile.map((fileData) =>
          uploadFile({ variables: { file: fileData } })
        )
      );

      const finalUrl = resultFiles.map(
        (resultUrl) => resultUrl.data.uploadFile.url
      );

      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.productName,
            remarks: data.productCharacter,
            contents: data.productExplanation,
            price: data.price,
            images: finalUrl,
          },
        },
      });
      Modal.info({ content: "게시물이 등록되었습니다." });
      router.push(`./detail/${result.data?.createUseditem._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  //@ts-ignore
  const onEdit = async (data) => {
    try {
      const result = await updateUseditem({
        variables: {
          useditemId: router.query.id,
          updateUseditemInput: {
            name: data.productName,
            remarks: data.productCharacter,
            contents: data.productExplanation,
            price: data.price,
          },
        },
      });
      Modal.info({ content: "게시글이 수정되었습니다." });
      router.push(`/market/detail/${result.data?.updateUseditem._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  //@ts-ignore
  const onChangeExplanation = (value) => {
    const isBlank = "<p><br></p>";
    setValue("productExplanation", value === isBlank ? "" : value);
    trigger("productExplanation");
  };

  return (
    <MarketWriteUI
      handleSubmit={handleSubmit}
      register={register}
      onSubmit={onSubmit}
      onEdit={onEdit}
      errors={formState.errors}
      isActive={formState.isValid}
      onChangeExplanation={onChangeExplanation}
      isEdit={props.isEdit}
      data={data}
      setImageFile={setImageFile}
    />
  );
}
