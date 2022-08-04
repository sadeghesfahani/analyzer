import React from 'react'

function SectionTr({edi_std="", ht="", b="", tf="", tw="", i33="", selectedProperty, setSelectedProperty}) {
  return (
    <tr onClick={()=>setSelectedProperty(edi_std)} className={`section-tr cursor-pointer ${edi_std === selectedProperty ? "bg-blue-500" : ""}`}>
        <td>{edi_std}</td>
        <td>{ht}</td>
        <td>{b}</td>
        <td>{tf}</td>
        <td>{tw}</td>
        <td>{i33}</td>
    </tr>
  )
}

export default SectionTr