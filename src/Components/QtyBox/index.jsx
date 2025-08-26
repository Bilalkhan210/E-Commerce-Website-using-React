import React, { useState } from "react";
import Button from "@mui/material/Button";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const QtyBox = () => {
  const [qtyvalu, setqtyvalu] = useState(1);

  const plusqrt = () => {
    setqtyvalu(qtyvalu + 1);
  };

  const minusqty = () => {
    if (qtyvalu === 1) {
      setqtyvalu(1);
    } else {
      setqtyvalu(qtyvalu - 1);
    }
  };

  return (
    <>
      <div className="qtybox flex items-center justify-between h-[40px] sm:h-[45px] md:h-[50px] relative w-[120px] sm:w-[150px] md:w-[180px]">
        {/* input field */}
        <input
          type="number"
          className="w-full pl-3 sm:pl-4 md:pl-5 h-[40px] sm:h-[45px] md:h-[50px] p-2 text-[14px] sm:text-[15px] md:text-[16px] focus:outline-none border border-[#a4a4a4] rounded-md"
          value={qtyvalu}
          readOnly
        />

        {/* plus/minus buttons */}
        <div className="flex items-center flex-col absolute top-0 right-0 z-50">
          <Button
            className="!min-w-[20px] h-[20px] sm:h-[22px] md:h-[24px] !text-black"
            onClick={plusqrt}
          >
            <FaAngleUp className="text-[10px] sm:text-[12px] opacity-70 hover:opacity-100" />
          </Button>
          <Button
            className="!min-w-[20px] h-[20px] sm:h-[22px] md:h-[24px] !text-black"
            onClick={minusqty}
          >
            <FaAngleDown className="text-[10px] sm:text-[12px] opacity-70 hover:opacity-100" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default QtyBox;
