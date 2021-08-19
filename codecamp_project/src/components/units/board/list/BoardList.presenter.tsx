import {
  PageWrapper,
  Wrapper,
  HeadWrapper,
  Title,
  BestBoardsWrapper,
  BestBoardWrapper,
  BestBoardImg,
  BestBoardTitle,
  BottomWrapper,
  WriterWrapper,
  LikeBoardWrapper,
  Writer,
  ProfileImg,
  WriterName,
  WriteDate,
  LikeBoardImg,
  LikeBoardPoint,
  SearchWrapper,
  SearchInput,
  DateInput,
  SearchButton,
  BoardListWrapper,
  ListHeadWrapper,
  HeadNumber,
  HeadTitle,
  HeadWriter,
  HeadDate,
  ListBodyWrapper,
  ListNumber,
  ListTitle,
  ListWriter,
  ListDate,
  ListBottomWrapper,
  SubmitButton,
} from "./BoardList.styles";

export default function BoardListUI() {
  return (
    <PageWrapper>
      <Wrapper>
        <HeadWrapper>
          <Title>베스트 게시글</Title>
          <BestBoardsWrapper>
            <BestBoardWrapper>
              <BestBoardImg src="/images/bestboard.png/" />
              <BestBoardTitle>게시물 제목입니다.</BestBoardTitle>
              <BottomWrapper>
                <WriterWrapper>
                  <Writer>
                    <ProfileImg src="/images/profile.svg" />
                    <WriterName>노원두</WriterName>
                  </Writer>
                  <WriteDate>2020.09.23</WriteDate>
                </WriterWrapper>
                <LikeBoardWrapper>
                  <LikeBoardImg src="/images/likeboard.png/" />
                  <LikeBoardPoint>1800</LikeBoardPoint>
                </LikeBoardWrapper>
              </BottomWrapper>
            </BestBoardWrapper>
            <BestBoardWrapper>
              <BestBoardImg src="/images/bestboard.png/" />
              <BestBoardTitle>게시물 제목입니다.</BestBoardTitle>
              <BottomWrapper>
                <WriterWrapper>
                  <Writer>
                    <ProfileImg src="/images/profile.svg" />
                    <WriterName>노원두</WriterName>
                  </Writer>
                  <WriteDate>2020.09.23</WriteDate>
                </WriterWrapper>
                <LikeBoardWrapper>
                  <LikeBoardImg src="/images/likeboard.png/" />
                  <LikeBoardPoint>1800</LikeBoardPoint>
                </LikeBoardWrapper>
              </BottomWrapper>
            </BestBoardWrapper>
            <BestBoardWrapper>
              <BestBoardImg src="/images/bestboard.png/" />
              <BestBoardTitle>게시물 제목입니다.</BestBoardTitle>
              <BottomWrapper>
                <WriterWrapper>
                  <Writer>
                    <ProfileImg src="/images/profile.svg" />
                    <WriterName>노원두</WriterName>
                  </Writer>
                  <WriteDate>2020.09.23</WriteDate>
                </WriterWrapper>
                <LikeBoardWrapper>
                  <LikeBoardImg src="/images/likeboard.png/" />
                  <LikeBoardPoint>1800</LikeBoardPoint>
                </LikeBoardWrapper>
              </BottomWrapper>
            </BestBoardWrapper>
            <BestBoardWrapper>
              <BestBoardImg src="/images/bestboard.png/" />
              <BestBoardTitle>게시물 제목입니다.</BestBoardTitle>
              <BottomWrapper>
                <WriterWrapper>
                  <Writer>
                    <ProfileImg src="/images/profile.svg" />
                    <WriterName>노원두</WriterName>
                  </Writer>
                  <WriteDate>2020.09.23</WriteDate>
                </WriterWrapper>
                <LikeBoardWrapper>
                  <LikeBoardImg src="/images/likeboard.png/" />
                  <LikeBoardPoint>1800</LikeBoardPoint>
                </LikeBoardWrapper>
              </BottomWrapper>
            </BestBoardWrapper>
          </BestBoardsWrapper>
        </HeadWrapper>
        <SearchWrapper>
          <SearchInput placeholder="제목을 검색해주세요" />
          <DateInput placeholder="YYYY.MM.DD ~ YYYY.MM.DD" />
          <SearchButton>검색하기</SearchButton>
        </SearchWrapper>
        <BoardListWrapper>
          <ListHeadWrapper>
            <HeadNumber>번호</HeadNumber>
            <HeadTitle>제목</HeadTitle>
            <HeadWriter>작성자</HeadWriter>
            <HeadDate>날짜</HeadDate>
          </ListHeadWrapper>
          <ListBodyWrapper>
            <ListNumber>1</ListNumber>
            <ListTitle>게시물 제목입니다.</ListTitle>
            <ListWriter>작성자</ListWriter>
            <ListDate>2020.09.23</ListDate>
          </ListBodyWrapper>
          <ListBodyWrapper>
            <ListNumber>1</ListNumber>
            <ListTitle>게시물 제목입니다.</ListTitle>
            <ListWriter>작성자</ListWriter>
            <ListDate>2020.09.23</ListDate>
          </ListBodyWrapper>
          <ListBodyWrapper>
            <ListNumber>1</ListNumber>
            <ListTitle>게시물 제목입니다.</ListTitle>
            <ListWriter>작성자</ListWriter>
            <ListDate>2020.09.23</ListDate>
          </ListBodyWrapper>
          <ListBodyWrapper>
            <ListNumber>1</ListNumber>
            <ListTitle>게시물 제목입니다.</ListTitle>
            <ListWriter>작성자</ListWriter>
            <ListDate>2020.09.23</ListDate>
          </ListBodyWrapper>
          <ListBodyWrapper>
            <ListNumber>1</ListNumber>
            <ListTitle>게시물 제목입니다.</ListTitle>
            <ListWriter>작성자</ListWriter>
            <ListDate>2020.09.23</ListDate>
          </ListBodyWrapper>
        </BoardListWrapper>
        <ListBottomWrapper>
          <SubmitButton>게시물 등록하기</SubmitButton>
        </ListBottomWrapper>
      </Wrapper>
    </PageWrapper>
  );
}
