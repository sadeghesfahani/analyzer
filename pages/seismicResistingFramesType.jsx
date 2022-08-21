import React, { useEffect, useState } from "react";
import Button from "../src/components/Button";
import SectionTitle from "../src/components/SectionTitle";
import { useDispatch, useSelector } from "react-redux";
import { setSeismicResistingFramesType } from "../redux/slices/seismicResistingFramesType";

function SeismicResistingFramesType() {
  const dispatch = useDispatch();
  const { seismicResistingFramesType } = useSelector(
    (state) => state.seismicResistingFramesType
  );
  const [selected, setSelected] = useState("");
  const [fileData, setFileData] = useState()
  useEffect(() => {
   if(window){
    electron.ipcRenderer.invoke("get-file-data").then(res=>{
      setFileData(res)
      setSelected(res.seismicResistingFramesType)
    }).catch(e=>console.log(e))
   }
  },[])
  const saveHandler = () => {
    if(selected === "Braced frame"){
      const analyze = fileData.analyze
      analyze[0].check = true
      analyze[1].check = false
      analyze[2].check = false
      electron.ipcRenderer.send('save-file', {...fileData, seismicResistingFramesType: selected,
      analyze
      })
    }else{
      electron.ipcRenderer.send('save-file', {...fileData, seismicResistingFramesType: selected})
    }
    electron.ipcRenderer.send('close-seismicResistingFramesType-window')
  }
  return (
    <div className="p-4 py-6 flex flex-col gap-4 max-w-md items-center  justify-center w-full h-full">
      <div className="border border-black px-2 py-8 relative">
        <SectionTitle title={"Seismic resisting frames type"} />
        <div className="flex justify-center gap-8 text-sm">
          <div className="flex flex-row items-center gap-1 ">
            <input
              type="radio"
              id="braced-frame"
              name="seismic-resisting-frames-type"
              value={"Braced frame"}
              checked={selected === "Braced frame"}
              onChange={() => setSelected("Braced frame")}
            />
            <label htmlFor="braced-frame">Braced frame</label>
          </div>
          <div className="flex flex-row items-center gap-1 ">
            <input
              type="radio"
              id="moment-frame"
              name="seismic-resisting-frames-type"
              value={"Moment frame"}
              checked={selected === "Moment frame"}
              onChange={(e) => setSelected("Moment frame")}
            />
            <label htmlFor="moment-frame">Moment frame</label>
          </div>
        </div>
      </div>
      <div className="self-center py-3 flex gap-1">
        <Button
          title="OK"
          className={"w-20"}
          onClick={saveHandler}
        />
        <Button title="Cancel" className="w-20" onClick={()=>electron.ipcRenderer.send('close-seismicResistingFramesType-window')}/>
      </div>
    </div>
  );
}

export default SeismicResistingFramesType;
