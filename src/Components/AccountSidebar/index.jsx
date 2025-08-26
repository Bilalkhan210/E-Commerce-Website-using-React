import React from 'react'
import { IoCloudUpload } from "react-icons/io5";
import Button from "@mui/material/Button";
import { FaRegUserCircle, FaHeart } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { TiShoppingBag } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const AccountSidebar = () => {
  return (
    <div className="cart bg-white shadow-md rounded-md sticky top-[10px] 
                    w-full md:w-[250px] max-h-screen overflow-y-auto">
      {/* Profile Section */}
      <div className="w-full p-4 md:p-5 flex items-center justify-center flex-col">
        <div className="w-[80px] h-[80px] md:w-[110px] md:h-[110px] rounded-full overflow-hidden mb-3 relative group">
          <img
            src="https://media.licdn.com/dms/image/v2/D5635AQHC6XleyOdrhA/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1719446702772?e=1755586800&v=beta&t=IJNzGL9uNCUMaDPbO84OPRnxwjH4p7CdvWA_cYufZtA"
            className="w-full h-full object-cover"
            alt="User"
          />
          <div className="overlay w-full h-full absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100">
            <IoCloudUpload className="text-white text-[20px] md:text-[25px]" />
            <input type="file" className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" />
          </div>
        </div>
        <h3 className="text-sm md:text-base font-semibold">Bilal Khan</h3>
        <h6 className="text-[11px] md:text-[12px] font-[500] text-gray-600 break-all text-center">
          bilalkhan2107007@gmail.com
        </h6>
      </div>

      {/* Sidebar Links */}
      <ul className="list-none pb-5 bg-[#f1f1f1] myaccounytabs">
        <li className="w-full">
          <NavLink to="/myaccount" className={({ isActive }) => isActive ? "active" : ""}>
            <Button className="w-full !text-left !p-2 !px-4 md:!px-5 !justify-start 
                               !text-[rgba(0,0,0,0.7)] !rounded-none flex items-center gap-2 
                               !text-sm md:!text-base">
              <FaRegUserCircle className="text-[18px] md:text-[20px]" />
              User Profile
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink to="/mylist" className={({ isActive }) => isActive ? "active" : ""}>
            <Button className="w-full !text-left !p-2 !px-4 md:!px-5 !justify-start 
                               !text-[rgba(0,0,0,0.7)] !rounded-none flex items-center gap-2 
                               !text-sm md:!text-base">
              <FaHeart className="text-[18px] md:text-[20px]" />
              My List
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink to="/myorder" className={({ isActive }) => isActive ? "active" : ""}>
            <Button className="w-full !text-left !p-2 !px-4 md:!px-5 !justify-start 
                               !text-[rgba(0,0,0,0.7)] !rounded-none flex items-center gap-2 
                               !text-sm md:!text-base">
              <TiShoppingBag className="text-[18px] md:text-[20px]" />
              My Order
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink to="/logout" className={({ isActive }) => isActive ? "active" : ""}>
            <Button className="w-full !text-left !p-2 !px-4 md:!px-5 !justify-start 
                               !text-[rgba(0,0,0,0.7)] !rounded-none flex items-center gap-2 
                               !text-sm md:!text-base">
              <HiOutlineLogout className="text-[18px] md:text-[20px]" />
              Logout
            </Button>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default AccountSidebar;
