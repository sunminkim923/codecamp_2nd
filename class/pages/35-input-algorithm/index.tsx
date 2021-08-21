import { useState } from "react";

export default function AlgorithmPage() {
  const [inputDate, setInputDate] = useState([]);

  const onChangeInput = (event) => {
    // console.log(event.target.value);
    // const date = event.target.value;

    setInputDate(event.target.value);
    console.log(inputDate);

    if (inputDate.length >= 4) {
      setInputDate((prev) => [...prev, "."]);
    }
  };

  return (
    <>
      <input placeholder="YYYY.MM.DD" onChange={onChangeInput} />
    </>
  );
}

