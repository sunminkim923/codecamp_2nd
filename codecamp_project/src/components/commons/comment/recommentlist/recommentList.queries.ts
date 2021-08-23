import { gql } from "@apollo/client";

export const FETCH_USEDITEM_QUESTION_ANSWER = gql`
  query fetchUseditemQuestionAnswers($useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(useditemQuestionId: $useditemQuestionId) {
      _id
      contents
      createdAt
      user {
        _id
        name
      }
    }
  }
`;
