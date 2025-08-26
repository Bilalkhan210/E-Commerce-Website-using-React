import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Pagination, Navigation } from 'swiper/modules';
import ProductItem from '../Productitem';

const ProductsSlider = ({ items = 4, products = [] }) => {
  return (
    <div className="productsSlider py-3">
      <Swiper
        slidesPerView={items}
        spaceBetween={20}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: items, spaceBetween: 20 },
        }}
      >
        {products.length > 0 ? (
          products.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductItem {...product} />
            </SwiperSlide>
          ))
        ) : (
          // Agar products prop na mile to demo show karne ke liye
          Array.from({ length: 10 }).map((_, index) => (
            <SwiperSlide key={index}>
              <ProductItem />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};

export default ProductsSlider;
