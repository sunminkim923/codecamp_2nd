import { useRouter } from "next/router";

import LayoutNavigationUI from "./LayoutNavigation.presenter";
export default function LayoutNavigation() {
  const router = useRouter();

  const onClickUsedMarket = () => {
    router.push("../../../market/list");
  };

  return <LayoutNavigationUI onClickUsedMarket={onClickUsedMarket} />;
}
