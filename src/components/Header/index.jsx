import React from "react";
import {MdOutlineArticle} from "react-icons/md";
import Dropdown from "./Dropdown/Dropdown";
import HeaderButton from "./HeaderButton/HeaderButton";
const dropdowned = "w-48 bg-primary-600 cursor-pointer text-white text-sm font-semibold py-2 px-4 hover:bg-primary-400";
export default function Header() {
    return (
        <header
            className="flex w-full h-14 z-1 justify-between items-center absolute top-0 left-0 right-0 bg-primary-500 px-4 py-2.5">
            <div className="flex h-full  gap-2">
                <HeaderButton title="Home" className=" bg-primary-400  hover:bg-primary-300" onClick={() => {
                }}/>
                <HeaderButton title="About" className=" bg-primary-400  hover:bg-primary-300" onClick={() => {
                }}/>
                <Dropdown>
                    <a className={dropdowned}>test</a>
                    <a className={dropdowned}>test</a>
                </Dropdown>
            </div>
            <div className="flex h-full">
                <HeaderButton title={
                    <div className="flex flex-row items-center gap-1">
                        <p >Article</p>
                        <MdOutlineArticle className="text-white text-l relative top-0.5 "/>
                    </div>
                } className={` bg-blue-600  hover:bg-blue-700 flex gap-1 items-center justify-center`} onClick={() => {
                }}/>
            </div>
        </header>
    )
}