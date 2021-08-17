import {
  Wrapper,
  Header,
  Main,
  List,
  Game,
  UsedMarket,
  Mypage,
  HeightLine,
} from "./LayoutNavigation.styles";

export default function LayoutNavigationUI(props) {
  return (
    <Wrapper>
      <Header>
        <Main onClick={props.onClickMain}>메인으로</Main>
        <HeightLine />
        <List>게시글목록</List>
        <HeightLine />
        <UsedMarket onClick={props.onClickUsedMarket}>중고마켓</UsedMarket>
        <HeightLine />
        <Game>미니게임</Game>
        <HeightLine />
        <Mypage onClick={props.onClickMypage}>마이페이지</Mypage>
      </Header>
    </Wrapper>
  );
}
