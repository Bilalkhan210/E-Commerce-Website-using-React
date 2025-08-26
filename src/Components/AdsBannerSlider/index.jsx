import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import BannerBox from '../BannerBox';

const AdsBannerSlider = (props) => {
  return (
    <div className="py-5 w-full">
      <Swiper
        slidesPerView={props.items || 4} // default 4 slides for large screens
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1, // 📱 Mobile (0px - 640px)
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2, // 📱 Small tablets (640px - 768px)
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3, // 💻 Tablets (768px - 1024px)
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: props.items || 4, // 🖥️ Desktop
            spaceBetween: 25,
          },
        }}
      >
        <SwiperSlide>
          <BannerBox
            img={
              'https://api.spicezgold.com/download/file_1734525634299_NewProject(2).jpg'
            }
            link={'/'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              'https://api.spicezgold.com/download/file_1734525620831_NewProject(3).jpg'
            }
            link={'/'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              'https://api.spicezgold.com/download/file_1734532742018_NewProject(22).jpg'
            }
            link={'/'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              'https://api.spicezgold.com/download/file_1734532742018_NewProject(22).jpg'
            }
            link={'/'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              'https://api.spicezgold.com/download/file_1734532742018_NewProject(22).jpg'
            }
            link={'/'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              'https://api.spicezgold.com/download/file_1734525653108_NewProject(20).jpg'
            }
            link={'/'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={
              'https://api.spicezgold.com/download/file_1734525653108_NewProject(20).jpg'
            }
            link={'/'}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
