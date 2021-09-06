import React from 'react'
import { Container, ListItemButton, ListItemTitle, ListItemWrapper, Title, TitleWrapper, UserImage, UserInfoEdit, UserInfoLeftWrapper, UserInfoRightWrapper, UserInfoWrapper, UserName, Wrapper } from './myPage.style'
const MyPageUI = () => {
    return(
        <>
            <Container>
            <Wrapper>
                    <TitleWrapper>
                        <Title>더보기</Title>
                    </TitleWrapper>
                
                    <UserInfoWrapper>
                        
                        <UserInfoLeftWrapper>
                            <UserImage></UserImage>
                            <UserName>유저이름</UserName>
                        </UserInfoLeftWrapper>
                        <UserInfoRightWrapper>
                            <UserInfoEdit>내 정보 수정</UserInfoEdit>
                        </UserInfoRightWrapper>
                    </UserInfoWrapper>

                    <ListItemWrapper>
                        <ListItemTitle>공지사항</ListItemTitle>
                        <ListItemButton></ListItemButton>
                    </ListItemWrapper>
                    <ListItemWrapper>
                        <ListItemTitle>이벤트</ListItemTitle>
                        <ListItemButton></ListItemButton>
                    </ListItemWrapper>
                    <ListItemWrapper>
                        <ListItemTitle>Q&A</ListItemTitle>
                        <ListItemButton></ListItemButton>
                    </ListItemWrapper>
                    <ListItemWrapper>
                        <ListItemTitle>내가 받은 리뷰</ListItemTitle>
                        <ListItemButton></ListItemButton>
                    </ListItemWrapper>
                    <ListItemWrapper>
                        <ListItemTitle>나의 활동기록</ListItemTitle>
                        <ListItemButton></ListItemButton>
                    </ListItemWrapper>
                </Wrapper>
            </Container>
        </>
    )
}
export default MyPageUI