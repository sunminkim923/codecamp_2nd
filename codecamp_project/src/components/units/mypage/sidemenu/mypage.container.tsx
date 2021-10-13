import { useQuery } from "@apollo/client";
import SideMenuUI from "./mypage.presenter";
import { FETCH_USER_LOGGED_IN } from "./mypage.queries";

export default function SideMenu() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  console.log("마이페이지", data);

  return <SideMenuUI data={data} />;
}
