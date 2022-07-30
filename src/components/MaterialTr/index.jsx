import React, { useEffect } from "react";

function MaterialTr({ name, e }) {
  const [nameValue, setName] = React.useState("");
  const [EValue, setE] = React.useState("");
  useEffect(() => {
    setName(name);
    setE(e);
  }, []);
  return (
    <tr>
      <td>
        <input value={nameValue} onChange={(e) => setName(e.target.value)} />
      </td>
      <td>
        <input value={EValue} onChange={(e) => setE(e.target.value)} />
      </td>
    </tr>
  );
}

export default MaterialTr;
