import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




export default function LayoutBannerUI(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
    <div>
        <div>Banner 영역입니다.</div>
        <Slider {...settings}>
            <div>
            <h3>안녕하세요</h3>
            </div>
            <div>
            <h3>반갑습니다</h3>
            </div>
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
  </div>
    )}