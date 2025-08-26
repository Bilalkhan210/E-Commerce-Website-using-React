import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const BlogItem = () => {
  return (
    <>
      <div className="blogItem group max-w-[400px] mx-auto sm:max-w-full">
        {/* Image Wrapper */}
        <div className="imgwarpper overflow-hidden rounded-md cursor-pointer relative">
          <img
            src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/psblog/b/lg-b-blog-7.jpg"
            alt=""
            className="w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover transition-all group-hover:scale-105 group-hover:rotate-1"
          />
          <span
            className="flex items-center justify-center text-white absolute bottom-[10px] right-[10px] 
            z-50 bg-[#ff5252] rounded-md px-2 py-1 text-[11px] sm:text-[12px] font-[600] gap-2"
          >
            <IoMdTime className="text-[14px] sm:text-[16px]" /> 17 July 2025
          </span>
        </div>

        {/* Info Section */}
        <div className="info py-3 sm:py-4">
          <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-[600] text-black leading-snug">
            <Link to="/" className="link hover:text-[#ff5252] transition">
              Nullam ullamcorper ornare molestie
            </Link>
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] font-[400] text-gray-700 my-3">
            Lorem ipsum dolor sit amet, Enim error nostrum soluta, iure corporis
            earum tenetur....
          </p>
          <Link
            to="/"
            className="link font-[500] text-[13px] sm:text-[14px] flex items-center gap-1 text-[#ff5252] hover:gap-2 transition-all"
          >
            Read More <MdKeyboardArrowRight />
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
