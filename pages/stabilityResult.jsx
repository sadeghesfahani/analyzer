import React, { useEffect } from 'react'
import Result from "../src/components/Result"

function StabilityResult() {
  useEffect(()=>{
    if(window)
    electron.ipcRenderer.invoke('get-result').then(res=>{
      console.log(res)
      }).catch(err=>console.log(err))
  },[])
  return (
    <div className='bg-white h-full'>
      <Result/>
    </div>
  )
}

export default StabilityResult