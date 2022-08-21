import React, { useEffect } from 'react'
import { useState } from 'react';

const Res = () => (
  <div className='flex justify-between h-full'>
        <div className='text-4xl p-12'>
            <h1 className='italic'>R = 5 - 4</h1>
            <h1 className='italic flex'>C<h6 className='text-[24px] mt-3'>d</h6> = 6 - 7</h1>
            <h1 className='italic'>Omega = 2 - 3</h1>
        </div>
        <img src="result3.png" className='h-full' alt="" />
    </div>
)

function SeismicPerformanceFactors() {
  const [frame, setFrame] = useState("")
  useEffect(() => {
    if (window) {
      electron.ipcRenderer
        .invoke("get-file-data")
        .then((res) => {
          setFrame(res.seismicResistingFramesType);
        })
        .catch((e) => console.log(e));
    }
  }, []);
  return (
    <>
    {frame === "Braced frame" ? <Res/> : 
      <div className='h-full flex justify-center items-center'>
        <p>
      You have selected &quot;Moment frame&quot;, please check this window in the future
      </p>
      </div>
    }
    </>
  )
}

export default SeismicPerformanceFactors