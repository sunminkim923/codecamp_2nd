import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
export default function BoardWrite() {
  const [writer, setWriter] = useState("");
  const [writerError, setWriterError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contents, setContents] = useState("");
  const [contentsError, setContentsError] = useState("");

  function onChangeWriter(event) {
    setWriter(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  function onChangeContents(event) {
    setContents(event.target.value);
  }

  function onClickSubmit() {
    if (writer === "") {
      setWriterError("작성자를 입력하세요");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력하세요");
    }
    if (title === "") {
      setTitleError("제목을 입력하세요");
    }
    if (contents === "") {
      setContentsError("내용을 입력하세요");
    }
  }

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      writerError={writerError}
      onChangePassword={onChangePassword}
      passwordError={passwordError}
      onChangeTitle={onChangeTitle}
      titleError={titleError}
      onChangeContents={onChangeContents}
      contentsError={contentsError}
      onClickSubmit={onClickSubmit}
    />
  );
}
