import React from "react";

const Button = ({ text }) => {
  return (
    <button className="group/button relative inline-flex items-center justify-center overflow-hidden  rounded-md text-white cursor-pointer bg-gradient-to-r from-[#00134F] to-[#2DA3B4]  backdrop-blur-lg px-5 py-2 border-none text-base font-semibold  transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:bg-[#51DBEF]/50 border border-white/20">
      <span className="text-md">{text}</span>
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
        <div className="relative h-full w-10 bg-white/20"></div>
      </div>
    </button>
  );
};

export default Button;
