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
    <div className="p-4 flex flex-col gap-4 h-full">
      <div className="p-4 flex flex-col items-center gap-4 border border-black relative">
        <SectionTitle title="New" />
        <Button
          onClick={()=>electron.ipcRenderer.send('showMaterialModal')}
          title={"Add new Material"}
        />
      </div>
      <div className="border border-black px-1 flex flex-col flex-1 relative overflow-y-auto">
        <SectionTitle title="Materials" />
        <h5 className="text-center py-1">Select a Material</h5>
        <div className="border border-black px-1 bg-white h-[400px] relative ">
          <div className="absolute bottom-2 right-2">
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
