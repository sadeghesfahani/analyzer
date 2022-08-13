import React, {useState, useEffect} from 'react'
import AnalyzeCheckBox from '../src/components/AnalyzeCheckBox'
import Button from '../src/components/Button'
import SectionTitle from '../src/components/SectionTitle'
import { setAnalyze } from "../redux/slices/analyze"

import { useSelector, useDispatch } from 'react-redux'

function Analyze() {
    const dispatch = useDispatch()
    const { analyze } = useSelector(state => state.analyze)
    const [fileData, setFileData] = useState();
  useEffect(() => {
    if (window) {
      electron.ipcRenderer
        .invoke("get-file-data")
        .then((res) => {
          setFileData(res);
          dispatch(setAnalyze(res.analyze));
        })
        .catch((e) => console.log(e));
    }
  }, []);
  const saveHandler = () => {
    electron.ipcRenderer.send("save-file", { ...fileData, analyze });
    electron.ipcRenderer.send("close-analyze-window");
  };
  return (
    <div className='h-full p-1'>
        <div className='h-full gap-14 p-3 flex flex-col items-center '>
            <div className='border border-gray-500 rounded relative p-4 w-full'>
                <SectionTitle title='Analyze' className='text-sm'/>
                <div className='flex flex-col gap-4'>
                    {analyze.map((item) => (
                        <AnalyzeCheckBox key={item.name} name={item.name} checked={item.check}/>
                    ))}
                </div>
            </div>
                <div className='flex gap-1'>
                  <Button title={'OK'} className="w-20" onClick={saveHandler}/>
                  <Button title={'Cancel'} className="w-20" onClick={()=>electron.ipcRenderer.send("close-analyze-window")}/>
                </div>
        </div>
    </div>
  )
}

export default Analyze