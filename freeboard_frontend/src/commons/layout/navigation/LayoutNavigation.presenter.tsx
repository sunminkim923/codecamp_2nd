import {
    Header,
    Main,
    List,
    Game,
    UsedMarket,
    Mypage,

} from './LayoutNavigation.styles'


export default function LayoutNavigationUI (){

    return (
        <Header>
            <Main>메인으로</Main>
            <List>게시글 목록</List>
            <UsedMarket>중고마켓</UsedMarket> 
            <Game>미니 게임</Game> 
            <Mypage>마이 페이지</Mypage>
        </Header>

    )
}