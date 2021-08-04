import {
  PageWrapper,
  Wrapper,
  HeadWrapper,
  ProfileWrapper,
  Profile,
  WriterWrapper,
  LocationWrapper,
  Icon01,
  Location,
  UnderLine,
  ProductTitleWrapper,
  TitleWrapper,
  Character,
} from "./detail.styles";
export default function ProductDetailUI() {
  return (
    <PageWrapper>
      <Wrapper>
        <HeadWrapper>
          <ProfileWrapper>
            <Profile src="/images/profile.svg" />
            <WriterWrapper>
              <div>판매자</div>
              <div>Date : 2021.02.18</div>
            </WriterWrapper>
          </ProfileWrapper>
          <LocationWrapper>
            <Icon01 src="/images/file.svg" />
            <Location src="/images/local.svg" />
          </LocationWrapper>
        </HeadWrapper>
        <UnderLine></UnderLine>
        <ProductTitleWrapper>
          <TitleWrapper>
            <Character></Character>
          </TitleWrapper>
        </ProductTitleWrapper>
      </Wrapper>
    </PageWrapper>
  );
}
