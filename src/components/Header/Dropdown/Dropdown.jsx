import * as React from 'react';
import HeaderButton from "../HeaderButton/HeaderButton";

export default function Dropdown(props) {
    return (
        <div className="dropdown">
            <HeaderButton href="javascript:void(0)" title={props.title} className=" bg-primary-400  hover:bg-primary-300 dropbtn">Dropdown</HeaderButton>
            <div className="dropdown-content">
                {
                    props.children
                }

            </div>
        </div>
    )
}