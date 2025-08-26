import React, { useState } from "react";
import Button from "@mui/material/Button";
import QtyBox from "../QtyBox";
import Rating from "@mui/material/Rating";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";

const ProductDetail = () => {
  const [ProductAction, setProductAction] = useState(null);

  return (
    <>
      {/* Product Title */}
      <h1 className="text-[18px] sm:text-[20px] md:text-[22px] font-[500] mb-3 leading-snug">
        Siril Georgette Brown Color Saree with Blouse piece
      </h1>

      {/* Brand + Rating */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-sm sm:text-base">
        <span className="text-gray-400">
          Brands :{" "}
          <span className="font-[500] text-black opacity-75">SIRIL</span>
        </span>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />
        <span className="cursor-pointer text-gray-400">Review (5)</span>
      </div>

      {/* Price + Stock */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-3">
        <span className="oldprice line-through text-[18px] sm:text-[20px] md:text-[22px] text-gray-500">
          $58.00
        </span>
        <span className="price text-[#ff5252] text-[18px] sm:text-[20px] md:text-[22px] font-[500]">
          $58.00
        </span>
        <span className="text-[13px] sm:text-[14px]">
          Available In Stock:{" "}
          <span className="text-green-500 font-[600] text-[13px] sm:text-[14px]">
            264 Items
          </span>
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-500 mt-3 mb-5 text-sm sm:text-base pr-0 sm:pr-6 md:pr-10">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
        laudantium inventore deleniti. Impedit deleniti unde nobis ullam at eius
        ipsum, earum neque a eos rerum exercitationem. Ipsam vel voluptate sit.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates,
        libero voluptatum veniam vel, ipsam itaque magnam neque ratione,
        accusantium consectetur voluptate ducimus pariatur dolorum aspernatur!
        Natus distinctio qui error iusto?
      </p>

      {/* Sizes */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
        <span className="text-[15px] sm:text-[16px]"> Size :</span>
        <div className="flex flex-wrap gap-2">
          {["S", "M", "L", "XL"].map((size, i) => (
            <Button
              key={size}
              className="!min-w-[40px] !h-[30px] !border !border-[#9d9d9d] !text-black"
              onClick={() => setProductAction(i)}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      {/* Delivery Info */}
      <p className="text-[13px] sm:text-[14px] mt-4 mb-4">
        Free Shipping (Est. Delivery Time 2-3 Days)
      </p>

      {/* Qty + Add to Cart */}
      <div className="flex flex-col sm:flex-row sm:items-center mt-4 gap-3 sm:gap-4">
        <div className="QtyBoxWrapper w-[70px] sm:w-[80px]">
          <QtyBox />
        </div>
        <Button className="btn-org flex items-center justify-center gap-2 text-[16px] sm:text-[18px] md:text-[20px] hover:!bg-black w-full sm:w-auto">
          <FaShoppingCart /> Add to cart
        </Button>
      </div>

      {/* Wishlist + Compare */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-4 text-sm sm:text-[14px]">
        <span className="flex items-center gap-2 link cursor-pointer font-[500]">
          <FaRegHeart className="text-[16px] sm:text-[18px]" />
          Add to wishlist
        </span>
        <span className="flex items-center gap-2 link cursor-pointer font-[500]">
          <IoGitCompare className="text-[16px] sm:text-[18px]" />
          Add to Compare
        </span>
      </div>
    </>
  );
};

export default ProductDetail;
