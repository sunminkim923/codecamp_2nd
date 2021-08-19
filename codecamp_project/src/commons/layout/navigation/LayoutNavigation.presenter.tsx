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
        <List onClick={props.onClickBoard}>자유게시판</List>
        <HeightLine />
        <UsedMarket onClick={props.onClickUsedMarket}>중고마켓</UsedMarket>
        <HeightLine />
        <Game>뭐 추가하지?</Game>
        <HeightLine />
        <Mypage onClick={props.onClickMypage}>마이페이지</Mypage>
      </Header>
    </Wrapper>
  );
}
