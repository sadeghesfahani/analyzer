import React from "react";

const btnStyle = "h-full text-white min-w-[5rem] px-4 font-semibold text-sm  bg-red-900 rounded-sm hover:bg-red-700 hover:transition-all duration-200 ease-in-out";

export default function Header() {
    return (
        <header className="flex w-full h-14 z-1 justify-between items-center absolute top-0 left-0 right-0 bg-red-800 px-4">
            <div className="flex h-full py-2 gap-2">
                <button className={btnStyle}>
                    test
                </button>
                <button className={btnStyle}>
                    long ass transition
                </button>
            </div >
            <div className="flex h-full"></div>
        </header>
    )
}