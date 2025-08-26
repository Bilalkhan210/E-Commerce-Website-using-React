import React, { use } from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import  Button from '@mui/material/Button';

import Rating from "@mui/material/Rating";
const MyListitems = (props) => {
  
  return (
    <div className="cartItem w-full p-3 flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)]">
              <div className="img w-[15%] rounded-md overflow-hidden group">
                <Link to="/product/7845">
                  <img
                    src="https://api.spicezgold.com/download/file_1734527074321_ksc-khatushyam-collection-red-pu-for-women-handheld-bag-product-images-rvvxdnkjfy-0-202405290001.webp"
                    alt=""
                    className="w-full group-hover:scale-105 transition-all"
                  />
                </Link>
              </div>
              <div className="info w-[85%] relative">
                <IoMdClose className="cursor-pointer  absolute top-[0px] right-[0px] text-[22px] link transition-all"/>
                <span className="text-[13px]">Levis</span>
                <h3 className="text-[16px]"><Link className="link">

                KSC "KHATUSHYAM COLLECTION" Red Pu For Women Handheld Bag
                </Link>
                </h3>
                          <Rating name="size-small" defaultValue={4} size="small" readOnly />


                
                <div className="flex items-center gap-3 mt-2 mb-2">
            <span className="price text-[#040404] font-[500]">$58.00</span>
            <span className="oldprice line-through text-gray-500">$58.00</span>
            <span className="price text-[#ff5252] font-[500]">50% OFF</span>
          </div>

           
           <Button className=' btn-sm'>Add To Cart</Button>
              </div>
            </div>
  )
}

export default MyListitems
