import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const HomeCatSlider = () => {
  return (
    <>
      <div className="HomeCatSlider pt-4 py-8">
        <div className="container">
          <Swiper
            slidesPerView={8}   // default desktop view
            spaceBetween={20}
            navigation={true}
            modules={[Navigation, Pagination]}
            className="mySwiper"
            breakpoints={{
              320: {  // Mobile
                slidesPerView: 2,
                spaceBetween: 10,
              },
              480: {  // Large Mobile
                slidesPerView: 3,
                spaceBetween: 12,
              },
              768: {  // Tablet
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1024: { // Small Desktop
                slidesPerView: 6,
                spaceBetween: 18,
              },
              1280: { // Large Desktop
                slidesPerView: 8,
                spaceBetween: 20,
              }
            }}
          >
            <SwiperSlide>
              <Link to="/">
                <div className="item py-7 px-3 bg-white rounded-sm text-center flex flex-col items-center justify-center">
                  <img
                    src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                    alt=""
                    className="transition-all w-[60px] h-[60px] object-contain"
                  />
                  <h3 className="font-[500] text-sm mt-2">Fashion</h3>
                </div>
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link to="/">
                <div className="item py-7 px-3 bg-white rounded-sm text-center flex flex-col items-center justify-center">
                  <img
                    src="https://api.spicezgold.com/download/file_1734525218436_ele.png"
                    alt=""
                    className="transition-all w-[60px] h-[60px] object-contain"
                  />
                  <h3 className="font-[500] text-sm mt-2">Electronics</h3>
                </div>
              </Link>
            </SwiperSlide>

            {/* Baaki categories same tarike se */}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeCatSlider;
