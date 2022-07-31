import React, { useEffect } from "react";

function MaterialTr({ name, e, id, selectedMaterial, setSelectedMaterial }) {
  const [nameValue, setName] = React.useState("");
  const [EValue, setE] = React.useState("");
  useEffect(() => {
    setName(name);
    setE(e);
  }, []);
  return (
    <tr
      onClick={() => setSelectedMaterial(id)}
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
