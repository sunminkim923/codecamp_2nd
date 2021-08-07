import InputFullSize from "../../../commons/inputs/Input-full-size";
import {
  PageWrapper,
  Wrapper,
  Title,
  InputWrapper,
  Text,
  TextInput,
  ToolBox,
  ProductExplanation,
  PositionWrapper,
  MapWrapper,
  Map,
  GpsAdressWrapper,
  GpsWrapper,
  Lattitude,
  Longitude,
  Local,
  AdressWrapper,
  ImageWrapper,
  ImageUpload,
  RadioWrapper,
  Radio,
  Text02,
  SubmitWrapper,
  SubmitButton,
  Error,
} from "./register.styles";

export default function RegisterUI(props) {
  return (
    <PageWrapper>
      <Wrapper>
        <Title>상품 등록하기</Title>
        <form onSubmit={props.handleSubmit(props.onSubmit)}>
          <InputWrapper>
            <Text>상품명</Text>
            <InputFullSize
              inputName="상품명"
              placeholder="상품명을 입력해주세요"
              type="text"
              register={{ ...props.register("productName") }}
              errorMessage={props.errors.productName?.message}
            />
          </InputWrapper>
          <InputWrapper>
            <Text>한줄요약</Text>
            <InputFullSize
              placeholder="상품의 특징을 입력해주세요"
              tpye="text"
              register={{ ...props.register("productCharacter") }}
              errorMessage={props.errors.productCharacter?.message}
            />
          </InputWrapper>
          <InputWrapper>
            <Text>상품설명</Text>
            <ToolBox></ToolBox>
            <ProductExplanation
              placeholder="상품을 설명해주세요"
              {...props.register("productExplanation")}
            />
            <Error>{props.errors.productExplanation?.message}</Error>
          </InputWrapper>
          <InputWrapper>
            <Text>판매가격</Text>
            <InputFullSize
              type="text"
              placeholder="가격을 입력하세요"
              register={{ ...props.register("price") }}
              errorMessage={props.errors.price?.message}
            />
          </InputWrapper>
          <InputWrapper>
            <Text>태그입력</Text>
            <TextInput type="text" placeholder="#태그 #태그 #태그" />
          </InputWrapper>
          <PositionWrapper>
            <MapWrapper>
              <Text>거래위치</Text>
              <Map></Map>
            </MapWrapper>
            <GpsAdressWrapper>
              <GpsWrapper>
                <Text>GPS</Text>
                <Lattitude>위도(LAT)</Lattitude>
                <Local src="/images/local.svg" />
                <Longitude>경도(LNG)</Longitude>
              </GpsWrapper>
              <AdressWrapper>
                <Text>주소</Text>
                <TextInput
                  type="text"
                  placeholder="주소를 입력하세요."
                  {...props.register("address")}
                />
                <Error>{props.errors.address?.message}</Error>
                <TextInput
                  type="text"
                  placeholder="상세주소를 입력하세요."
                  {...props.register("addressDetail")}
                />
                <Error>{props.errors.addressDetail?.message}</Error>
              </AdressWrapper>
            </GpsAdressWrapper>
          </PositionWrapper>
          <ImageWrapper>
            <Text>사진첨부</Text>
            <ImageUpload>
              <div>+</div>
              <div>Upload</div>
            </ImageUpload>
            <ImageUpload>
              <div>+</div>
              <div>Upload</div>
            </ImageUpload>
          </ImageWrapper>
          <RadioWrapper>
            <Text>메인사진 설정</Text>
            <Radio type="radio" name="image" />
            <Text02>사진 1</Text02>
            <Radio type="radio" name="image" />
            <Text02>사진 2</Text02>
          </RadioWrapper>
          <SubmitWrapper>
            <SubmitButton type="submit" isActive={props.isActive}>
              등록하기
            </SubmitButton>
          </SubmitWrapper>
        </form>
      </Wrapper>
    </PageWrapper>
  );
}
