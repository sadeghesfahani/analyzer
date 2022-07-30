import React from 'react'

function SectionTr({edi_std="", ht="", b="", tf="", tw="", i33=""}) {
  return (
    <tr className='section-tr'>
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