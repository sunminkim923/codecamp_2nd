
import { 
    BigWrapper,
    Wrapper,
    HeadWrapper,
    HeadLine,
    ContentsWrapper,
    AdressBox,
    WriterWrapper,
    Profile,
    WriterInfo,
    WriterName,
    WriterDate,
    ContentsTitle,
    ContentsImages,
    ContentsText,
    YoutubeBox,
    ButtonWrapper,
    ListButton,
    EditButton,
    DeleteButton,
    LineBox,
    CommentWrapper,
    Comment,
    CommentWriter,
    CommentPassword,
    CommentBox,
    CommentText,
    SubmitButton,
    CommentEditWrapper,
    CommentEditBox,
    CommentEdit,
    CommentEditButton

} from './BoardDetail.styles'

export default function BoardDetailUI(props) {

    return (
        <BigWrapper>
            <Wrapper>
                <HeadWrapper>
                    <AdressBox>영등포구</AdressBox>
                    <WriterWrapper>
                        <Profile src="/images/vector.png"></Profile>
                        <WriterInfo>
                            <WriterName>{props.data?.fetchBoard.writer}</WriterName>
                            <WriterDate>2</WriterDate>
                        </WriterInfo>
                    </WriterWrapper>
                </HeadWrapper>
                <HeadLine></HeadLine>
                <ContentsWrapper>
                    <ContentsTitle>{props.data?.fetchBoard.title}</ContentsTitle>
                    <ContentsImages>{props.data?.fetchBoard.images}</ContentsImages>
                    <ContentsText>{props.data?.fetchBoard.contents}</ContentsText>
                </ContentsWrapper>
                <YoutubeBox>{props.data?.fetchBoard.youtubeUrl}</YoutubeBox>
            </Wrapper>
            <ButtonWrapper>
                <ListButton>목록으로</ListButton>
                <EditButton onClick={props.onClickEdit}>수정하기</EditButton>
                <DeleteButton>삭제하기</DeleteButton>
            </ButtonWrapper>
            <LineBox></LineBox>
            <CommentWrapper>
                <div>
                    <img src="/rate_review-24px.svg"></img>
                    <Comment>댓글</Comment>
                </div>
                <CommentWriter type="text" placeholder="작성자"></CommentWriter>
                <CommentPassword type="text" placeholder="비밀번호"></CommentPassword>
                <CommentBox>
                    <CommentText type="text" placeholder="개인정보를 공유 및 요청하거나, 명예 회손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></CommentText>
                    <SubmitButton>등록하기</SubmitButton>
                </CommentBox>
            </CommentWrapper>
            <CommentEditWrapper>
                <CommentWriter></CommentWriter>
                <CommentPassword></CommentPassword>
                <CommentEditBox>
                    <CommentEdit></CommentEdit>
                    <CommentEditButton>수정하기</CommentEditButton>
                </CommentEditBox>
            </CommentEditWrapper>

        </BigWrapper>
    )
}

