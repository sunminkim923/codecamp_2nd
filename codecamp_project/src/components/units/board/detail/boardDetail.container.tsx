// @ts-nocheck

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "./boardDetail.queries";
import BoardDetailUI from "./boardDetail.presenter";

export default function BoardDetail() {
  const router = useRouter();

  const onClickList = () => {
    router.push("/board/list/");
  };

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.Id },
  });

  return <BoardDetailUI onClickList={onClickList} data={data} />;
}
