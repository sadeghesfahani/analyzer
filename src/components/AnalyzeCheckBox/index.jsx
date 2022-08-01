import React from 'react'

import { useDispatch } from "react-redux"
import { toggleAnalyze} from "../../../redux/slices/analyze"

function AnalyzeCheckBox({name, checked}) {
  const dispatch = useDispatch()
  return (
    <div className='flex items-center gap-2'>
        <input type='checkbox' id={`id-${name}`} checked={checked} onChange={(e)=>dispatch(toggleAnalyze({name, check:e.target.checked}))}/>
        <label htmlFor={`id-${name}`}>{name}</label>
    </div>
  )
}

export default AnalyzeCheckBox