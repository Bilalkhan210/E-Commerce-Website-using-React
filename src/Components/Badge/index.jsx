import React from "react";

const Badge = (props) => {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full 
        text-xs sm:text-sm md:text-base   /* font size responsive */
        px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2  /* padding responsive */
        mx-1 sm:mx-2 md:mx-3  /* margin responsive */
        ${
          props.status === "pending" && "bg-[#ff5252] text-white"
        } ${
          props.status === "confirm" && "bg-[#58e239] text-white"
        } ${
          props.status === "delivered" && "bg-[#0f3d04] text-white"
        }`}
    >
      {props.status}
    </span>
  );
};

export default Badge;
