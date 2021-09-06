import React from 'react'
import { BoardComments, BoardContentsText, BoardContentsWrapper, CommentsText, CommentsUserImage, CommentsWrapper, Container, CreatedAt, ImageWrapper, LikeText, MoreButton, NewCommentsText, NewCommentsWrapper, UserImage, UserInfoLeftContents, UserInfoRightContents, UserInfoWrapper, UserName, UserWrapper, Wrapper } from './boardList.style'
const BoardListUI = () => {
    return(
        <>
            <Container>
                <Wrapper>
                    <UserWrapper>
                        <UserImage></UserImage>
                        <UserInfoWrapper>
                            <UserInfoLeftContents>
                                <UserName>작성자 아이디</UserName>
                                <CreatedAt>등록날짜</CreatedAt>
                            </UserInfoLeftContents>
                            <UserInfoRightContents>
                                <MoreButton></MoreButton>
                            </UserInfoRightContents>
                        </UserInfoWrapper>
                    </UserWrapper>
                    <ImageWrapper></ImageWrapper>
                    <BoardContentsWrapper>
                        <BoardContentsText>게시글 내용</BoardContentsText>
                    </BoardContentsWrapper>

                    <CommentsWrapper>
                        <BoardComments>
                            <CommentsText>댓글 @개 모두보기</CommentsText>
                            {/* <LikeText>좋아요 @개</LikeText> */}
                        </BoardComments>
                        <NewCommentsWrapper>
                            <CommentsUserImage></CommentsUserImage>
                            <NewCommentsText>댓글 달기 ...</NewCommentsText>
                        </NewCommentsWrapper>
                    </CommentsWrapper>
                </Wrapper>
            </Container>
        </>
    )
}
export default BoardListUI