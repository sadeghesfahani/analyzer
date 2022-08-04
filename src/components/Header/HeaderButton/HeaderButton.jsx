import React from "react";

export default function HeaderButton({ title, className, onClick }) {
    return (
        <button className={`h-full  text-white min-w-[5rem] px-4 font-semibold text-sm rounded-sm hover:transition-all duration-800 ease-in-out ${className}`} onClick={onClick}>
        {title}
        </button>
    );
}