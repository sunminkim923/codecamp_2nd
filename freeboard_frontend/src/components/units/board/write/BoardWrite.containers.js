import { useMutation, useQuery } from "@apollo/client";
import { useRef, useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createdBoardId, setCreatedBoardId] = useState("");

  const router = useRouter();

  const InputInits = {
    writer: "",
    password: "",
    title: "",
    contents: "",
    youtubeUrl: "",
    // createdAt: "",
    // images: "",
  };

  // const [writer, setWriter] = useState ('')
  // const [password, setPassword] = useState ('')
  // const [title, setTitle] = useState('')
  // const [contents, setContents] = useState('')
  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [active, setActive] = useState(false);
  const [inputs, setInputs] = useState(InputInits);
  const [isModal, setIsModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [zonecode, setZonecode] = useState("");
  const [isClick, setIsClick] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const fileRef = useRef();

  function onChangeInputs(event) {
    const newInputs = {
      ...inputs,
      [event.target.name]: event.target.value,
    };
    console.log(newInputs);
    setInputs(newInputs);
    // delete newInputs.youtubeUrl;
    if (Object.values(newInputs).every((data) => data !== "")) {
      setWriterError("");
      setPasswordError("");
      setTitleError("");
      setContentsError("");
      setActive(true);
    }
  }
  function onClickSearch() {
    setIsClick(true);
  }

  function onComplete(data) {
    setAddress(data.address);
    setZonecode(data.zonecode);
    setIsClick(false);
  }

  async function onChangeFile(event) {
    const file = event.target.files?.[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setImageUrl(data.target.result);
      const newFileUrls = [...fileUrls];
      newFileUrls[event.target.id] = file;

      setFileUrls(newFileUrls);
    };
  }
  function onClickUpload01() {
    fileRef.current?.click();
  }

  async function onClickSubmit() {
    if (inputs.writer === "") {
      setWriterError("이름을 입력하세요");
    }
    if (inputs.password === "") {
      setPasswordError("비밀번호를 입력하세요.");
    }
    if (inputs.title === "") {
      setTitleError("제목을 입력하세요");
    }
    if (inputs.contents === "") {
      setContentsError("내용을 입력하세요");
    }
    if (Object.values(inputs).every((data) => data !== "")) {
      try {
        const result = await createBoard({
          variables: {
            createBoard: {
              ...inputs,
              images: [imageUrl],
            },
          },
        });
        // alert("등록합니다");
        setIsModal(true);
        setIsOpen(true);
        setCreatedBoardId(result.data.createBoard._id);
      } catch (error) {
        alert(error.message);
      }
    }
  }

  function onClickOk() {
    router.push(`/boards/${createdBoardId}`);
  }

  function onClickCancel() {
    setIsOpen(false);
    setIsClick(false);
  }

  async function onClickEdit() {
    const newInputs = {};
    if (inputs.title) newInputs.title = inputs.title;
    if (inputs.contents) newInputs.contents = inputs.contents;

    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password: inputs.password,
          updateBoardInput: {
            ...newInputs,
            // title: inputs.title,
            // contents: inputs.contents,
            // youtubeUrl: "",
            // images: ""
          },
        },
      });
      alert("게시글을 수정합니다.");
      router.push(`/boards/${result.data.updateBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
  }

  // function onChangeWriter(event) {

  //     setWriter(event.target.value)
  //     if(event.target.value !== ""){
  //         setWriterError("")
  //     } if (event.target.value !== "" &&  password !== "" && title !== "" && contents !== "") {
  //         setActive(true)
  //     } else {
  //         setActive(false)
  //     }
  // }

  // function onChangePassword(event) {
  //     setPassword(event.target.value)
  //     if(event.target.value !== "") {
  //         setPasswordError("")
  //     } if (writer !== "" &&  event.target.value !== "" && title !== "" && contents !== "") {
  //         setActive(true)
  //     } else {
  //         setActive(false)
  //     }
  // }
  // function onChangeTitle(event) {
  //     setTitle(event.target.value)
  //     if(event.target.value !== "") {
  //         setTitleError("")
  //     } if (writer !== "" &&  password !== "" && event.target.value !== "" && contents !== "") {
  //         setActive(true)
  //     } else {
  //         setActive(false)
  //     }
  // }

  // function onChangeContents(event) {
  //     setContents(event.target.value)
  //     if(event.target.value !=="") {
  //         setContentsError("")
  //     } if (writer !== "" &&  password !== "" && title !== "" && event.target.value !== "") {
  //         setActive(true)
  //     } else {
  //         setActive(false)
  //     }
  // }

  return (
    <BoardWriteUI
      // onChangeWriter={onChangeWriter}
      // onChangePassword={onChangePassword}
      // onChangeTitle={onChangeTitle}
      // onChangeContents={onChangeContents}
      onChangeInputs={onChangeInputs}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      onChangeFile={onChangeFile}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      active={active}
      isEdit={props.isEdit}
      data={props.data}
      isModal={isModal}
      isOpen={isOpen}
      isClick={isClick}
      onClickOk={onClickOk}
      onClickCancel={onClickCancel}
      onClickSearch={onClickSearch}
      onComplete={onComplete}
      address={address}
      zonecode={zonecode}
      fileRef={fileRef}
      onClickUpload01={onClickUpload01}
      fileUrls={fileUrls}
    />
  );
}
