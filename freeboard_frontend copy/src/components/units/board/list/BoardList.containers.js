import { useRouter } from "next/router";
import BoardListUI from "./BoardList.presenter";

export default function BoardList() {
  const router = useRouter();

  function onClickSubmit() {
    router.push("/boards/new");
  }

  return <BoardListUI onClickSubmit={onClickSubmit} />;
}
