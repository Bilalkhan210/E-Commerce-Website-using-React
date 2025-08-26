import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Collapse } from "react-collapse";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import Button from "@mui/material/Button";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Rating from "@mui/material/Rating";

const Sidebar = () => {
  const [isOpenCategoryFillter, setIsOpenCategoryFillter] = useState(true);
  const [isOpenAvilabilityFillter, setIsOpenAvilabilityFillter] = useState(true);
  const [isOpenSizeFillter, setIsOpenSizeFillter] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false); // ✅ Mobile toggle

  return (
    <>
      {/* 🔘 Mobile Toggle Button */}
      <div className="md:hidden flex justify-between items-center px-4 py-2 bg-gray-100 border-b">
        <h2 className="text-[18px] font-semibold">Filters</h2>
        <Button
          className="!text-black !capitalize"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          {showSidebar ? "Close" : "Open"}
        </Button>
      </div>

      {/* Sidebar */}
      <aside
        className={`sidebar py-5 bg-white md:block fixed md:relative top-0 left-0 h-full md:h-auto w-[80%] sm:w-[60%] md:w-[250px] overflow-y-auto transition-transform duration-300 z-50 
        ${showSidebar ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* CATEGORY */}
        <div className="box">
          <h3 className="mb-3 text-[16px] sm:text-[18px] font-[600] flex items-center pr-5">
            SHOP BY Category
            <Button
              className="!w-[28px] sm:!w-[30px] !h-[28px] sm:!h-[30px] !min-w-[28px] !rounded-full !ml-auto !text-[#000]"
              onClick={() => setIsOpenCategoryFillter(!isOpenCategoryFillter)}
            >
              {isOpenCategoryFillter ? <FaAngleUp /> : <FaAngleDown />}
            </Button>
          </h3>
          <Collapse isOpened={isOpenCategoryFillter}>
            <div className="scroll px-3">
              {["Fashion", "Electronics", "Bags", "Footwear", "Groceries", "Beauty", "Wellness", "Jewellery"].map((cat, idx) => (
                <FormControlLabel
                  key={idx}
                  control={<Checkbox size="small" />}
                  label={cat}
                  className="w-full text-[14px] sm:text-[15px]"
                />
              ))}
            </div>
          </Collapse>
        </div>

        {/* AVAILABILITY */}
        <div className="box">
          <h3 className="mb-3 text-[16px] sm:text-[18px] font-[600] flex items-center pr-5">
            Availability
            <Button
              className="!w-[28px] sm:!w-[30px] !h-[28px] sm:!h-[30px] !rounded-full !ml-auto !text-[#000]"
              onClick={() => setIsOpenAvilabilityFillter(!isOpenAvilabilityFillter)}
            >
              {isOpenAvilabilityFillter ? <FaAngleUp /> : <FaAngleDown />}
            </Button>
          </h3>
          <Collapse isOpened={isOpenAvilabilityFillter}>
            <div className="scroll px-3">
              {["Available (17)", "In stock (17)", "Not Available (17)"].map((status, idx) => (
                <FormControlLabel
                  key={idx}
                  control={<Checkbox size="small" />}
                  label={status}
                  className="w-full text-[14px] sm:text-[15px]"
                />
              ))}
            </div>
          </Collapse>
        </div>

        {/* SIZE */}
        <div className="box mt-4">
          <h3 className="mb-3 text-[16px] sm:text-[18px] font-[600] flex items-center pr-5">
            Size
            <Button
              className="!w-[28px] sm:!w-[30px] !h-[28px] sm:!h-[30px] !rounded-full !ml-auto !text-[#000]"
              onClick={() => setIsOpenSizeFillter(!isOpenSizeFillter)}
            >
              {isOpenSizeFillter ? <FaAngleUp /> : <FaAngleDown />}
            </Button>
          </h3>
          <Collapse isOpened={isOpenSizeFillter}>
            <div className="scroll px-3">
              {["Small (6)", "Medium (17)", "Large (10)", "XL (1)", "XXL (12)"].map((size, idx) => (
                <FormControlLabel
                  key={idx}
                  control={<Checkbox size="small" />}
                  label={size}
                  className="w-full text-[14px] sm:text-[15px]"
                />
              ))}
            </div>
          </Collapse>
        </div>

        {/* PRICE */}
        <div className="box mt-4">
          <h3 className="mb-3 text-[16px] sm:text-[18px] font-[600] pr-5">Filter By Price</h3>
          <RangeSlider />
          <div className="flex pt-4 pb-2 PriceRange text-[13px]">
            <span>From: <strong className="text-dark">Rs:{100}</strong></span>
            <span className="ml-auto">To: <strong className="text-dark">Rs:{500}</strong></span>
          </div>
        </div>

        {/* RATING */}
        <div className="box mt-4">
          <h3 className="mb-3 text-[16px] sm:text-[18px] font-[600] pr-5">Filter By Rating</h3>
          {[5,4,3,2,1].map((rate) => (
            <Rating key={rate} name="size-small" defaultValue={rate} size="small" readOnly />
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
