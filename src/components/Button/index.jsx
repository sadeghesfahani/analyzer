import React from "react";

function Button({title, className, onClick}) {
  return (
    <button className={`bg-[#f2f2f2] p-1 px-3 relative ${className}`} onClick={onClick}>
      <div className="bg-blue-300 w-full h-full opacity-25 blur absolute"></div>
      <span>{title}</span>
    </button>
  );
}

export default Button;
