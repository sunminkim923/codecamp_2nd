import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

const Column = styled.span`
  padding-left: 50px;
  padding-right: 50px;
`;

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const onClickBasket = (basketData) => () => {
    console.log(basketData);
    let baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    let isExists = false;
    baskets.forEach((data) => {
      if (data._id === basketData._id) isExists = true;
    });
    if (isExists) return;
    baskets.push(basketData);

    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  const onClickLogin = () => {
    //로그인이 완료됨
    // 로컬스토리지에 baskets가 있으면 , 확인 모달 띄우기
    // 장바구니에 데이터가 있는데, 장바구니로 이동하시겠습니까?
    router.push = useRouter("/26-basket-logged-in");
  };

  return (
    <div>
      {data?.fetchBoards.map((data, index) => (
        <div key={data._id}>
          <Column>{data._id}</Column>
          <Column>{data.writer}</Column>
          <Column>{data.title}</Column>
          <button onClick={onClickBasket(data)}>장바구니담기</button>
        </div>
      ))}
      <button onClick={onClickLogin}>로그인</button>
    </div>
  );
}
