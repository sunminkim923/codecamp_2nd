import { useState } from "react";
import Head from "next/head";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoding($impUid: ID!) {
    createPointTransactionOfLoding(impUid: $impUid) {
      _id
    }
  }
`;
export default function PaymentPage() {
  const router = useRouter();
  const [amount, setAmount] = useState();
  const [createPointTransactionOfLoding] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  function onChangeAmount(event) {
    setAmount(event.target.value);
  }

  function onClickPayment() {
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
      async (rsp) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          await createPointTransactionOfLoding({
            variables: {
              impUid: rsp.imp.uid,
            },
          });
          alert("결제에 성공하셨습니다.");
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패하셨습니다.");
        }
      }
    );
  }

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
      결제하기: <input type="text" onChange={onChangeAmount} />
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
}
