import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

function ConnectionsCheckBox({name, check, value, onChange}) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1">
        <input type="checkbox" className="p-4" id={`id-${name}`} checked={check} onChange={(e)=>dispatch(onChange({name,check:e.target.checked}))}/>
        <label htmlFor={`id-${name}`}>{name}</label>
      </div>
      <input type="text" className="border border-black w-1/2" value={value}  onChange={(e)=>dispatch(onChange({name,value:e.target.value}))} />
    </div>
  );
}

export default ConnectionsCheckBox;
