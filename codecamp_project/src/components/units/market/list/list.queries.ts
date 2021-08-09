import { gql } from "@apollo/client";

export const FETCH_USEDITEMS = gql`
  query fetchUseditems {
    fetchUseditems {
      name
      contents
      price
    }
  }
`;
