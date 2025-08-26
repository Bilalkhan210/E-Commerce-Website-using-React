import React, { use } from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GoTriangleDown } from "react-icons/go";
import Rating from "@mui/material/Rating";
const Cartitems = (props) => {
     const [sizeAnchorEl, setSizeAnchorEl] = useState(null);
     const [selectedSize,setSelectedSize] = useState(props.size)
      const openSize = Boolean(sizeAnchorEl);
     const [QtyAnchorEl, setQtyAnchorEl] = useState(null);
     const [selectedQty,setSelectedQty] = useState(props.qty)
      const openQty = Boolean(QtyAnchorEl);
      const handleClickSize = (event) => {
        setSizeAnchorEl(event.currentTarget);
      };
      const handleCloseSize = (value) => {
        setSizeAnchorEl(null);
        if(value!==null){
            setSelectedSize(value)
        }else{

        }
      };
      const handleClickQty = (event) => {
        setQtyAnchorEl(event.currentTarget);
      };
      const handleCloseQty = (value) => {
        setQtyAnchorEl(null);
        if(value!==null){
            setSelectedQty(value)
        }else{

        }
      };
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


                <div className="flex items-center gap-3 mt-2">
                  <div className="relative">

                  <span className="flex items-center justify-center bg-[#f1f1f1] text-[11px]
                  font-[600]
                  p-1 rounded-md cursor-pointer py-1 px-2" onClick={handleClickSize}> Size : {selectedSize}
                   <GoTriangleDown/>
                  </span>
                   <Menu
        id="size-menu"
        anchorEl={sizeAnchorEl}
        open={openSize}
        onClose={()=>handleCloseSize(null)}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem onClick={()=>handleCloseSize('S')}>S</MenuItem>
        <MenuItem onClick={()=>handleCloseSize('M')}>M</MenuItem>
        <MenuItem onClick={()=>handleCloseSize('L')}>L</MenuItem>
        <MenuItem onClick={()=>handleCloseSize('XL')}>XL</MenuItem>
        <MenuItem onClick={()=>handleCloseSize('XXL')}>XXL</MenuItem>
      </Menu>
                  </div>
                  <div className="relative">
                  <span className="flex items-center justify-center bg-[#f1f1f1] text-[11px]
                  font-[600]
                  p-1 rounded-md cursor-pointer py-1 px-2" onClick={handleClickQty}> Qty : {selectedQty}
                   <GoTriangleDown/>
                  </span>
                      <Menu
        id="size-menu"
        anchorEl={QtyAnchorEl}
        open={openQty}
        onClose={()=>handleCloseQty(null)}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem onClick={()=>handleCloseQty(1)}>1</MenuItem>
        <MenuItem onClick={()=>handleCloseQty(2)}>2</MenuItem>
        <MenuItem onClick={()=>handleCloseQty(3)}>3</MenuItem>
        <MenuItem onClick={()=>handleCloseQty(4)}>4</MenuItem>
        <MenuItem onClick={()=>handleCloseQty(5)}>5</MenuItem>
      </Menu>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-2">
            <span className="price text-[#040404] font-[500]">$58.00</span>
            <span className="oldprice line-through text-gray-500">$58.00</span>
            <span className="price text-[#ff5252] font-[500]">50% OFF</span>
          </div>
              </div>
            </div>
  )
}

export default Cartitems
