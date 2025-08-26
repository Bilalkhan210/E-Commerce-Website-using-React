import React, { useContext, useState } from "react";
import {Link, useNavigate} from 'react-router-dom'

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";
// import Link from "@mui/material/Link";
import { FcGoogle } from "react-icons/fc";
import { myContext } from "../../App";

const ForgotPassword = () => {

  const [ispassword,setIspassword] = useState(false)
  const [ispassword2,setIspassword2] = useState(false)
 
const context =useContext(myContext)
const navigate = useNavigate();


  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-4 px-12">
          <h3 className="text-center text-[18px]">Forgot Password</h3>
          <form action="" className="!w-full mt-5">
            <div className="from-group !w-full mb-5  relative">
              <TextField
              type={ispassword===false ? 'password':"text"}
                id="password"
                label="New Password"
                variant="outlined"
                className="w-full mb-5"
                name= 'name'
              />
                <Button type="submit" className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black 
              " onClick={()=>{
                setIspassword(!ispassword)
              }}>
                {
                  ispassword===false ?   <FaEyeSlash className="text-[20px] opacity-75" />: <IoEyeSharp className="text-[20px] opacity-75" /> 
                   
                }
               
              </Button>
            </div>
            <div className="from-group !w-full mb-5 relative">
              <TextField
              type={ispassword2===false ? 'password':"text"}
                id="confirm_password"
                label="Confirm Password"
                variant="outlined"
                className="w-full mb-5"
                name='password'
              />
            
              <Button type="submit" className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black 
              " onClick={()=>{
                setIspassword2(!ispassword2)
              }}>
                {
                  ispassword===false ?   <FaEyeSlash className="text-[20px] opacity-75" />: <IoEyeSharp className="text-[20px] opacity-75" /> 
                   
                }
               
              </Button>
            </div>
          
            <div className="flex items-center w-full mt-3  mb-3">
              <Button className="btn-org  !hover-!bg-black w-full">Change Password</Button>
              </div>


          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
