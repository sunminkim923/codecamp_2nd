import { gql } from "@apollo/client";

export const FETCH_USEDITEMS = gql`
  query fetchUseditems {
    fetchUseditems {
      name
      contents
      price
      images
      pickedCount
      tags
    }
  }
`;

export const FETCH_USEDITEMS_OF_THE_BEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      name
      contents
      price
      images
      pickedCount
      tags
    }
  }
`;
