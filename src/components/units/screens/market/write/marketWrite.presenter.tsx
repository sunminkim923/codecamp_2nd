import React from 'react';
import {
  AddImage,
  AddImageText,
  AddImageWrapper,
  AddressInput,
  ButtonText,
  Container,
  ContentsInput,
  InputWrapper,
  PriceInput,
  SubmitButton,
  Title,
  TitleInput,
  TitleWrapper,
  Wrapper,
} from './marketWrite.style';
import Icon from 'react-native-vector-icons/Ionicons';
const MarketWriteUI = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <TitleWrapper>
            <Title>상품 등록</Title>
          </TitleWrapper>
          <AddImageWrapper>
            <AddImage>
              <Icon size={60} color={'#fff'} name="md-add-sharp" />
            </AddImage>
            <AddImageText>상품 사진을 첨부해주세요</AddImageText>
          </AddImageWrapper>
          <InputWrapper>
            <TitleInput placeholder="글 제목을 입력해주세요"></TitleInput>
            <PriceInput placeholder="상품 가격을 입력해주세요"></PriceInput>
            <AddressInput placeholder="거래 장소를 입력해주세요"></AddressInput>
            <ContentsInput
              multiline
              placeholder="내용을 입력해주세요"></ContentsInput>
          </InputWrapper>
          <SubmitButton>
            <Icon size={30} color={'#fff'} name="md-brush-sharp" />
            <ButtonText>등록하기</ButtonText>
          </SubmitButton>
        </Wrapper>
      </Container>
    </>
  );
};
export default MarketWriteUI;
