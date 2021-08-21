import { breakPoints } from "../../src/commons/styles/media";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: red;

  @media ${breakPoints.tablet} {
    width: 500px;
    height: 500px;
    background-color: green;
  }

  @media ${breakPoints.mobile} {
    width: 100px;
    height: 100px;
    background-color: blue;
  }
`;

export default function MedeaPage() {
  return (
    <Wrapper>
      <div>상자</div>
    </Wrapper>
  );
}
