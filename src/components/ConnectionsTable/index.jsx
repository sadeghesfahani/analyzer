import React from "react";

const Td = ({value}) => (
  <>
    <td>
      <input type="checkbox" />
    </td>
    <td>
      {value}
    </td>
  </>
);

function ConnectionsTable() {
  return (
    <table className="connections-table">
      <thead>
        <tr>
          <th>U1</th>
          <th>U1_V</th>
          <th>U2</th>
          <th>U2_V</th>
          <th>U3</th>
          <th>U3_V</th>
          <th>U1</th>
          <th>U1_V</th>
          <th>U2</th>
          <th>U2_V</th>
          <th>U3</th>
          <th>U3_V</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Td value={22} />
          <Td value={10} />
          <Td value={33} />
          <Td value={33} />
          <Td value={33} />
          <Td value={33} />
        </tr>
      </tbody>
    </table>
  );
}

export default ConnectionsTable;
