import React from 'react'

function SectionsPropertiesTr({material_name="", e="", edi_std="", ht="", tf="", tw="", i33=""}) {
  return (
    <tr>
      <td>{material_name}</td>
      <td>{e}</td>
      <td>{edi_std}</td>
      <td>{ht}</td>
      <td>{tf}</td>
      <td>{tw}</td>
      <td>{i33}</td>
    </tr>
  );
}

export default SectionsPropertiesTr