import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";
import { myContext } from "../../App";
import { useContext } from "react";

import "../Productitem/style.css";

const ProductItem = () => {
  const context = useContext(myContext);

  return (
    <>
      <div className="productItem shadow-lg rounded-md overflow-hidden border border-[rgba(0,0,0,0.10)] 
        flex flex-col sm:flex-row items-start sm:items-center w-full mb-5">
        
        {/* Image Section */}
        <div className="group imgwarpper w-full sm:w-[40%] md:w-[30%] h-[200px] sm:h-[220px] md:h-[250px] 
          overflow-hidden rounded-md relative">
          <Link to="/">
            <div className="img h-full overflow-hidden">
              <img
                src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
              <img
                src="https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg"
                alt=""
                className="w-full h-full object-cover transition-all duration-300 absolute top-0 left-0 opacity-0 group-hover:opacity-100"
              />
            </div>
          </Link>

          {/* Discount */}
          <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 
            bg-[#ff5252] text-white rounded-md px-2 py-1 text-[11px] sm:text-[12px] font-[500]">
            10%
          </span>

          {/* Hover Actions */}
          <div className="actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col 
            w-[40px] sm:w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
            
            <Button
              className="!w-[32px] !h-[32px] sm:!w-[35px] sm:!h-[35px] !rounded-full !bg-white text-black 
              hover:!bg-[#ff5252] hover:!text-white"
              onClick={() => context.setOpenProductDetailsModel(true)}
            >
              <MdZoomOutMap className="text-[16px] sm:text-[18px]" />
            </Button>

            <Button className="!w-[32px] !h-[32px] sm:!w-[35px] sm:!h-[35px] !rounded-full !bg-white text-black 
              hover:!bg-[#ff5252] hover:!text-white">
              <IoGitCompare className="text-[16px] sm:text-[18px]" />
            </Button>

            <Button className="!w-[32px] !h-[32px] sm:!w-[35px] sm:!h-[35px] !rounded-full !bg-white text-black 
              hover:!bg-[#ff5252] hover:!text-white">
              <FaRegHeart className="text-[16px] sm:text-[18px]" />
            </Button>
          </div>
        </div>

        {/* Info Section */}
        <div className="info w-full sm:w-[60%] md:w-[70%] p-3 sm:p-5 bg-white">
          <h6 className="text-[16px] sm:text-[18px] md:text-[20px] font-[400]">
            <Link to="/" className="link">
              RARE RABBIT
            </Link>
          </h6>

          <h3 className="text-[14px] sm:text-[15px] md:text-[16px] mt-2 sm:mt-3 font-[500] mb-2 sm:mb-3 text-[#000] line-clamp-2">
            <Link to="/" className="link transition-all">
              Men Alias-N Regular Fit Spread Collar Shirt SGHWSRHSFDHFDH
            </Link>
          </h3>

          <p className="text-[12px] sm:text-[13px] md:text-[14px] mb-3 hidden sm:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            tenetur odio laborum voluptate molestias consequuntur officia.
          </p>

          <Rating name="size-small" defaultValue={4} size="small" readOnly />

          <div className="flex items-center gap-2 sm:gap-3 mt-2">
            <span className="oldprice line-through text-gray-500 text-[12px] sm:text-[13px]">$58.00</span>
            <span className="price text-[#ff5252] font-[500] text-[13px] sm:text-[14px]">$58.00</span>
          </div>

          <Button className="btn-org btn1 !mt-3 flex items-center gap-2 text-[13px] sm:text-[14px]">
            <FaShoppingCart />
            Add to Cart
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
