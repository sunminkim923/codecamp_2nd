//@ts-nocheck
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductDetailUI from "./marketDetail.presenter";
import { Modal } from "antd";
import {
  DELETE_USEDITEM,
  FETCH_USEDITEM,
  FETCH_USEDITEMS_I_PICKED,
  FETCH_USER_LOGGED_IN,
  TOGGLE_USEDITEM_PICK,
} from "./marketDetail.queries";

export default function MarketDetail() {
  const [isModal, setIsModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isToggle, setIsToggle] = useState(false);

  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK);
  const [deleteUseditem] = useMutation(DELETE_USEDITEM);

  const router = useRouter();

  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.id },
  });

  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);

  const { data: pickedItems } = useQuery(FETCH_USEDITEMS_I_PICKED);

  console.log("찜한상품", pickedItems);

  const marketSeller = data?.fetchUseditem.seller._id;
  const loggedInUser = userData?.fetchUserLoggedIn._id;

  //@ts-ignore
  const onClickToggle = (event) => {
    try {
      toggleUseditemPick({
        variables: {
          useditemId: router.query.id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM,
            variables: { useditemId: router.query.id },
          },
        ],

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
        //         _id: data.fetchUseitem.id,
        //         __typename: "board",
        //         pickedCount: data.toggleUseditemPick,
        //       },
        //     },
        //   });
        // },
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickList = () => {
    router.push("/market/list");
  };

  const onClickEdit = () => {
    router.push(`/market/detail/${router.query.id}/edit`);
    // router.push(`/detail/${router.query.id}/edit/`);
  };

  const onClickDelete = () => {
    setIsModal(true);
    setIsOpen(true);
  };

  const onClickOk = async () => {
    try {
      await deleteUseditem({
        variables: {
          useditemId: router.query.id,
        },
      });
      Modal.info({ content: "게시글이 삭제되었습니다." });
      router.push("/market/list");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickCancel = () => {
    setIsOpen(false);
  };

  return (
    <ProductDetailUI
      data={data}
      onClickToggle={onClickToggle}
      onClickList={onClickList}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
      onClickOk={onClickOk}
      onClickCancel={onClickCancel}
      isModal={isModal}
      isOpen={isOpen}
      marketSeller={marketSeller}
      loggedInUser={loggedInUser}
    />
  );
}
