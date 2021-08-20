import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import CommentListUI from "./commentlist.presenter";
import { FETCH_USEDITEM_QUESTIONS } from "./commentlist.queries";

export default function CommentList() {
  const [isEdit, setIsEdit] = useState(false);

  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: router.query.id },
  });

  const onClickEdit = () => {
    setIsEdit(true);
    alert("수정!");
  };

  return (
    <CommentListUI data={data} onClickEdit={onClickEdit} isEdit={isEdit} />
  );
}
