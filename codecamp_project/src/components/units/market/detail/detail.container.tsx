import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductDetailUI from "./detail.presenter";
import { FETCH_USEDITEM } from "./detail.queries";

export default function productDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.id },
  });

  return <ProductDetailUI data={data} />;
}
