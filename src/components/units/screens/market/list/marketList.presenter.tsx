import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Container, ContentsWrapper, ImageWrapper, ItemAddress, ItemLike, ItemPrice, ItemTitle, Wrapper } from './marketList.style'

const MarketListUI = ({navigation}:any) => {
    return(
        <>
            <Container>

                <TouchableOpacity onPress={()=>{navigation.navigate('Detail')}}>
                    <Wrapper>
                        <ImageWrapper></ImageWrapper>
                        <ContentsWrapper>
                            <ItemTitle>상품 이름</ItemTitle>
                            <ItemAddress>상품 주소</ItemAddress>
                            <ItemPrice>가격</ItemPrice>
                            <ItemLike>좋아요</ItemLike>
                        </ContentsWrapper>
                    </Wrapper>
                </TouchableOpacity>


            </Container>
        </>
    )
}
export default MarketListUI