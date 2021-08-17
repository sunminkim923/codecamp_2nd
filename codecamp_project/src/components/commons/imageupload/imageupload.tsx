import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import { useRef } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Images = styled.img`
  width: 180px;
  height: 180px;

  /* border: 1px solid black; */
`;

const Button = styled.button`
  width: 180px;
  height: 180px;
  border: none;
  background-color: #bdbdbd;
`;

const FileInput = styled.input`
  display: none;
`;

export default function ImageUpload() {
  const [imageUrl, setImageUrl] = useState();
  const [fileUrls, setFileUrls] = useState([""]);

  const fileRef = useRef();
  const uploadFile = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = (event) => {
    const file = event.target.files?.[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setImageUrl(data.target?.result);
      const newFileUrls = [...fileUrls];
      newFileUrls[event.target.id] = file;
      setFileUrls(newFileUrls);
    };
  };

  return (
    <Wrapper>
      <Images src={imageUrl} />
      <Button type="button" onClick={onClickUpload}>
        <di>upload</di>
        <div>+</div>
      </Button>

      <FileInput type="file" onChange={onChangeFile} ref={fileRef} />
    </Wrapper>
  );
}
