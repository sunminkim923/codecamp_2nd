import styled from "@emotion/styled";

const Button = styled.button`
  width: 180px;
  height: 180px;
  border: none;
  background-color: #bdbdbd;
`;

export default function ImageUpload(props) {
  return (
    <Button type={props.type}>
      <div>upload</div>
      <div>+</div>
    </Button>
  );
}
