import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./boardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_OF_THE_BEST } from "./boardList.queries";

export default function BoardList() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARDS);
  //@ts-ignore
  const { data: bestData } = useQuery(FETCH_BOARDS_OF_THE_BEST);

  const onClickSubmit = () => {
    router.push("/boards/new/");
  };

  // @ts-ignore
  return (
    <BoardListUI
      data={data}
      bestData={bestData}
      onClickSubmit={onClickSubmit}
    />
  );
}
