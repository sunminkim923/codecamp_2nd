import { useState } from "react";
import RecommnetWriteUI from "./recommentWrite.presenter";

export default function RecommentWrite() {
  const [textLength, setTextLength] = useState(0);

  const onChangeInput = (event) => {
    setTextLength(event.target.value.length);
  };

  const onClickExit = () => {
    setIsRecommnet(false);
  };

  return (
    <RecommnetWriteUI
      onChangeInput={onChangeInput}
      textLength={textLength}
      onClickExit={onClickExit}
    />
  );
}
