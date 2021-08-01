import { useQuery } from "@apollo/client";
import { getDate } from "../../../../commons/libraries/utils";
import { FETCH_BOARDS } from "./BoardList.queries";
import PagenationPage from "../../../commons/pagenations/pagenations.container";
import {
  ListWrapper,
  ListTop,
  List,
  Board,
  SubmitButton,
  SubmitButtonWrapper,
  PagenationWrapper,
} from "./BoardList.styles";

export default function BoardListUI(props) {
  const { data, refetch } = useQuery(FETCH_BOARDS);

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
            <Board>{index + 1}</Board>
            <Board>{data.title}</Board>
            <Board>{data.writer}</Board>
            <Board>{getDate(data.createdAt)}</Board>
          </List>
        ))}
        <SubmitButtonWrapper>
          <SubmitButton onClick={props.onClickSubmit}>
            게시물등록하기
          </SubmitButton>
        </SubmitButtonWrapper>
        <PagenationWrapper>
          <PagenationPage refetch={refetch} />
        </PagenationWrapper>
      </ListWrapper>
    </div>
  );
}
