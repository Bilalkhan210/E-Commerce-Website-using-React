import React from "react";
import HomeSlider from "../../Components/HomeSlider";
import HomeCatSlider from "../../Components/HomeCatSlider";
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from "../../Components/AdsBannerSlider";
import AdsBannerSliderV2 from "../../Components/AdsBannerSliderV2";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import ProductsSlider from "../../Components/ProductsSlider";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import BlogItem from "../../Components/BlogItem";
import HomeBannerV2 from "../../Components/HomeSliderV2";
import BannerBoxV2 from "../../Components/BannerBoxV2";

const Home = ()=>{

      const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return(
        <>
        {/* <HomeSlider/>
         */}

         <section className="py-6">
            <div className="container flex  gap-5">
              <div className="part1 w-[70%]">
                  <HomeBannerV2/>
                  
              </div>
                <div className="part2 w-[30%] flex items-center gap-5 justify-between flex-col">
                    <BannerBoxV2 info="left" image={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg'}/>     

                    <BannerBoxV2 info="right" image={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg'}/>     
                               </div>
            </div>
         </section>
        <HomeCatSlider/>
        <section className="bg-white py-8">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="leftsec">
                        <h3 className="text-[22px] font-[600]">POPULAR PRODUCT
                        </h3>
                            <p className="text-[14px] font-[400]">Do not miss the current offers until the end of March</p>
                    </div>
                    <div className="rightsec w-[50%]">
                        <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="
Fashion" />
        <Tab label="

Electronics " />
        <Tab label="Bags" />
        <Tab label="Footwear" />
        <Tab label="Groceries" />
        <Tab label="Beauty" />
        <Tab label="wellness" />
        <Tab label="jewellery" />
      </Tabs>
                    </div>
                </div>

                <ProductsSlider items={5}/>
            </div>
        </section>

        <section className="py-16 bg-white mt-5">

            <div className="container">
                <div className="freeShiping w-[80%] m-auto -py-2 p-4 border border-[#ff5252] flex items-center justify-between rounded-md">
                    <div className="col1 flex items-center gap-4">

                < FaShippingFast  className="text-[50px]"/>
                <span className="text-[30px] font-[600]">FREE SHIPPING</span>
                    </div>
                    <div className="col2">'
                        <p className="mb-0 font-[500]">Free Dilvery now on your first order and over $200</p>
                    </div>
                    <p className="font-bold text-[40px] ">- Only $200*</p>
                </div>
                <AdsBannerSliderV2 items={4}/>
            </div>
        </section>

        <section className="py-5 bg-white">
            <div className="container ">
                   <h3 className="text-[22px] font-[600]">Latest Products
                        </h3>
                <ProductsSlider items={5}/>

                <AdsBannerSlider items={3}/>

            </div>
        </section>
        <section className="py-5 pt-0 bg-white">
            <div className="container ">
                   <h3 className="text-[22px] font-[600]">Featured Products
                        </h3>
                <ProductsSlider items={5}/>

                <AdsBannerSlider items={3}/>

            </div>
        </section>

         <section className="blosection py-4 pb-8 pt-0 bg-white">
            <div className="container ">
                 <h3 className="text-[22px] font-[600] mb-4 ">From The Blog
                        </h3>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        navigation={true}

                        modules={[Navigation]}
                        className="blogslider"
                    >
                        <SwiperSlide>
                            <BlogItem/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem/>
                        </SwiperSlide>
                        </Swiper>
            </div>
         </section>

       
     
        </>
    )
}

export default Home;