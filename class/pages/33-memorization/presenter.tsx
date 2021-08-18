import { memo } from "react";

function Presenter(props) {
  console.log("프리젠터가(자식) 렌더링 시작됩니다");
  return (
    <>
      <div>=========================================</div>
      <div>저는 프리젠터 입니다</div>
      <div>=========================================</div>
    </>
  );
}

export default memo(Presenter);
