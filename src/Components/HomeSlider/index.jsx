import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const HomeSlider = () => {
  return (
    <>
      <div className="homeSlider py-4">
        <div className="container">
          <Swiper
            loop={true}
            spaceBetween={10}
            pagination={{
              type: "progressbar",
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="SliderHome"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg"
                  alt=""
                  className="w-full h-[180px] sm:h-[250px] md:h-[350px] lg:h-[450px] object-cover"
                />
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="https://api.spicezgold.com/download/file_1734524985581_NewProject(11).jpg"
                  alt=""
                  className="w-full h-[180px] sm:h-[250px] md:h-[350px] lg:h-[450px] object-cover"
                />
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="https://api.spicezgold.com/download/file_1734525014348_NewProject(7).jpg"
                  alt=""
                  className="w-full h-[180px] sm:h-[250px] md:h-[350px] lg:h-[450px] object-cover"
                />
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg"
                  alt=""
                  className="w-full h-[180px] sm:h-[250px] md:h-[350px] lg:h-[450px] object-cover"
                />
              </div>
            </SwiperSlide>

            {/* Slide 5 */}
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="https://api.spicezgold.com/download/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg"
                  alt=""
                  className="w-full h-[180px] sm:h-[250px] md:h-[350px] lg:h-[450px] object-cover"
                />
              </div>
            </SwiperSlide>

            {/* Slide 6 */}
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="https://api.spicezgold.com/download/file_1734524971122_NewProject(8).jpg"
                  alt=""
                  className="w-full h-[180px] sm:h-[250px] md:h-[350px] lg:h-[450px] object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
