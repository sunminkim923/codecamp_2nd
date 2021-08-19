import { useRouter } from "next/dist/client/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";
export default function LayoutHeader() {
  const router = useRouter();

  const onClickLogin = () => {
    router.push("/login/");
  };
  return <LayoutHeaderUI onClickLogin={onClickLogin} />;
}
