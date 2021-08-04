import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";

const FETCH_BOARD = gql`
    query fetchBoard($boardID: ID!){
        fetchBoard(boardId: $boardID){
            writer
            title
            contents
    }
`;

export default function EditPage() {
  const isEdit = true;
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardID: router.query.boardId },
  });

  return <BoardWrite isEdit={isEdit} data={data} />;
}
