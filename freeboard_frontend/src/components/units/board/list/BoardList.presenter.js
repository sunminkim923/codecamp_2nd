import { useQuery } from "@apollo/client";
import { getDate } from "../../../../commons/libraries/utils";
import { FETCH_BOARDS } from "./BoardList.queries";

import {
  ListWrapper,
  ListTop,
  List,
  Board,
  SubmitButton,
} from "./BoardList.styles";

export default function BoardListUI(props) {
  const { data } = useQuery(FETCH_BOARDS);

  return (
    <div>
      <ListWrapper>
        <ListTop>
          <Board>번호</Board>
          <Board>제목</Board>
          <Board>작성자</Board>
          <Board>날짜</Board>
        </ListTop>
        {data?.fetchBoards.map((data, index) => (
          <List>
            <Board>{index}</Board>
            <Board>{data.title}</Board>
            <Board>{data.writer}</Board>
            <Board>{getDate(data.createdAt)}</Board>
          </List>
        ))}
      </ListWrapper>
      <SubmitButton onClick={props.onClickSubmit}>게시물등록하기</SubmitButton>
    </div>
  );
}
