import React from "react";

import Button from "@mui/material/Button";
import { IoBag } from "react-icons/io5";
import MyListitems from "./MyListitems";
import AccountSidebar from "../../Components/AccountSidebar";


const MyList = () => {
 
  return (
      <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="clo1 w-[20%]">
        <AccountSidebar/>
        </div>

        <div className="col2 w-[50%]">
         <div className="shadow-md rounded-md  bg-white">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
               <h2>My List</h2>
          <p className="mt-0">
            There are <span className="font-bold text-[#ff5252] ">2</span>{" "}
            product in My List
          </p>

            </div>
          
           
           
           
           <MyListitems/>
           <MyListitems/>
           <MyListitems/>
           <MyListitems/>
           <MyListitems/>
           <MyListitems/>
           <MyListitems/>
          </div>
        </div>
      </div>
    </section>
   
  );
};

export default MyList;
