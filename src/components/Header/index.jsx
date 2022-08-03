import React from "react";
import {MdOutlineArticle} from "react-icons/md";
const btnStyle = "h-full text-white min-w-[5rem] px-4 font-semibold text-sm  rounded-sm hover:transition-all duration-800 ease-in-out ";
const redBtn = " bg-[#3e3f42]  hover:bg-[#535456]";
export default function Header() {
    return (
        <header className="flex w-full h-14 z-1 justify-between items-center absolute top-0 left-0 right-0 bg-[#292A2D] px-4 py-2.5">
            <div className="flex h-full  gap-2">
                <button className={btnStyle + redBtn}>
                    test
                </button>
                <button className={btnStyle + redBtn}>
                    long ass transition
                </button>
            </div >
            <div className="flex h-full">
                <button onClick={()=>electron.ipcRenderer.send('show-pdf','result3.pdf')} className={btnStyle + " bg-blue-600  hover:bg-blue-700 flex gap-1 items-center justify-center"}>
                    articles
                    <MdOutlineArticle className="relative top-0.5 text-[18px]"/>
                </button>
            </div>
        </header>
    )
}