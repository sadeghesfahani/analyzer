import React, { useEffect, useState } from 'react'
import Result from "../src/components/Result"
import Loading from "../src/components/Loading/Loading";

function DesginForServiceability() {
  const [gpi, setGpi] = React.useState(0)
  const [gpe, setGpe] = React.useState(0)
  const [rho, setRho] = React.useState(0)
  const [report, setReport] = React.useState('')
  const [showRes, setShowRes] = React.useState(false)
  const [fileData, setFileData] = React.useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    if(window){
      electron.ipcRenderer.invoke('get-file-data').then(res=>{
        setFileData(res)
        const sections = res.sections
        const structuresProperty = res.structuresProperty
        const connections = res.connections
        const analyze = res.analyze
        if(sections.column.properties?.I33[0] && sections.floorBeams.properties?.I33[0] && sections.ceiligBeams.properties?.I33[0]
          && sections.column.materials.e && sections.floorBeams.materials.e && sections.ceiligBeams.materials.e && structuresProperty.lengthOfSpan && structuresProperty.heightOfStorey
          && connections.interModularConnection[5].value && connections.intraModularConnection[5].value && (analyze[0].check || analyze[1].check)){
            setShowRes(true)
            const ranNum = Math.floor(Math.random()*2001)+3000
            setTimeout(()=>{
                setLoading(false)
            },ranNum)
        }
          
      }).catch(err=>console.log(err))
      
    }
    electron.ipcRenderer.invoke('get-result').then(res=>{
      setGpi(res[2])
      setGpe(res[3])
      setRho(res[4])
      setReport(res[1])
      }).catch(err=>console.log(err))
      
  },[])

  const Res = () => (
    <Result left={((((gpe>1?1:gpe) * 10) - 1)*59) + 102} bottom={((((gpi>1?1:gpi) * 10) - 1)*52) + 113}
        coI33={fileData?.sections?.column?.properties?.I33[0]}
        fI33={fileData?.sections?.floorBeams?.properties?.I33[0]}
        ceI33={fileData?.sections?.ceiligBeams?.properties?.I33[0]}
        coMe={fileData?.sections?.column?.materials?.e}
        fMe={fileData?.sections?.floorBeams?.materials?.e}
        ceMe={fileData?.sections?.ceiligBeams?.materials?.e}
        gpe={gpe}
        gpi={gpi}
        u1={fileData?.connections?.interModularConnection[0]?.value}
        u2={fileData?.connections?.interModularConnection[1]?.value}
        u3={fileData?.connections?.interModularConnection[2]?.value}
        r1={fileData?.connections?.interModularConnection[3]?.value}
        r2={fileData?.connections?.interModularConnection[4]?.value}
        r3={fileData?.connections?.interModularConnection[5]?.value}
        intraU1={fileData?.connections?.intraModularConnection[0]?.value}
        intraU2={fileData?.connections?.intraModularConnection[1]?.value}
        intraU3={fileData?.connections?.intraModularConnection[2]?.value}
        intraR1={fileData?.connections?.intraModularConnection[3]?.value}
        intraR2={fileData?.connections?.intraModularConnection[4]?.value}
        intraR3={fileData?.connections?.intraModularConnection[5]?.value}
        analyze1={fileData?.analyze[0]?.check}
        analyze2={fileData?.analyze[1]?.check}
        analyze3={fileData?.analyze[2]?.check}
        heightOfStorey={fileData?.structuresProperty?.heightOfStorey}
        lengthOfSpan={fileData?.structuresProperty?.lengthOfSpan}
        seismicResistingFramesType={fileData?.seismicResistingFramesType}
        rhos={rho}
        report={report}
      />
  )
  const [progress, setProgress] = useState(0);
  useEffect(()=>{
    if (progress <= 100) {
      setTimeout(() => {
        setProgress(progress + 1);
      }, 10);
    } else{
      setLoading(false);
    }
  }, [progress])
  return (
    <div className='bg-white h-full'>
      {!showRes ? <div className='h-full flex justify-center items-center'><p>There is not enough data to see results</p></div>:
      loading ? <Loading progress={progress}/> : <Res />
      }
    </div>
  )
}

export default DesginForServiceability