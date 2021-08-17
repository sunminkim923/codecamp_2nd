import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

const withAuth = (Component) => (props) => {
  const router = useRouter();
  // const { accessToken } = useContext(GlobalContext);
  useEffect(() => {
    if (!localStorage.getItem("refreshToken")) {
      alert("로그인이 필요한 페이지입니다.");
      router.push("/login/");
    }
  }, []);
  if (typeof window !== "undefined" && !localStorage.getItem("refreshToken"))
    return <></>;
  return <Component {...props} />;
};

export default withAuth;
