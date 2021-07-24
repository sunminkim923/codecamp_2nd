import {
    Header,
    Main,
    List,
    Submit,
    Mypage,

} from './LayoutNavigation.styles'


export default function LayoutNavigationUI (){

    return (
        <Header>
            <Main>메인으로</Main>
            <List>게시글 목록</List> 
            <Submit>게시글 등록</Submit> 
            <Mypage>마이 페이지</Mypage>
        </Header>

    )
}