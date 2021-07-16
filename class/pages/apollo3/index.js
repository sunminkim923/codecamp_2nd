import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

export default function ApolloPage() {
  const [seller, setSeller] = useState();
  const [title, setTitle] = useState();
  const [detail, setDetail] = useState();
  const [price, setPrice] = useState();

  const [qqq] = useMutation(
    gql`
      mutation bbbb($aaa: String, $bbb: CreateProductInput!) {
        createProduct(seller: $aaa, createProductInput: $bbb) {
          message
        }
      }
    `
  );

  function onChangeSeller(event) {
    setSeller(event.target.value);
  }
  function onChangeTitle(event) {
    setTitle(event.target.value);
  }
  function onChangeDetail(event) {
    setDetail(event.target.value);
  }
  function onChangePrice(event) {
    setPrice(event.target.value);
  }

  function onClickSubmit() {
    console.log(seller);
    console.log(title);
    console.log(detail);
    console.log(price);
    qqq({
      variables: {
        aaa: seller,
        bbb: {
          name: title,
          detail: detail,
          price: Number(price),
        },
      },
    });
  }

  return (
    <>
      <div></div>
      판매자: <input type="text" onChange={onChangeSeller} /> <br />
      상품명: <input type="text" onChange={onChangeTitle} /> <br />
      상품상세: <input type="text" onChange={onChangeDetail} /> <br />
      가격: <input type="text" onChange={onChangePrice} /> <br />
      <button onClick={onClickSubmit}>데이터 입력하기</button>
    </>
  );
}
