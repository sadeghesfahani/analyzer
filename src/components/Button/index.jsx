import React from "react";

function Button({title, className, onClick}) {
  return (
    <button className={`${title === "Cancel" ? " bg-red-500 hover:bg-red-600 " : " bg-blue-700 hover:bg-blue-800 "} py-2 px-3 relative text-sm rounded font-semibold text-white ${className}`} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
