import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState } from "react";

const ProductZoom = () => {
  const [slidIndex, setSlidIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);

  const goto = (index) => {
    setSlidIndex(index);
    thumbsSwiper?.slideTo(index);
    mainSwiper?.slideTo(index);
  };

  const images = [
    "https://api.spicezgold.com/download/file_1734528821890_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-0-202308161431.webp",
    "https://api.spicezgold.com/download/file_1734528821892_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-1-202308161431.jpg",
    "https://api.spicezgold.com/download/file_1734528821894_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-2-202308161432.webp",
    "https://api.spicezgold.com/download/file_1734528821896_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp",
    "https://api.spicezgold.com/download/file_1734528821896_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp",
  ];

  return (
    <div className="flex flex-col md:flex-row gap-3">
      {/* Thumbnails */}
      <div className="slider md:w-[15%] w-full order-2 md:order-1">
        <Swiper
          onSwiper={setThumbsSwiper}
          direction={"horizontal"}
          slidesPerView={4}
          spaceBetween={10}
          navigation={true}
          breakpoints={{
            768: {
              direction: "vertical",
              slidesPerView: 4,
            },
            0: {
              direction: "horizontal",
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
          className="zoomProductSliderThumbs md:h-[500px] h-[100px] overflow-hidden"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group`}
                onClick={() => goto(index)}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Main Image */}
      <div className="zoomContainer md:w-[85%] w-full md:h-[500px] h-[350px] overflow-hidden rounded-md order-1 md:order-2">
        <Swiper
          onSwiper={setMainSwiper}
          slidesPerView={1}
          spaceBetween={0}
          navigation={false}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={img}
                className="w-full h-full object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductZoom;
