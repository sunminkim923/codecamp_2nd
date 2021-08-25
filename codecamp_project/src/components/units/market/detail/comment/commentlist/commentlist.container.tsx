import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import CommentListUI from "./commentlist.presenter";
import { FETCH_USEDITEM_QUESTIONS } from "./commentlist.queries";

export default function CommentList() {
  const [isEdit, setIsEdit] = useState(false);

  const router = useRouter();
  const { data: commentData } = useQuery(FETCH_USEDITEM_QUESTIONS, {
    variables: { boardId: router.query.Id },
  });

  return (
    <CommentListUI
      commentData={commentData}
      isEdit={isEdit}
      seitIsEdit={setIsEdit}
    />
  );
}
