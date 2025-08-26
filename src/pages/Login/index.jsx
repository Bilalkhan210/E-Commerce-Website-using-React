import React, { useContext, useState } from "react";
import {Link, useNavigate} from 'react-router-dom'

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";
// import Link from "@mui/material/Link";
import { FcGoogle } from "react-icons/fc";
import { myContext } from "../../App";

const Login = () => {

  const [ispassword,setIspassword] = useState(false)
  const context = useContext(myContext)
const [formfiled,setformfiled] = useState({
  email:'',
  password:''
})

const navigate = useNavigate();

const forgotPassword = () => {
  context.openAlertBox('success', 'OTP send');
  navigate('/verify');
};
  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-4 px-12">
          <h3 className="text-center text-[18px]">Login to your Account</h3>
          <form action="" className="!w-full mt-5">
            <div className="from-group !w-full mb-5 ">
              <TextField
              type="email"
                id="email"
                label="email"
                variant="outlined"
                className="w-full mb-5"
                name= 'name'
              />
            </div>
            <div className="from-group !w-full mb-5 relative">
              <TextField
              type={ispassword===false ? 'password':"text"}
                id="password"
                label="password"
                variant="outlined"
                className="w-full mb-5"
                name='password'
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
            <a className="link cursor-pointer text-[14px] font-[500]"
            onClick={forgotPassword} >Forget Password</a>
            <div className="flex items-center w-full mt-3  mb-3">
              <Button className="btn-org  !hover-!bg-black w-full">Login</Button>
              </div>
              <p className="font-[200] text-center">Not Registered? <Link className="link text-[14px] font-[600] text-[#ff5252]  " to="/register">Sign Up</Link></p>

              <p className="text-center">or Continue with social Account</p>

              <Button className="flex gap-3 w-full !bg-[#f1f1f1]  !text-black"><FcGoogle className="text-[20px]"/>Login with google</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
