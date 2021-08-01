import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";

export default function BoardDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  const [deleteBoard] = useMutation(DELETE_BOARD);

  function onClickEdit() {
    router.push(`/boards/${router.query.boardId}/edit`);
  }

  function onClickList() {
    router.push("/boards");
  }

  async function onClickDelete() {
    try {
      await deleteBoard({ variables: { boardId: router.query.boardId } });
      alert("게시물이 삭제되었습니다.");
      router.push("/boards");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <BoardDetailUI
      data={data}
      onClickEdit={onClickEdit}
      onClickList={onClickList}
      onClickDelete={onClickDelete}
    />
  );
}
