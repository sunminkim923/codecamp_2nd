import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DElETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export default function ApolloCachesStatePage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DElETE_BOARD);

  const onClickDelete = (boardId) => async () => {
    try {
      await deleteBoard({
        variables: {
          boardId: boardId,
        },
        // refetchQueries: [{ query: FETCH_BOARDS }],
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchBoards: (prev) => {
                const newPrev = prev.filter((prevData) => {
                  return prevData.__ref !== `Board:${data.deleteBoard}`;
                });
                return [...newPrev];
              },
            },
          });
        },
      });
    } catch (error) {
      Modal.error(error.message);
    }
  };

  return (
    <>
      {data?.fetchBoards.map((data) => (
        <div key={data?._id}>
          <span style-={{ padding: "30px" }}>{data.writer}</span>
          <span style-={{ padding: "30px" }}>{data.title}</span>
          <span style-={{ padding: "30px" }}>{data.contents}</span>
          <button onClick={onClickDelete(data._id)}>삭제하기 </button>
        </div>
      ))}
    </>
  );
}
