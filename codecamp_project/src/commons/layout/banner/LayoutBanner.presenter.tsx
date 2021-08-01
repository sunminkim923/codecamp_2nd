import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Header,
  IMG_1,
  IMG_2

} from './LayoutBanner.styles'



export default function LayoutBannerUI(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
    <Header>
        <Slider {...settings}>
            <IMG_1 src='/images/love_dog.jpg/' />
            <IMG_2 src='/images/lovely_dog.jpg/'/>
            <IMG_1 src='/images/love_dog.jpg/' />
            <IMG_2 src='/images/lovely_dog.jpg/'/>
            <IMG_1 src='/images/love_dog.jpg/' />
            <IMG_2 src='/images/lovely_dog.jpg/'/>
        </Slider>
    </Header>
    )}