import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 1847px; */
  border: 1px solid black;
  margin: 100px;
  padding-top: 60px;
  padding-bottom: 100px;
  padding-right: 102px;
  padding-left: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
`;

export const WriterWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputWrapper = styled.div`
  padding-top: 40px;
`;

export const Label = styled.div`
  font-size: 16px;
  padding-bottom: 16px;
  font-weight: 500;
`;

export const Writer = styled.input`
  width: 486px;
  height: 52px;
`;

export const Password = styled.input`
  width: 486px;
  height: 52px;
`;

export const Subject = styled.input`
  width: 996px;
  height: 52px;
`;

export const Contents = styled.textarea`
  width: 996px;
  height: 480px;
  padding: 10px;
`;

export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Zipcode = styled.div`
  width: 77px;
  height: 52px;
  border: 1px solid black;
  padding: 14px;
`;

export const SearchButton = styled.button`
  width: 124px;
  height: 52px;
  margin-left: 16px;
  background-color: black;
  color: white;
`;

export const Address = styled.div`
  width: 996px;
  height: 52px;
  margin-top: 25px;
  border: 1px solid black;
  padding: 14px 16px;
`;
export const AddressDetail = styled.input`
  width: 996px;
  height: 52px;
  margin-top: 25px;
`;

export const Youtube = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
`;

export const ImageWrapper = styled.div`
  margin-top: 40px;
  width: 996px;
`;

export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  font-size: 12px;
  margin-right: 24px;
  border: none;
  cursor: pointer;
`;

export const ImageUpload = styled.input`
  display: none;
`;

export const OptionWrapper = styled.div`
  width: 996px;
  margin-top: 40px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;
export const RadioLabel = styled.label`
  width: 45px;
  height: 24px;
  margin-right: 20px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 80px;
`;
export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: #ffd600;
  border: none;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "yellow" : "gray")};
`;

export const Error = styled.div`
  font-size: 10px;
  color: red;
  margin-top: 10px;
`;
