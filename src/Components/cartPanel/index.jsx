import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDeleteOutline } from "react-icons/md";

const CartPanel = () => {
  return (
    <>
      {/* Cart Items */}
      <div className="scroll w-full max-h-[300px] sm:max-h-[400px] md:max-h-[500px] overflow-y-auto overflow-x-hidden py-3 px-3 sm:px-4">
        {/* Example Item */}
        <div className="cartItem w-full flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 border-b border-[rgba(0,0,0,0.1)] pb-3 sm:pb-4">
          {/* Image */}
          <div className="img w-full sm:w-[25%] h-[160px] sm:h-[100px] overflow-hidden rounded-md">
            <Link to="/product/3456" className="block group">
              <img
                src="https://api.spicezgold.com/download/file_1734528862995_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvotwal6de-0-202404071601.webp"
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
            </Link>
          </div>

          {/* Info */}
          <div className="info w-full sm:w-[75%] pr-2 sm:pr-5 relative">
            <h4 className="text-[14px] sm:text-[13px] md:text-[15px] font-[500] leading-snug">
              <Link to="/product/3456" className="link hover:text-[#ff5252]">
                Glowworld Women Blue Printed Cotton Kurta
              </Link>
            </h4>
            <p className="flex flex-wrap items-center gap-3 sm:gap-5 mt-1 sm:mt-2">
              <span className="text-[13px] sm:text-[14px]">Qty : 2</span>
              <span className="text-[#ff5252] font-bold text-[13px] sm:text-[14px]">
                Price $23
              </span>
            </p>
            <MdOutlineDeleteOutline className="absolute top-2 right-2 sm:top-[20px] sm:right-[10px] cursor-pointer text-[18px] sm:text-[20px] text-[#555] hover:text-[#ff5252] transition" />
          </div>
        </div>

        {/* Repeat same structure for other items */}
      </div>

      {/* Cart Summary */}
      <div className="sticky bottom-0 bg-white shadow-md">
        <div className="buttominfo py-3 px-3 sm:px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex flex-col gap-2">
          <div className="flex items-center justify-between w-full text-[14px] sm:text-[15px] font-[600]">
            <span>1 Item</span>
            <span className="text-[#ff5252] font-bold">$34</span>
          </div>
          <div className="flex items-center justify-between w-full text-[14px] sm:text-[15px] font-[600]">
            <span>Shipping</span>
            <span className="text-[#ff5252] font-bold">$3</span>
          </div>
        </div>

        <div className="buttominfo py-3 px-3 sm:px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex flex-col gap-2">
          <div className="flex items-center justify-between w-full text-[14px] sm:text-[15px] font-[600]">
            <span>Total (tex excl)</span>
            <span className="text-[#ff5252] font-bold">$64</span>
          </div>
          <div className="flex items-center justify-between w-full text-[14px] sm:text-[15px] font-[600]">
            <span>Taxes</span>
            <span className="text-[#ff5252] font-bold">$0.00</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-2 mt-3">
            <Link to="/cart" className="w-full sm:w-[50%]">
              <Button className="btn-org w-full text-[13px] sm:text-[14px]">
                View Cart
              </Button>
            </Link>
            <Link to="/checkout" className="w-full sm:w-[50%]">
              <Button className="btn-org btn-border w-full text-[13px] sm:text-[14px]">
                Checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPanel;
