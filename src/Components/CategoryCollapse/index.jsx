import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { FaRegPlusSquare } from "react-icons/fa";
import { CiSquareMinus } from "react-icons/ci";

const CategoryCollapse = () => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const openMenu = (index) => {
    setSubmenuIndex(submenuIndex === index ? null : index);
  };

  const openInnerMenu = (index) => {
    setInnerSubmenuIndex(innerSubmenuIndex === index ? null : index);
  };

  return (
    <div
      className="
        scroll 
        w-full 
        md:w-[280px] 
        bg-white 
        shadow-md 
        rounded-md 
        md:rounded-lg 
        overflow-y-auto 
        max-h-[80vh]
        p-2
      "
    >
      <ul className="w-full">
        {[
          "Fashion",
          "Electronics",
          "Watch",
          "T-shirt",
          "Shoes",
        ].map((category, index) => (
          <li
            key={index}
            className="list-none flex items-center relative flex-col w-full"
          >
            <div className="w-full relative">
              <Button className="w-full !text-left !justify-start !px-3 !normal-case !text-[15px] md:!text-[16px] !text-[rgba(0,0,0,0.8)]">
                {category}
              </Button>

              {submenuIndex === index ? (
                <CiSquareMinus
                  className="absolute top-[12px] right-[15px] text-lg md:text-xl cursor-pointer"
                  onClick={() => openMenu(index)}
                />
              ) : (
                <FaRegPlusSquare
                  className="absolute top-[12px] right-[15px] text-lg md:text-xl cursor-pointer"
                  onClick={() => openMenu(index)}
                />
              )}
            </div>

            {/* Submenu */}
            {submenuIndex === index && (
              <ul className="submenu w-full pl-3 transition-all duration-300 ease-in-out">
                <li className="list-none relative">
                  <Button className="w-full !text-left !justify-start !px-3 !normal-case !text-[14px] md:!text-[15px] !text-[rgba(0,0,0,0.8)]">
                    Apparel
                  </Button>

                  {innerSubmenuIndex === index ? (
                    <CiSquareMinus
                      className="absolute top-[10px] right-[15px] text-base cursor-pointer"
                      onClick={() => openInnerMenu(index)}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-[10px] right-[15px] text-base cursor-pointer"
                      onClick={() => openInnerMenu(index)}
                    />
                  )}
                </li>

                {/* Inner Submenu */}
                {innerSubmenuIndex === index && (
                  <ul className="inner_submenu w-full pl-4 pb-2 space-y-1 transition-all duration-300 ease-in-out">
                    {["Smart Tablet", "Crepe T-shirt", "Leather Watch", "Rolling Diamond"].map(
                      (item, i) => (
                        <li key={i} className="list-none">
                          <Link
                            to="/"
                            className="block w-full text-[13px] md:text-[14px] py-1 px-2 hover:text-red-500 transition"
                          >
                            {item}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryCollapse;
