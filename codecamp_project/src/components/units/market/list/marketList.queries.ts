import { gql } from "@apollo/client";

export const FETCH_USEDITEMS = gql`
  query fetchUseditems($page: Int, $isSoldout: Boolean) {
    fetchUseditems(page: $page, isSoldout: $isSoldout) {
      _id
      name
      contents
      price
      images
      pickedCount
      tags
      remarks
    }
  }
`;

export const FETCH_USEDITEMS_OF_THE_BEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      contents
      price
      images
      pickedCount
      tags
      remarks
    }
  }
`;
