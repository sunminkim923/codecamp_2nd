import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductDetailUI from "./detail.presenter";
import { FETCH_USEDITEM } from "./detail.queries";

export default function productDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.id },
  });

  const onClickList = () => {
    router.push("/market/list");
  };

  const onClickEdit = () => {
    router.push(`/market/detail/${router.query.id}/edit`);
    // router.push(`/detail/${router.query.id}/edit/`);
  };

  return (
    <ProductDetailUI
      data={data}
      onClickList={onClickList}
      onClickEdit={onClickEdit}
    />
  );
}
