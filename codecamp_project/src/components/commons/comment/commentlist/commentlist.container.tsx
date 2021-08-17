import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CommentListUI from "./commentlist.presenter";
import { FETCH_USEDITEM_QUESTIONS } from "./commentlist.queries";

export default function CommentList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: router.query.id },
  });

  return <CommentListUI data={data} />;
}
