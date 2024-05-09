import React from "react";

function Logo({ width = "100px" , className}) {
  return <div className={`text-center font-bold font-sans text-purple-800 dark:text-[#EFD9CE] text-3xl ${className}`}>Blog App</div>;
}
export default Logo;
