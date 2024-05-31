import Slider from "react-slick";



const TextCarousel = () => {
  var settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
  };
  return (
      <Slider {...settings}>
        <div>
          <span className="text-[#CD1D9C] font-['Semibold']">Job Interview</span>
        </div>
        <div>
          <span className="text-[#CD1D9C] font-['Semibold'] gradient-text ">Meeting</span>
        </div>
        <div>
          <span className="text-[#CD1D9C] font-['Semibold'] gradient-text ">Small Talk</span>
        </div>
        <div>
         <span className="text-[#CD1D9C] font-['Semibold'] gradient-text ">Social Hangouts</span>
        </div>
      </Slider>
    // <Slider {...settings}>
    //   <div className="text-left">
    //     <span className="text-[#CD1D9C] font-['Semibold']">Job Interview</span>
    //   </div>
    //   <div  className="text-left">
    //     <span className="text-[#CD1D9C] font-['Semibold']">Meeting</span>
    //   </div>
    //   <div className="text-left">
    //     <span className="text-[#CD1D9C] font-['Semibold']">Small Talk</span>
    //   </div>
    //   <div className="text-left">
    //     <span className="text-[#CD1D9C] font-['Semibold']">Social Hangouts</span>
    //   </div>
    // </Slider>
  );
};

export default TextCarousel;
