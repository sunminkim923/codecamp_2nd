// @ts-nocheck

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_OF_THE_BEST } from "./boardList.queries";

export default function BoardList() {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: bestData } = useQuery(FETCH_BOARDS_OF_THE_BEST);

  const onClickBestBoard = (data) => {
    router.push(`/board/detail/${data}`);
  };

  const onClickBoard = (data) => {
    router.push(`/board/detail/${data}`);
  };

  const onClickSubmit = () => {
    router.push("/board/write/");
  };

  return (
    <BoardListUI
      data={data}
      bestData={bestData}
      onClickBestBoard={onClickBestBoard}
      onClickBoard={onClickBoard}
      onClickSubmit={onClickSubmit}
      refetch={refetch}
    />
  );
}
