import React from "react";

function MaterialTable({children}) {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>Material_Name</th>
          <th>Modules of Elasticity E</th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  );
}

export default MaterialTable;
