import React from 'react'

function SeismicPerformanceFactors() {
    return (
        <div className='flex items-center justify-between h-full'>
            <div className='flex text-3xl font-bold flex-col items-center gap-1 w-48 relative bottom-28 left-28 '>
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
            <img src="result3.png" className='h-full' alt=""/>
        </div>
    )
}

export default SeismicPerformanceFactors