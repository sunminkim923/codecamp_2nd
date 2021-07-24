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
            <IMG_1 src='/images/dog3.jpg/' />
            <IMG_2 src='/images/_DSC4006.jpg/'/>
            <div>
            <h3>몇살이세요</h3>
            </div>
            <div>
            <h3>어디사세요</h3>
            </div>
            <div>
            <h3>5</h3>
            </div>
            <div>
            <h3>6</h3>
            </div>
        </Slider>
    </Header>
    )}