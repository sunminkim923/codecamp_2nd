import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";

export default function BoardDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  function onClickEdit() {
    router.push(`/boards/${router.query.boardId}/edit`);
  }

  return <BoardDetailUI data={data} onClickEdit={onClickEdit} />;
}
