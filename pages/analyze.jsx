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
        <div className='border border-black gap-4 p-3 flex flex-col'>
            <div className='border border-black relative p-4'>
                <SectionTitle title='Analyze' className='text-sm'/>
                <div className='flex flex-col gap-4'>
                    {analyze.map((item) => (
                        <AnalyzeCheckBox key={item.name} name={item.name} checked={item.check}/>
                    ))}
                </div>
            </div>
            <div className='border border-black py-4 flex justify-center items-center'>
                <Button title={'OK'} className="border border-black py-0 px-12" onClick={saveHandler}/>
            </div>
        </div>
    </div>
  )
}

export default Analyze