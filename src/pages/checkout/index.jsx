import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { BsBagCheckFill } from "react-icons/bs";


const Checkout = () => {
  return (
    <section className="py-10">
      <div className="container flex gap-5">
        <div className="leftcol w-[70%]">
          <div className="cart bg-white shadow-md p-5 rounded-md w-full">
            <h1>Billing Details</h1>

            <form action="" className="w-full mt-5">
              <div className="flex items-center gap-5 mb-5">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="FullName"
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    type="email"
                    className="w-full"
                    label="Email"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <h5 className="text-[14px] font-[500] mb-4">street Address</h5>
              <div className="flex items-center gap-5 mb-5">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    label="House Number and Street Name"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
              <div className="flex items-center gap-5 mb-5">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    label="Apartment, suite, unit. etc ,(optional)"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
              <h5 className="text-[14px] font-[500] mb-4">Town / City</h5>
              <div className="flex items-center gap-5 mb-5">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    label="Town / City"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
              <h5 className="text-[14px] font-[500] mb-4">State / Cuntery</h5>
              <div className="flex items-center gap-5 mb-5">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    label="State /  cuntery"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
              <h5 className="text-[14px] font-[500] mb-4">Postcode / Zip</h5>
              <div className="flex items-center gap-5 mb-5">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    label="Postcode / Zip"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
              <div className="flex items-center gap-5 mb-5">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="Phone Number"
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="Email Address"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="rightcol w-[30%]">
          <div className="cart shadow-md p-5 bg-white">
            <h2 className="mb-3">Your Order</h2>
            <div className="flex items-center justify-between py-3 border-t border-[rgba(0,0,0,0.1)] border-b border-[rgba(0,0,0,0.1)]">
              <span className="text-[14px] font-[600]">Product</span>
              <span className="text-[14px] font-[600]">Subtotal</span>
            </div>

            <div className="scroll max-h-[250px] overflow-y-scroll overflow-x-hidden pr-3">
            <div className="flex items-center justify-between py-2">
              <div className="part1 flex items-center gap-3">
                <div className="img w-[50px] h-[50] object-cover overflow-hidden rounded-md group cursor-pointer">
                  <img
                  src="https://api.spicezgold.com/download/file_1734526483285_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-1-202304220521.webp"
                    alt=""
                    className="w-full transition-all group-hover:scale-105"
                  />
                </div>
                <div className="info">
                    <h1 className="text-[14px]"> Siril Poly Silk White...  </h1>
                    <span className="text-[13px]"> Qty : 1</span>
                </div>
              </div>

              <span className="text-[14px] font-[600]">$ 1300.00</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="part1 flex items-center gap-3">
                <div className="img w-[50px] h-[50] object-cover overflow-hidden rounded-md group cursor-pointer">
                  <img
                  src="https://api.spicezgold.com/download/file_1734526483285_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-1-202304220521.webp"
                    alt=""
                    className="w-full transition-all group-hover:scale-105"
                  />
                </div>
                <div className="info">
                    <h1 className="text-[14px]"> Siril Poly Silk White...  </h1>
                    <span className="text-[13px]"> Qty : 1</span>
                </div>
              </div>

              <span className="text-[14px] font-[600]">$ 1300.00</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="part1 flex items-center gap-3">
                <div className="img w-[50px] h-[50] object-cover overflow-hidden rounded-md group cursor-pointer">
                  <img
                  src="https://api.spicezgold.com/download/file_1734526483285_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-1-202304220521.webp"
                    alt=""
                    className="w-full transition-all group-hover:scale-105"
                  />
                </div>
                <div className="info">
                    <h1 className="text-[14px]"> Siril Poly Silk White...  </h1>
                    <span className="text-[13px]"> Qty : 1</span>
                </div>
              </div>

              <span className="text-[14px] font-[600]">$ 1300.00</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="part1 flex items-center gap-3">
                <div className="img w-[50px] h-[50] object-cover overflow-hidden rounded-md group cursor-pointer">
                  <img
                  src="https://api.spicezgold.com/download/file_1734526483285_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-1-202304220521.webp"
                    alt=""
                    className="w-full transition-all group-hover:scale-105"
                  />
                </div>
                <div className="info">
                    <h1 className="text-[14px]"> Siril Poly Silk White...  </h1>
                    <span className="text-[13px]"> Qty : 1</span>
                </div>
              </div>

              <span className="text-[14px] font-[600]">$ 1300.00</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="part1 flex items-center gap-3">
                <div className="img w-[50px] h-[50] object-cover overflow-hidden rounded-md group cursor-pointer">
                  <img
                  src="https://api.spicezgold.com/download/file_1734526483285_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-1-202304220521.webp"
                    alt=""
                    className="w-full transition-all group-hover:scale-105"
                  />
                </div>
                <div className="info">
                    <h1 className="text-[14px]"> Siril Poly Silk White...  </h1>
                    <span className="text-[13px]"> Qty : 1</span>
                </div>
              </div>

              <span className="text-[14px] font-[600]">$ 1300.00</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="part1 flex items-center gap-3">
                <div className="img w-[50px] h-[50] object-cover overflow-hidden rounded-md group cursor-pointer">
                  <img
                  src="https://api.spicezgold.com/download/file_1734526483285_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-1-202304220521.webp"
                    alt=""
                    className="w-full transition-all group-hover:scale-105"
                  />
                </div>
                <div className="info">
                    <h1 className="text-[14px]"> Siril Poly Silk White...  </h1>
                    <span className="text-[13px]"> Qty : 1</span>
                </div>
              </div>

              <span className="text-[14px] font-[600]">$ 1300.00</span>
            </div>
            </div>
            <Button className="btn-org w-full gap-3"><BsBagCheckFill className="text-[20px]"/>Checkout</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
