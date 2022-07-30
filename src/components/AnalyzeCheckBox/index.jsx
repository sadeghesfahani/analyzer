import React from 'react'

function AnalyzeCheckBox({title}) {
  return (
    <div className='flex items-center gap-2'>
        <input type='checkbox' id={`id-${title}`}/>
        <label htmlFor={`id-${title}`}>{title}</label>
    </div>
  )
}

export default AnalyzeCheckBox