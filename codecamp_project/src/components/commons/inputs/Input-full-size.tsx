import styled from "@emotion/styled";

const Input = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
`;

const ErrorMessage = styled.div`
  padding-left: 16px;
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
      <ErrorMessage></ErrorMessage>
    </>
  );
}
