import React, { useState } from "react";
import {Link} from 'react-router-dom'

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";
// import Link from "@mui/material/Link";
import { FcGoogle } from "react-icons/fc";

const Register = () => {

  const [ispassword,setIspassword] = useState(false)
  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-4 px-12">
          <h3 className="text-center text-[18px]">Register with a new Account</h3>
          <form action="" className="!w-full mt-5">
            <div className="from-group !w-full mb-5 ">
              <TextField
              type="text"
                id="name"
                label="Full Name"
                variant="outlined"
                className="w-full mb-5"
              />
            </div>
            <div className="from-group !w-full mb-5 ">
              <TextField
              type="email"
                id="email"
                label="email"
                variant="outlined"
                className="w-full mb-5"
              />
            </div>
            <div className="from-group !w-full mb-5 relative">
              <TextField
              type={ispassword===false ? 'password':"text"}
                id="password"
                label="password"
                variant="outlined"
                className="w-full mb-5"
              />
              <Button className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black 
              " onClick={()=>{
                setIspassword(!ispassword)
              }}>
                {
                  ispassword===false ?   <FaEyeSlash className="text-[20px] opacity-75" />: <IoEyeSharp className="text-[20px] opacity-75" /> 
                   
                }
               
              </Button>
            </div>
            <div className="flex items-center w-full mt-3  mb-3">
              <Button className="btn-org  !hover-!bg-black w-full">Register</Button>
              </div>
              <p className="font-[200] text-center">Alread have an Account <Link className="link text-[14px] font-[600] text-[#ff5252]  " to="/login">Login</Link></p>

              <p className="text-center">or Continue with social Account</p>

              <Button className="flex gap-3 w-full !bg-[#f1f1f1]  !text-black"><FcGoogle className="text-[20px]"/>Login with google</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
