import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 1200px;
    height: 1847px;
    border: 1px solid black;
    margin: 100px;
    padding-top: 20px;
    padding-bottom: 100px;
    padding-right: 102px;
    padding-left: 102px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeadWrapper = styled.div`
    width: 996px;
    height: 124px;
    /* padding-top: 20px; */
    border: 1px solid black;
`;

export const HeadLine = styled.div`
    width: 996px;
    height: 1px;
    border-bottom: 1px solid black;
    padding-top: 20px;
`;

export const ContentsWrapper = styled.div`
    width: 996px;
    height: 710px;
    border: 1px solid black;
    margin-top: 80px;
`;

export const AdressBox = styled.div`
    width: 376px;
    height: 64px;
    border: 1px solid black;
`;

export const WriterWrapper = styled.div`
    width: 199px;
    height: 60px;
    border: 1px solid black;
    display: flex;
`;

export const Profile = styled.img`
    /* background-image: url("/images/vector.png"); */ 
    // 자잘한 이미지는 보통 img태그를 사용하고 큰 배경이미지 같은경우 div에 백그라운드 이미지를 쓴다.
    width: 46px;
    height: 46px;
`;

export const WriterInfo = styled.div`

`;

export const WriterName = styled.div`
    font-size: 24px;
    font-weight: 500;
`;

export const WriterDate = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: #828282;
`;


export const ContentsTitle = styled.div`
    /* width: 285px; */
    height: 52px;
    font-size: 36px;
    font-weight: bold;
`;

export const ContentsImages = styled.div`
    width: 996px;
    height: 480px;
    border: 1px solid black;
    /* margin-top: 40px; */
    /* padding-top: 40px; */
`;

export const ContentsText = styled.div`
    width: 996px;
    height: auto;
    border: 1px solid black;
    margin-top: 40px ;
`
export const YoutubeBox  = styled.div`
    width: 486px;
    height: 240px;
    border: 1px solid black;
    margin-top: 120px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
export const ListButton = styled.button`
    width: 179px;
    height: 45px;
`
export const EditButton = styled.button`
    width: 179px;
    height: 45px;
`
export const DeleteButton = styled.button`
    width: 179px;
    height: 45px;
`