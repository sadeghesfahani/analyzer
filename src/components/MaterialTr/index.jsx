import React, { useEffect } from "react";

function MaterialTr({ name, e, id, selectedMaterial, setSelectedMaterial }) {
  return (
    <tr
      onClick={() => {
        if(selectedMaterial === id){
          setSelectedMaterial("")
        }else{
          setSelectedMaterial(id);
        }
      }}
      className={`cursor-pointer ${
        selectedMaterial === id ? "bg-blue-500 " : ""
      }`}
    >
      <td>{name}</td>
      <td>{e}</td>
    </tr>
  );
}

export default MaterialTr;
