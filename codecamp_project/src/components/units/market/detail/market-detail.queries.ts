import { gql } from "@apollo/client";

export const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
    }
  }
`;

export const TOGGLE_USEDITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

export const DELETE_USEDITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;
