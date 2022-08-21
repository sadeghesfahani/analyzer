import React, { useEffect } from 'react'
import { useState } from 'react';


const Res = () => (
   <div className='flex items-center justify-between h-full bg-white'>
            <div className='flex text-3xl font-bold flex-col items-center gap-1 w-48 relative bottom-24 left-16 '>
                <div className="flex  flex-row justify-between w-full ">
                    <h1 className="w-1/4">R</h1>
                    <h1 className="w-1/4">=</h1>
                    <h1 className="w-2/4">5 - 4</h1>
                </div>
                <div className="flex flex-row justify-between w-full ">
                    <h1 className="w-1/4">C<sub>d</sub></h1>
                    <h1 className="w-1/4">=</h1>
                    <h1 className="w-2/4">6 - 7</h1>
                </div>
                <div className="flex flex-row justify-between w-full ">
                    <h1 className="w-1/4">Ω</h1>
                    <h1 className="w-1/4">=</h1>
                    <h1 className="w-2/4">2 - 3</h1>
                </div>
            </div>
            <img src="AutoCad.png" className='h-full ' alt=""/>
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