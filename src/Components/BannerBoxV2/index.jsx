import React from "react";
import "../BannerBoxV2/style.css";
import { Link } from "react-router-dom";

const BannerBoxV2 = (props) => {
  return (
    <>
      <div className="bannerboxv2 w-full overflow-hidden rounded-b-md group relative">
        {/* Image */}
        <img
          src={props.image}
          alt="banner"
          className="w-full h-48 sm:h-64 md:h-80 lg:h-[400px] object-cover
                     transition-all duration-300 group-hover:scale-105"
        />

        {/* Info Box */}
        <div
          className={`info absolute p-4 sm:p-6 md:p-8 top-0 flex items-center justify-center flex-col 
          ${props.info === "left" ? "left-0" : "right-0"} 
          w-full sm:w-2/3 md:w-1/2 lg:w-[40%] 
          h-full bg-black/40 sm:bg-transparent text-white sm:text-black
          z-50 text-center sm:text-left`}
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
            Samsung Gear VR Camera
          </h2>

          <span className="text-xl sm:text-2xl md:text-3xl text-[#ff5252] font-bold w-full">
            $129.00
          </span>

          <div className="w-full mt-3">
            <Link
              to="/"
              className="inline-block px-4 py-2 text-sm sm:text-base md:text-lg 
                         bg-[#ff5252] text-white rounded-md hover:bg-[#e04747] transition"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerBoxV2;
