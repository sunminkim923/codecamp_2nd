import React from 'react'
import { CommentsContents, CommentsCreactedAt, CommentsInput, CommentsLeftWrapper, CommentsRightWrapper, CommentsSubmit, CommentsUserName, CommentsWrapper, Container, SubmitText, Title, TitleWrapper, UserImage, Wrapper, WriteCommentWrapper, WriteUserImage } from './comments.style'
const CommentsUI = () => {
    return(
        <>
            <Container>
                <Wrapper>
                    <TitleWrapper>
                        <Title>댓글</Title>
                    </TitleWrapper>
                    <CommentsWrapper>
                        <UserImage></UserImage>
                        <CommentsLeftWrapper>
                            <CommentsUserName>사용자 아이디</CommentsUserName>
                            <CommentsCreactedAt>작성일자</CommentsCreactedAt>
                        </CommentsLeftWrapper>
                        <CommentsRightWrapper>
                            <CommentsContents>댓글 내용</CommentsContents>
                        </CommentsRightWrapper>
                    </CommentsWrapper>

                </Wrapper>

                    <WriteCommentWrapper>
                        <WriteUserImage></WriteUserImage>
                        <CommentsInput placeholder="댓글을 입력하세요"></CommentsInput>
                        <CommentsSubmit>
                            <SubmitText>게시</SubmitText>
                        </CommentsSubmit>
                    </WriteCommentWrapper>
            </Container>
        </>
    )
}
export default CommentsUI