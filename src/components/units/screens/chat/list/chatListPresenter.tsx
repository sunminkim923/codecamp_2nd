import React from 'react'
import { ChatContents, Container, ListItemInfoWrapper, ListItemLeftWrapper, ListItemRightWrapper, ListItemWrapper, MessageCount, Title, TitleWrapper, UserImage, UserName, Wrapper } from './chatList.stye'
const ChatListUI = () => {
    return(
        <>
            <Container>
                <Wrapper>
                    <TitleWrapper>
                        <Title>채팅</Title>
                    </TitleWrapper>

                    <ListItemWrapper>
                        <UserImage></UserImage>
                        <ListItemInfoWrapper>
                            <ListItemLeftWrapper>
                                <UserName>유저이름</UserName>
                                <ChatContents>메세지 내용</ChatContents>
                            </ListItemLeftWrapper>
                            <ListItemRightWrapper>
                                <MessageCount>N</MessageCount>
                            </ListItemRightWrapper>
                        </ListItemInfoWrapper>
                    </ListItemWrapper>
                    
                </Wrapper>
            </Container>
        </>
    )
}
export default ChatListUI