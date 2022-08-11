import React, { useState } from "react";

import { useDispatch } from "react-redux";

function ConnectionsCheckBox({name, value, onChange}) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 justify-between">
      <div className="flex items-center gap-1">
        <label htmlFor={`id-${name}`}>{name}</label>
        <input type="text" className="border border-black w-full" id={`id-${name}`} value={value}  onChange={(e)=>dispatch(onChange({name,value:e.target.value}))} />
      </div>
      <span className="text-[12px]">{name[0] === "R" ? "N*mm/rad" : "N/mm"}</span>
    </div>
  );
}

export default ConnectionsCheckBox;
