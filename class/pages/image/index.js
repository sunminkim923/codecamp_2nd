import styled from "@emotion/styled"

const MyImg = styled.img`
    width: 100px;
    height: 100px;
    position:relative;
`
const MyImg2 = styled.img`
    width: 30px;
    height: 30px;
    background-color: green;
    position: absolute;
    top: 25px;
    left: 25px;
`

const MyDiv = styled.div`
    width: 100px;
    height: 100px;
    /* background-color:red; */
    background-image: url("/mypage/profile.png");
    background-size: 100%;
`


export default function ImagePage () {


    return (
        <>
            <MyImg src="/mypage/profile.png" />
            <MyImg2 src="/mypage/marker.png" />
            <MyDiv / >
            
            <div>이미지 연습</div>

    

        </>

    )



}