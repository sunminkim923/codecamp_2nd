// 권한체크 실습

import withAuth from "../../src/components/commons/hocs/withAuth";

function ExamplePage() {
  return (
    <>
      <div>접근에 성공하였습니다.</div>
    </>
  );
}

export default withAuth(ExamplePage);
