import { useState } from "react";

export default function StatePage() {
  const [count, setCount] = useState(0);
  // => let count = 0 과 같음

  function aaa() {
    setCount(count + 1);
    console.log(count);
  }

  const [hello, setHello] = useState("안녕하세요");
  function bbb() {
    setHello("반갑습니다");
  }

  // const [변수, 바꾸려는애 ] = useState (초기값)
  const [token, setToken] = useState("000000");
  const [ddd, setDdd] = useState(false);
  function ccc() {
    setToken(String(Math.floor(Math.random() * 1000000)).padStart(6, "0"));
    setDdd(true);
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={aaa}>+1</button>

      <div>{hello}</div>
      <button onClick={bbb}>클릭</button>

      <div>{token}</div>
      <button onClick={ccc} disabled={ddd}>
        인증번호받기
      </button>
    </>
  );
}
