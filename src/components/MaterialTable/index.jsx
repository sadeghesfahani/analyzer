import React from "react";

function MaterialTable({children}) {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>Material_Name</th>
          <th>Modula of Elasticty E</th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  );
}

export default MaterialTable;
