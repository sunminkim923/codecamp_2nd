import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketListUI from "./list.presenter";
import { FETCH_USEDITEMS, FETCH_USEDITEMS_OF_THE_BEST } from "./list.queries";

export default function MarketList() {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_USEDITEMS);
  const { data: newData } = useQuery(FETCH_USEDITEMS_OF_THE_BEST);

  const onClickSubmit = () => {
    router.push("./register/");
  };

  const onClickProduct = () => {
    router.push(`./detail/${data._id}`);
  };

  return (
    <MarketListUI
      data={data}
      newData={newData}
      onClickSubmit={onClickSubmit}
      retetch={refetch}
      onClickProduct={onClickProduct}
    />
  );
}
