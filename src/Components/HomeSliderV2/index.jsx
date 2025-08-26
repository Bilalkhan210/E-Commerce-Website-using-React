import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import Button from "@mui/material/Button";

const HomeBannerV2 = () => {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="HomeSliderv2"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden relative">
            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-1.jpg"
              className="w-full h-[250px] md:h-[500px] object-cover"
            />
            <div className="info absolute top-0 left-0 md:right-0 md:left-auto w-full md:w-1/2 h-full z-50 p-4 md:p-8 flex items-center flex-col justify-center text-center md:text-left transition-all duration-700">
              <h4 className="text-[16px] md:text-[20px] font-[500] w-full mb-2 md:mb-3">
                Big Saving Days Sale
              </h4>
              <h2 className="text-[22px] md:text-[39px] font-[700] w-full leading-snug">
                Women Solid Round Green T-Shirt
              </h2>
              <h3 className="text-[16px] md:text-[20px] font-[500] w-full mt-2 md:mt-3 mb-2 md:mb-3 flex flex-col md:flex-row items-center md:items-start gap-2">
                Starting At Only{" "}
                <span className="text-[#ff5252] text-[26px] md:text-[35px] font-[600]">
                  $89.0
                </span>
              </h3>
              <div className="w-full flex justify-center md:justify-start">
                <Button className="btn-org">SHOP NOW</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden relative">
            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-2.jpg"
              className="w-full h-[250px] md:h-[500px] object-cover"
            />
            <div className="info absolute top-0 left-0 md:right-0 md:left-auto w-full md:w-1/2 h-full z-50 p-4 md:p-8 flex items-center flex-col justify-center text-center md:text-left transition-all duration-700">
              <h4 className="text-[16px] md:text-[20px] font-[500] w-full mb-2 md:mb-3">
                Big Saving Days Sale
              </h4>
              <h2 className="text-[22px] md:text-[39px] font-[700] w-full leading-snug">
                Buy Modern Chair In Black Color
              </h2>
              <h3 className="text-[16px] md:text-[20px] font-[500] w-full mt-2 md:mt-3 mb-2 md:mb-3 flex flex-col md:flex-row items-center md:items-start gap-2">
                Starting At Only{" "}
                <span className="text-[#ff5252] text-[26px] md:text-[35px] font-[600]">
                  $89.0
                </span>
              </h3>
              <div className="w-full flex justify-center md:justify-start">
                <Button className="btn-org">SHOP NOW</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeBannerV2;
