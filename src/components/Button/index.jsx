import React from "react";

function Button({title, className, onClick}) {
  return (
    <button className={`bg-blue-600 py-2 px-3 relative text-sm rounded font-semibold text-white hover:bg-blue-700 ${className}`} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
