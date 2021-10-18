// @ts-nocheck
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import MarketListUI from "./marketList.presenter";
import {
  FETCH_USEDITEMS,
  FETCH_USEDITEMS_OF_THE_BEST,
} from "./marketList.queries";
import _ from "lodash";

export default function MarketList() {
  const router = useRouter();

  const [soldItem, setSoldItem] = useState(false);
  const [keyword, setKeyword] = useState("");

  const { data, fetchMore, refetch } = useQuery(FETCH_USEDITEMS, {
    variables: {
      isSoldout: soldItem,
    },
  });

  const { data: newData } = useQuery(FETCH_USEDITEMS_OF_THE_BEST);

  const [hasMore, setHasMore] = useState(true);

  const onClickSelling = () => {
    setSoldItem(false);
  };

  const onClickSold = () => {
    setSoldItem(true);
  };

  const onClickSubmit = () => {
    router.push("./write/");
  };

  const onClickBestProduct = (data) => {
    router.push(`./detail/${data}`);
  };

  const onClickProduct = (data) => {
    router.push(`./detail/${data}`);
  };

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.floor(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems.length) setHasMore(false);
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const getDebounce = _.debounce((data) => {
    refetch({ search: data });
  }, 500);

  const onClickSearch = (data) => {
    refetch({ search: data });
  };

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
    setKeyword(event.target.value);
  };

  return (
    <MarketListUI
      data={data}
      newData={newData}
      onClickSubmit={onClickSubmit}
      onClickBestProduct={onClickBestProduct}
      onClickProduct={onClickProduct}
      onLoadMore={onLoadMore}
      hasMore={hasMore}
      onClickSelling={onClickSelling}
      onClickSold={onClickSold}
      soldItem={soldItem}
      onChangeSearch={onChangeSearch}
      keyword={keyword}
    />
  );
}
