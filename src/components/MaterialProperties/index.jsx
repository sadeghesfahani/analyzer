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
import {MdDelete, MdEdit} from 'react-icons/md'
function MaterialProperties() {
  const { materials } = useSelector((store) => store.material);
  const dispatch = useDispatch();
  const [selectedMaterial, setSelectedMaterial] = React.useState("");
  const [fileData, setFileData] = useState()
  useEffect(() => {
   if(window){
    electron.ipcRenderer.invoke("get-file-data").then(res=>{
      setFileData(res)
      res.temp.materials ? dispatch(setMaterials(res.temp.materials)) : dispatch(setMaterials(res.materials))
    }).catch(e=>console.log(e))
    
   }
  },[])

  const updateMaterial = () => {
    const material = materials.find((material) => material.id === selectedMaterial);
    electron.ipcRenderer.send('save-file',{...fileData, temp:{...fileData.temp, material,materials}})
    electron.ipcRenderer.send('showMaterialModal')
    setSelectedMaterial("")
  }

  const deleteMaterialHandler = () => {
    dispatch(removeMaterial(selectedMaterial));
    electron.ipcRenderer.send('save-file', {...fileData, temp: {...fileData.temp,materials:materials.filter(m => m.id !== selectedMaterial)}})
    setSelectedMaterial("");
  };

  const saveHandler = () => {
    electron.ipcRenderer.send('save-file', {...fileData, materials,temp:{}})
    electron.ipcRenderer.send('close-material-window')
  }

  const closeHandler = () => {
    electron.ipcRenderer.send('save-file', {...fileData,temp:{}})
    electron.ipcRenderer.send('close-material-window')
  }

  return (
    <div className="p-4 flex flex-col gap-10 h-full">
      <div className="p-4 flex flex-col items-center gap-4 border-2 rounded border-gray-500 relative">
        <SectionTitle title="New" />
        <Button
          onClick={() => electron.ipcRenderer.send("showMaterialModal")}
          title={"Add new Material"}
        />
      </div>
      <div className="border-2 border-gray-500 rounded px-1 pb-10 flex flex-col items-center flex-1 relative">
        <SectionTitle title="Materials" />
        <h5 className="text-center py-6 font-semibold text-md">
          {" "}
          -Select a Material-{" "}
        </h5>
        <div className="border-2 border-gray-500 px-1 bg-gray-50 rounded  h-[400px] relative overflow-y-auto">
          <div className="absolute bottom-2 right-2 flex gap-2">
            {selectedMaterial && (
              <>
                <button
                  className="bg-red-700 border-2 border-red-600 flex items-center justify-center w-10 h-10 relative text-sm rounded-full text-white hover:bg-red-800"
                  onClick={deleteMaterialHandler}
                >
                  <MdDelete className="text-white text-2xl" />
                </button>
                <button
                  className="bg-blue-700 border-2 border-blue-600 flex items-center justify-center w-10 h-10 relative text-sm rounded-full text-white hover:bg-blue-800"
                  onClick={updateMaterial}
                >
                  <MdEdit className="text-white text-2xl" />
                </button>
              </>
            )}
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
          <div className="flex gap-1">
          <Button title="OK" className="w-20 -mt-8" onClick={saveHandler}/>
          <Button title="Cancel" className="w-20 -mt-8" onClick={closeHandler}/>
          </div>
    </div>
  );
}

export default MaterialProperties;
