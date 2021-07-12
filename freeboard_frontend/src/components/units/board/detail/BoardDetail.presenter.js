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
} from './BoardDetail.styles'

export default function BoardDetailUI(props) {

    return (
        <Wrapper>
            <HeadWrapper>
                <AdressBox></AdressBox>
                <WriterWrapper>
                    <Profile></Profile>
                    <WriterInfo>
                        <WriterName>{props.aaa?.fetchBoard.writer}</WriterName>
                        <WriterDate></WriterDate>
                    </WriterInfo>
                </WriterWrapper>
            </HeadWrapper>
            <HeadLine></HeadLine>
            <ContentsWrapper>
                <ContentsTitle>{props.aaa?.fetchBoard.title}</ContentsTitle>
                <ContentsImages>{props.aaa?.fetchBoard.images}</ContentsImages>
                <ContentsText>{props.aaa?.fetchBoard.contents}</ContentsText>
            </ContentsWrapper>
            <YoutubeBox>{props.aaa?.fetchBoard.youtubeUrl}</YoutubeBox>
        </Wrapper>
    )

}