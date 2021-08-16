import { gql } from "@apollo/client";

export const CREATE_USEDITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
    }
  }
`;

export const UPDATE_USEDITEM = gql`
  mutation updateUseditem($updateUseditemInput: UpdateUseditemInput!) {
    updateUseditem(updateUseditemInput: $updateUseditemInput) {
      _id
    }
  }
`;
