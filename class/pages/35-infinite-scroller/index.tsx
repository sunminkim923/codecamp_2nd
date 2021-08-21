import styled from "@emotion/styled";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const Wrapper = styled.div`
  height: 800px;
  overflow: auto;
`;

export default function InfiniteScrollerPage() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS);
  const [hasMore, setHasMore] = useState(true);
  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.floor(data?.fetchBoards.length) / 10 + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards.length) setHasMore(false);
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <>
      <Wrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={hasMore}
          loader={
            <div className="loader" key={0}>
              {" "}
              Loading ...
            </div>
          }
          useWindow={false}
        >
          {data?.fetchBoards.map((data) => (
            <div key={data._id}>
              <span>{data.writer}</span>
              <span>{data.title}</span>
              <span>{data.contents}</span>
            </div>
          ))}
        </InfiniteScroll>
      </Wrapper>
    </>
  );
}
