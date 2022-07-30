import React from "react";

function ConnectionsCheckBox({title}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1">
        <input type="checkbox" className="p-4" id={`id-${title}`}/>
        <label htmlFor={`id-${title}`}>{title}</label>
      </div>
      <input type="text" className="border border-black w-1/2" />
    </div>
  );
}

export default ConnectionsCheckBox;
