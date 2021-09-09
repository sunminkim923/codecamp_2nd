import styled from "@emotion/styled";

const Input = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
`;

const ErrorMessage = styled.div`
  padding-top: 5px;
  padding-left: 16px;
  font-size: 12px;
  color: red;
`;

export default function InputFullSize(props) {
  return (
    <>
      <Input
        type={props.type}
        {...props.register}
        placeholder={props.placeholder}
      />
      <ErrorMessage>{props.errorMessage}</ErrorMessage>
    </>
  );
}