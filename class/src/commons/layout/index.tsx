import LayoutHeader from "./header/LayoutHeader.container"
import LayoutBanner from "./banner/LayoutBanner.container"
import LayoutNavigation from "./navigation/LayoutNavigation.container"
import LayoutFooter from "./footer/LayoutFooter.container"
import styled from "@emotion/styled"


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export default function Layout (props:any) {


    return (
        <>
            <LayoutHeader />
            <LayoutBanner />
            <LayoutNavigation />
            <Wrapper>
            <div style={{backgroundColor:"skyblue"}}>사이드메뉴 컴포넌트 입니다. </div>
            <div>{props.children}</div>
            </Wrapper>
            <LayoutFooter />
        </>
    )
}

