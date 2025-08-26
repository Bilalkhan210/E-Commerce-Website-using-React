import Button from '@mui/material/Button';
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <>
      <div className="searchBox w-full h-[45px] sm:h-[50px] bg-[#e5e5e5] rounded-[10px] relative p-1 flex items-center">
        
        {/* Input Field */}
        <input
          type="text"
          placeholder="Search for Product..."
          className="w-full h-[35px] sm:h-[40px] focus:outline-none p-2 text-[14px] sm:text-[16px] rounded-l-[8px]"
        />

        {/* Button */}
        <Button
          className="!w-[35px] !min-w-[35px] sm:!w-[38px] sm:!min-w-[38px] h-[35px] sm:h-[38px] !rounded-full !ml-1 !text-black bg-white"
        >
          <FaSearch className="text-[#000] text-[16px] sm:text-[20px]" />
        </Button>
      </div>
    </>
  );
};

export default Search;
