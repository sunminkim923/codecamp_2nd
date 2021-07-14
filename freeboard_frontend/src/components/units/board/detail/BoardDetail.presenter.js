import { 
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
    DeleteButton

} from './BoardDetail.styles'

export default function BoardDetailUI(props) {

    return (
        <>
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
                <ListButton>목로으로</ListButton>
                <EditButton onClick={props.onClickEdit}>수정하기</EditButton>
                <DeleteButton>삭제하기</DeleteButton>
            </ButtonWrapper>
        </>
    )
}

