import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductDetailUI from "./market-detail.presenter";
import { FETCH_USEDITEM, TOGGLE_USEDITEM_PICK } from "./market-detail.queries";

export default function productDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.id },
  });
  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK);

  const onClickToggle = (pickedCount) => {
    toggleUseditemPick({
      variables: {
        useditemId: router.query.id,
      },

      // 토글 데이터 제대로 작동하면 주석 풀고 완성해서 optimisticResponse 작동시키기

      // optimisticResponse: {
      //   toggleUseditemPick: pickedCount + 1,
      // },

      // update(cache, { data }) {
      //   cache.writeQuery({
      //     query: FETCH_USEDITEM,
      //     variables: { useditemId: router.query.id },
      //     data: {
      //       fetchUseditem: {
      //         _id: " ",
      //         __typename: " ",
      //         pickedCount: data.toggleUseditemPick,
      //       },
      //     },
      //   });
      // },
    });
  };

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
      onClickToggle={onClickToggle}
      onClickList={onClickList}
      onClickEdit={onClickEdit}
    />
  );
}
