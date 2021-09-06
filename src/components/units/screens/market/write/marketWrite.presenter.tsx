import React from 'react'
import { AddImage, AddImageText, AddImageWrapper, AddressInput, ButtonText, Container, ContentsInput, InputWrapper, PriceInput, SubmitButton, Title, TitleInput, TitleWrapper, Wrapper } from './marketWrite.style'
const MarketWriteUI = () => {
    return(
        <>
            <Container>
                <Wrapper>
                <TitleWrapper>
                    <Title>상품 등록</Title>
                </TitleWrapper>
                <AddImageWrapper>
                    <AddImage></AddImage>
                    <AddImageText>상품 사진을 첨부해주세요</AddImageText>
                </AddImageWrapper>
                <InputWrapper>
                    <TitleInput placeholder="글 제목을 입력해주세요"></TitleInput>
                    <PriceInput placeholder="상품 가격을 입력해주세요"></PriceInput>
                    <AddressInput placeholder="거래 장소를 입력해주세요"></AddressInput>
                    <ContentsInput multiline placeholder="내용을 입력해주세요"></ContentsInput>
                </InputWrapper>
                <SubmitButton>
                    <ButtonText>등록하기</ButtonText>
                </SubmitButton>
                </Wrapper>
            </Container>
        </>
    )
}
export default MarketWriteUI