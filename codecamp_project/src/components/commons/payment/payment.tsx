import Head from "next/head";
import { useState } from "react";
import styled from "@emotion/styled";

const SelectAmount = styled.select`
  width: 300px;
  height: 35px;
  font-size: 18px;
  font-weight: 500;
`;

const PaymentButton = styled.button`
  width: 300px;
  height: 35px;
  font-size: 18px;
  font-weight: 500;
`;

export default function Payment() {
  const [amount, setAmount] = useState(0);
  const onChangeOption = (event) => {
    setAmount(event.target.value);
  };

  const onClickPayment = () => {
    IMP.init("imp49910675");
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "노르웨이 회전 의자",
        amount: amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      },
      function (rsp) {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
        } else {
          // 결제 실패 시 로직,
        }
      }
    );
  };

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.1.8.js"
        ></script>
      </Head>
      결제금액 :{/* <input type="text" onChange={onChangeAmount} /> */}
      <SelectAmount name="selected" onChange={onChangeOption}>
        <option>--금액을 선택하세요--</option>
        <option value="500">500원</option>
        <option value="1000">1,000원</option>
        <option value="3000">3,000원</option>
        <option value="5000">5,000원</option>
        <option value="10000">1,0000원</option>
      </SelectAmount>
      <PaymentButton onClick={onClickPayment}>결제하기</PaymentButton>
    </>
  );
}
