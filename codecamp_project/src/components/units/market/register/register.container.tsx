import { useState } from "react";
import RegisterUI from "./register.presenter";

export default function Register() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [character, setCharacter] = useState("");
  const [characterError, setCharacterError] = useState("");
  const [explanation, setExplanation] = useState("");
  const [explanationError, setExplanationError] = useState("");
  const [price, setPrice] = useState("");
  const [priceError, setPriceError] = useState("");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [addressDetailError, setAddressDetailError] = useState("");

  function onChangeName(event) {
    setName(event.target.value);
  }

  function onChangeCharacter(event) {
    setCharacter(event.target.value);
  }

  function onChangeExplanation(event) {
    setExplanation(event.target.value);
  }

  function onChangePrice(event) {
    setPrice(event.target.value);
  }

  function onChangeAddress(event) {
    setAddress(event.target.value);
  }

  function onChangeAddressDetail(event) {
    setAddressDetail(event.target.value);
  }

  function onClickSubmit() {
    if (name === "") {
      setNameError("상품명을 입력하세요");
    }
    if (character === "") {
      setCharacterError("상품의 특징을 입력하세요");
    }
    if (explanation === "") {
      setExplanationError("상품의 설명을 입력하세요");
    }
    if (price === "") {
      setPriceError("상품의 가격을 입력하세요");
    }
    if (address === "") {
      setAddressError("주소를 입력하세요");
    }
    if (addressDetail === "") {
      setAddressDetailError("상세주소를 입력하세요");
    }
    if (
      name !== "" &&
      character !== "" &&
      explanation !== "" &&
      price !== "" &&
      address !== "" &&
      addressDetail !== ""
    ) {
      alert("상품을 등록합니다");
    }
  }

  return (
    <RegisterUI
      onChangeName={onChangeName}
      nameError={nameError}
      onChangeCharacter={onChangeCharacter}
      characterError={characterError}
      onChangeExplanation={onChangeExplanation}
      explanationError={explanationError}
      onChangePrice={onChangePrice}
      priceError={priceError}
      onChangeAddress={onChangeAddress}
      addressError={addressError}
      onChangeAddressDetail={onChangeAddressDetail}
      addressDetailError={addressDetailError}
      onClickSubmit={onClickSubmit}
    />
  );
}
