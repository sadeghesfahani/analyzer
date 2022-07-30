import React from "react";

function MaterialTable({children}) {
  return (
    <table>
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
