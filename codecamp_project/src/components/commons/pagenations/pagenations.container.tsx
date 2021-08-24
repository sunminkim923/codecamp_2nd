import { useState } from "react";
import PagenationsPageUI from "./pagenations.presenter";

export default function Pagenation(props) {
  const [startPage, setStartPage] = useState(1);

  function onClickPage(event) {
    props.refetch({ page: Number(event.target.id) });
  }

  function onClickPrevPage() {
    setStartPage((prev) => prev - 10);
  }
  function onClickNextPage() {
    setStartPage((prev) => prev + 10);
  }

  return (
    <>
      <PagenationsPageUI
        onClickPage={onClickPage}
        onClickPrevPage={onClickPrevPage}
        onClickNextPage={onClickNextPage}
        startPage={startPage}
      />
    </>
  );
}
