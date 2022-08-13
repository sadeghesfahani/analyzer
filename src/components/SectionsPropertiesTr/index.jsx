import React from 'react'

function SectionsPropertiesTr({material_name="", e="", edi_std="",b="", ht="", tf="", tw="", i33="",i22=""}) {
  return (
    <tr>
      <td>{material_name}</td>
      <td>{e}</td>
      <td>{edi_std}</td>
      <td>{b}</td>
      <td>{ht}</td>
      <td>{tf}</td>
      <td>{tw}</td>
      <td>{i33}</td>
      <td>{i22}</td>
    </tr>
  );
}

export default SectionsPropertiesTr