import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import Navigation from "./navgasion"; // make sure spelling is correct
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { LuShoppingCart } from "react-icons/lu";
import { IoGitCompare } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { myContext } from "../../App";
import Button from "@mui/material/Button";
import { FaRegCircleUser } from "react-icons/fa6";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaHeart } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { TiShoppingBag } from "react-icons/ti";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const context = useContext(myContext);

  return (
    <header className="bg-white w-full">
      {/* Top Strip */}
      <div className="Top-strip py-2 border-t border-b border-gray-200 text-center sm:text-left">
        <div className="container mx-auto px-3 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-[12px] mb-1 sm:mb-0">
            Get up 50% off new season style – limited time only!
          </p>
          <ul className="flex items-center gap-3 text-[12px] font-medium">
            <li>
              <Link to="/help-center" className="link transition">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/order-tracking" className="link transition">
                Order Tracking
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Header */}
      <div className="header py-3 border-b border-gray-100">
        <div className="container mx-auto px-3 flex items-center justify-between">
          {/* Logo */}
          <div className="w-[40%] sm:w-[25%] flex justify-center sm:justify-start">
            <Link to="/">
              <img src="logo.jpg" alt="Logo" className="h-8 sm:h-10" />
            </Link>
          </div>

          {/* Search */}
          <div className="hidden md:flex w-[40%]">
            <Search />
          </div>

          {/* Actions */}
          <div className="w-[40%] sm:w-[35%] flex items-center justify-end gap-2">
            <ul className="flex items-center gap-2 sm:gap-3">
              {context.isLogin === false ? (
                <li className="text-sm sm:text-base">
                  <Link to="/login" className="link">
                    LogIn
                  </Link>{" "}
                  |&nbsp;
                  <Link to="/register" className="link">
                    Register
                  </Link>
                </li>
              ) : (
                <>
                  <Button
                    className="!text-[#000] flex items-center gap-2"
                    onClick={handleClick}
                  >
                    <Button className="!text-[#000] !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]">
                      <FaRegCircleUser className="text-[14px]" />
                    </Button>
                    <div className="hidden sm:flex flex-col text-left">
                      <h1 className="text-[13px] font-medium text-gray-600">
                        Bilal Khan
                      </h1>
                      <span className="text-[12px] text-gray-500">
                        bilalkhan@gmail.com
                      </span>
                    </div>
                  </Button>

                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    slotProps={{
                      paper: {
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter:
                            "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          "&::before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <Link to="/myaccount" className="w-full block">
                      <MenuItem className="flex gap-2 !py-2">
                        <FaRegCircleUser />{" "}
                        <span className="text-[13px]">My account</span>
                      </MenuItem>
                    </Link>
                    <Link to="/myorder" className="w-full block">
                      <MenuItem className="flex gap-2 !py-2">
                        <TiShoppingBag />
                        <span className="text-[13px]">Order</span>
                      </MenuItem>
                    </Link>
                    <Link to="/mylist" className="w-full block">
                      <MenuItem className="flex gap-2 !py-2">
                        <FaHeart />
                        <span className="text-[13px]">My List</span>
                      </MenuItem>
                    </Link>
                    <MenuItem className="flex gap-2 !py-2">
                      <HiOutlineLogout />{" "}
                      <span className="text-[13px]">Logout</span>
                    </MenuItem>
                  </Menu>
                </>
              )}

              {/* Icons */}
              <li>
                <Tooltip title="Compare">
                  <IconButton aria-label="compare" size="small">
                    <IoGitCompare className="link text-[16px]" />
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Wishlist">
                  <IconButton aria-label="wishlist" size="small">
                    <FaRegHeart className="link text-[16px]" />
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Cart">
                  <IconButton
                    aria-label="cart"
                    size="small"
                    onClick={() => context.setOpenCartPanel(true)}
                  >
                    <LuShoppingCart className="link text-[16px]" />
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="hidden md:block">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
