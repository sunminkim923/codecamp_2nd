import React from 'react'
import { ButtonText, ChatButton, Container, ItemContents, ItemCreatedAt, ItemImage, ItemInfoWrapper, ItemTitle, UserAddress, UserImage, UserInfoLeftContents, UserInfoRightContents, UserInfoWrapper, UserLikeCount, UserLikeLogo, UserName, UserWrapper, Wrapper } from './marketDetail.style'
const MarketDetailUI = () => {
    return(
        <>
            <Container>
                <ItemImage></ItemImage>
                <Wrapper>
                    <UserWrapper>
                        <UserImage></UserImage>
                        <UserInfoWrapper>
                            <UserInfoLeftContents>
                                <UserName>유저이름</UserName>
                                <UserAddress>설정주소</UserAddress>
                            </UserInfoLeftContents>
                            <UserInfoRightContents>
                                <UserLikeCount>12</UserLikeCount>
                                <UserLikeLogo></UserLikeLogo>
                            </UserInfoRightContents>
                        </UserInfoWrapper>
                    </UserWrapper>
                    <ItemInfoWrapper>
                        <ItemTitle>상품 이름</ItemTitle>
                        <ItemCreatedAt>등록 시간</ItemCreatedAt>
                        <ItemContents>상품 상세설명</ItemContents>
                    </ItemInfoWrapper>
                    <ChatButton>
                        <ButtonText>채팅으로 거래신청</ButtonText>
                    </ChatButton>
                </Wrapper>
            </Container>
        </>
    )
}
export default MarketDetailUI