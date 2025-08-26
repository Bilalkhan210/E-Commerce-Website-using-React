import { LiaShippingFastSolid } from "react-icons/lia";
import { GiClockwiseRotation } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";
import { FiGift } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdChatBubbleOutline } from "react-icons/md";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FaFacebook, FaYoutube, FaPinterestP, FaInstagram } from "react-icons/fa";
import Drawer from "@mui/material/Drawer";
import CartPanel from "../cartPanel";
import { IoMdClose } from "react-icons/io";
import { myContext } from "../../App";
import React, { useContext } from "react";

const Footer = () => {
  const context = useContext(myContext);

  return (
    <>
      <footer className="py-6 bg-white border-1 border-gray-200">
        <div className="container">
          {/* Top Features Row */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 pb-8">
            <div className="flex items-center justify-center flex-col group w-[45%] sm:w-[30%] md:w-[18%]">
              <LiaShippingFastSolid className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
              <h3 className="text-[16px] md:text-[18px] font-[600] mt-3">Free Shipping</h3>
              <p className="text-[13px] font-[400] text-center">For all Orders Over $100</p>
            </div>
            <div className="flex items-center justify-center flex-col group w-[45%] sm:w-[30%] md:w-[18%]">
              <GiClockwiseRotation className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
              <h3 className="text-[16px] md:text-[18px] font-[600] mt-3">30 Days Returns</h3>
              <p className="text-[13px] font-[400] text-center">For an Exchange Product</p>
            </div>
            <div className="flex items-center justify-center flex-col group w-[45%] sm:w-[30%] md:w-[18%]">
              <MdOutlinePayment className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
              <h3 className="text-[16px] md:text-[18px] font-[600] mt-3">Secured Payment</h3>
              <p className="text-[13px] font-[400] text-center">Payment Cards Accepted</p>
            </div>
            <div className="flex items-center justify-center flex-col group w-[45%] sm:w-[30%] md:w-[18%]">
              <FiGift className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
              <h3 className="text-[16px] md:text-[18px] font-[600] mt-3">Special Gifts</h3>
              <p className="text-[13px] font-[400] text-center">Our First Product Order</p>
            </div>
            <div className="flex items-center justify-center flex-col group w-[45%] sm:w-[30%] md:w-[18%]">
              <BiSupport className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
              <h3 className="text-[16px] md:text-[18px] font-[600] mt-3">Support 24/7</h3>
              <p className="text-[13px] font-[400] text-center">Contact us Anytime</p>
            </div>
          </div>

          <hr />

          {/* Main Footer Content */}
          <div className="footer flex flex-col md:flex-row py-8 gap-8 md:gap-0">
            {/* Contact Section */}
            <div className="part1 md:w-[30%] border-b md:border-b-0 md:border-r border-[rgba(0,0,0,0.1)] pb-6 md:pb-0 pr-0 md:pr-6">
              <h2 className="text-[18px] md:text-[20px] font-[600] mb-4">Contact us</h2>
              <p className="text-[14px] font-[400] pb-4">
                Classyshop - Mega Super Store <br />
                507-Union Trade Centre France
              </p>
              <Link to="/" className="link text-[14px]">bilalkhan2107007@gmail.com</Link>
              <span className="text-[18px] md:text-[20px] font-[600] block w-full mt-3 text-[#ff5252] mb-5">
                +923164881288
              </span>
              <div className="flex items-center gap-2">
                <MdChatBubbleOutline className="text-[28px] md:text-[32px] font-[600] text-[#ff5252]" />
                <span className="text-[16px] md:text-[18px] font-[600]">
                  Online Chat <br /> Get Expert Help
                </span>
              </div>
            </div>

            {/* Links Section */}
            <div className="part2 md:w-[40%] flex flex-col sm:flex-row pl-0 md:pl-8 gap-8 md:gap-0">
              <div className="part2-col1 sm:w-[50%]">
                <h2 className="text-[18px] md:text-[20px] font-[600] mb-4">Products</h2>
                <ul>
                  {["Prices drop", "New products", "Best sales", "Contact us", "Sitemap", "Stores"].map((item, i) => (
                    <li key={i} className="text-[14px] mb-2">
                      <Link className="link">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="part2-col2 sm:w-[50%]">
                <h2 className="text-[18px] md:text-[20px] font-[600] mb-4">Our company</h2>
                <ul>
                  {["Delivery", "Legal Notice", "Terms and conditions of use", "About us", "Secure payment", "Login"].map((item, i) => (
                    <li key={i} className="text-[14px] mb-2">
                      <Link className="link">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="part3 md:w-[35%] flex flex-col pl-0 md:pl-8 pr-0 md:pr-8">
              <h2 className="text-[18px] md:text-[20px] font-[600] mb-4">Subscribe to newsletter</h2>
              <p className="text-[13px]">Subscribe to our latest newsletter to get news about special discounts.</p>
              <form className="mt-5 flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] outline-none px-4 rounded-sm focus:border-[rgba(0,0,0,0.7)]"
                />
                <Button className="btn-org !bg-[#ff5252] !text-white text-[14px] md:text-[16px] font-[600] py-2 px-6">
                  SUBSCRIBE
                </Button>
                <FormControlLabel
                  control={<Checkbox />}
                  label="I agree to the terms and conditions and the privacy policy"
                />
              </form>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Strip */}
      <div className="bottomstrip border-t border-[rgba(0,0,0,0.4)] py-3 bg-white">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <ul className="flex items-center gap-2">
            {[FaFacebook, FaYoutube, FaPinterestP, FaInstagram].map((Icon, i) => (
              <li key={i}>
                <Link
                  to="/"
                  target="_blank"
                  className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252]"
                >
                  <Icon className="text-[15px] group-hover:text-white" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-[13px] md:text-[14px] text-center">© 2025 - Ecommerce software by PrestaShop™</p>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {[
              "carte_bleue.png",
              "visa.png",
              "master_card.png",
              "american_express.png",
              "paypal.png",
            ].map((img, i) => (
              <img
                key={i}
                src={`https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_blockpaymentlogo/views/img/${img}`}
                alt=""
                className="h-[25px] object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Drawer Cart */}
      <Drawer
        open={context.openCartPanel}
        onClose={context.toggleCartPanel(false)}
        anchor={"right"}
        className="cartpanel"
      >
        <div className="flex items-center justify-between py-3 px-4 gap-3 border-b border-[rgba(0,0,0,0.1)]">
          <h4>Shopping Cart </h4>
          <IoMdClose
            className="text-[20px] cursor-pointer"
            onClick={context.toggleCartPanel(false)}
          />
        </div>
        <CartPanel />
      </Drawer>
    </>
  );
};

export default Footer;
