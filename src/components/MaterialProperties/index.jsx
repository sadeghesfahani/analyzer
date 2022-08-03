import React, { useEffect, useState } from "react";
import Button from "../Button";
import MaterialTable from "../MaterialTable";
import MaterialTr from "../MaterialTr";
import SectionTitle from "../SectionTitle";
import { useDispatch, useSelector } from "react-redux";
import {
  removeMaterial,
  setMaterials
} from "../../../redux/slices/material";

function MaterialProperties() {
  const { materials } = useSelector((store) => store.material);
  const dispatch = useDispatch();
  const [selectedMaterial, setSelectedMaterial] = React.useState("");
  const [fileData, setFileData] = useState()
  useEffect(() => {
   if(window){
    electron.ipcRenderer.invoke("get-file-data").then(res=>{
      setFileData(res)
      dispatch(setMaterials(res.materials))
    }).catch(e=>console.log(e))
   }
  },[materials])


  const deleteMaterialHandler = () => {
    dispatch(removeMaterial(selectedMaterial));
    electron.ipcRenderer.send('save-file', {...fileData, materials: materials.filter(m => m.id !== selectedMaterial)})
    setSelectedMaterial("");
  };

  

  return (
    <div className="p-4 flex flex-col gap-10 h-full">
      <div className="p-4 flex flex-col items-center gap-4 border-2 rounded border-gray-500 relative">
        <SectionTitle className="text-slate-800 " title="New" />
        <Button
          onClick={()=>electron.ipcRenderer.send('showMaterialModal')}
          title={"Add new Material"}
        />
      </div>
      <div className="border-2 border-gray-500 rounded px-1 pb-10 flex flex-col items-center flex-1 relative">
        <SectionTitle title="Materials" />
        <h5 className="text-center py-6">Select a Material</h5>
        <div className="border-2 border-gray-500 px-1 bg-white rounded  h-[400px] relative ">
          <div className="absolute bottom-2 right-2 shadow-md">
            <Button
              title={"Delete Material"}
              onClick={deleteMaterialHandler}
            />
           
          </div>
          <MaterialTable>
            {materials?.map((m) => (
              <MaterialTr
                key={m.id}
                id={m.id}
                name={m.name}
                e={m.e}
                selectedMaterial={selectedMaterial}
                setSelectedMaterial={setSelectedMaterial}
              />
            ))}
          </MaterialTable>
        </div>
      </div>
    </div>
  );
}

export default MaterialProperties;
