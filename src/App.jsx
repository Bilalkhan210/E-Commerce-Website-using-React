import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import "./App.css";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./Components/Footer";
import { createContext } from "react";
import ProductZoom from "./Components/ProductZoom";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";

import { IoMdClose } from "react-icons/io";

import ProductDetail from "./Components/ProductDetail";
import Login from "./pages/Login";
import Register from "./pages/register";
import CartPage from "./pages/cart";
import Verify from "./pages/verify";
import toast, { Toaster } from 'react-hot-toast';
import ForgotPassword from "./pages/forgotpassword";
import Checkout from "./pages/checkout";
import MyAccount from "./pages/MyAccount";
import MyList from "./pages/Mylist";
import Orders from "./pages/orders/orders";

const myContext = createContext();
function App() {
  const [openProductDetailsModel, setOpenProductDetailsModel] = useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);

  const [maxWidth, setMaxWidth] = useState("lg");
  const [openCartPanel, setOpenCartPanel] = React.useState(false);
  const [isLogin,setIsLogin] =  useState(true)

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const openAlertBox = (value,msg)=>{
    if(value==='success'){
      toast.success(msg)
    }if(value==='error'){
      toast.error(msg)
    }

  }

  const handleCloseProductDetailsModel = () => {
    setOpenProductDetailsModel(false);
  };

  const values = {
    setOpenProductDetailsModel,
    setOpenCartPanel,
    toggleCartPanel,
    openCartPanel,
    openAlertBox,
    isLogin,
  setIsLogin
  };
  return (
    <>
      <BrowserRouter>
        <myContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route
              path="/ProductListing"
              exact={true}
              element={<ProductListing />}
            />
            <Route
              path="/ProductDetails/:id"
              exact={true}
              element={<ProductDetails />}
            />
            <Route path="/login" exact={true} element={<Login />} />
            <Route path="/register" exact={true} element={<Register />} />
            <Route path="/cart" exact={true} element={<CartPage />} />
<Route path="/verify" element={<Verify />} />
<Route path="/forgot-password" element={<ForgotPassword />} />
<Route path="/checkout" element={<Checkout />} />
<Route path="/myaccount" element={<MyAccount />} />
<Route path="/mylist" element={<MyList />} />
<Route path="/myorder" element={<Orders />} />
          </Routes>
          <Footer />
        </myContext.Provider>
      </BrowserRouter>

       <Toaster />
      <Dialog
        open={openProductDetailsModel}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleCloseProductDetailsModel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="ProductDetailsModel"
      >
        <DialogContent>
          <div className="flex items-center w-full ProductDetailsModel relative gap-5">
            <Button
              className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] !absolute top-[15px] right-[15px]"
              onClick={handleCloseProductDetailsModel}
            >
              <IoMdClose />
            </Button>
            <div className="col1 w-[40%]">
              <ProductZoom />
            </div>
            <div className="col2 w-[60%]">
              <ProductDetail />
            </div>
          </div>
        </DialogContent>
      </Dialog>

    </>
  );
}

export default App;
export { myContext };
