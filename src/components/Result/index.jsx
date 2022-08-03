import React from 'react'
import Image from 'next/image'

const Line = () => ("-------------------------------------------------------")

function Result() {
  return (
    <div className='flex h-full'>
        <div className='flex-1 h-full'>
            <img src="result2.png" alt="" className='h-full'/>
        </div>
        <div className='flex-1 border h-full text-xs overflow-y-auto px-1'>
            <Line/>
            <p>Project_Name : untitled</p>
            <Line/>
            <p>Gpi =(Material_Ecolumn*Section_I33column/Lcolumn) / (Material_Efloor beam*Section_I33 floor beam/Lfloorbeam)</p>
            <p>Gpi=(200000000000.00*1.23/3.00) / (199947.98*35.70/6.00) = 68925.49</p>
            <Line/>
            <p>Gpe=(Material_ Ecolumn*Section_I33column/Lcolumn) / (Material_ Eceiling beam*Section_I33 ceiling beam/Lceilingbeam)</p>
            <p>Gpe=(200000000000.00*1.23/3.00) / (199947.98*6.59/6.00) = 373390.00</p>
            <Line/>
            <p>Lcolumn : 3</p>
            <p>Lfloor_beam : 6</p>
            <p>Lceiling_beam : 6</p>
            <Line/>
            <p>Section - Columns  - i33 : 1.23</p>
            <p>Section - Floor    - i33 : 35.7</p>
            <p>Section - Ceiling  - i33 : 6.59</p>
            <p>Material - Columns - Me  : 200000000000</p>
            <p>Material - Floor   - Me  : 199947.98</p>
            <p>Material - Ceiling - Me  : 199947.98</p>
            <Line/>
            <p>inter - U1 : True:22</p>
            <p>inter - U2 : True:10</p>
            <p>inter - U3 : True:33</p>
            <p>inter - R1 : True:1000000</p>
            <p>inter - R2 : True:1500000</p>
            <p>inter - R2 : True:2000000</p>
            <Line/>
            <p>intra - U1 : False:100</p>
            <p>intra - U2 : False:1.234</p>
            <p>intra - U3 : False:120</p>
            <p>intra - R1 : True:3000000</p>
            <p>intra - R2 : True:3500000</p>
            <p>intra - R2 : True:4000000</p>
            <Line/>
            <p>Analyze: Design_For_Ultimate_Limit_State  : True</p>
            <p>Analyze: Design_For_Service_Ability  : False</p>
            <p>Analyze: Seismic_Performance_Factors  : False</p>
            <Line/>
            <p>Structure__Height_of_storey  : 3</p>
            <p>Structure__Length_of_span  : 6</p>
            <Line/>
            <p>Seismic_resisting_frames_type__Braced  : -1</p>
            <p>Seismic_resisting_frames_type__Moment  : 0</p>
            <Line/>
        </div>
        <div className='flex-1 h-full'>
            <img src="result-1.png" alt="" className='h-full'/>
        </div>
    </div>
  )
}

export default Result