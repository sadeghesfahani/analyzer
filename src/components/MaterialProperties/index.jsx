import React, { useEffect, useState } from "react";
import Button from "../Button";
import MaterialTable from "../MaterialTable";
import MaterialTr from "../MaterialTr";
import SectionTitle from "../SectionTitle";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  addMaterial,
  removeMaterial,
  updateMaterial,
  setMaterials
} from "../../../redux/slices/material";

function MaterialProperties() {
  const { materials } = useSelector((store) => store.material);
  const [name, setName] = React.useState("");
  const [e, setE] = React.useState("");
  const dispatch = useDispatch();
  const [selectedMaterial, setSelectedMaterial] = React.useState("");
  const [isEditing, setIsEditing] = React.useState(false);
  const [fileData, setFileData] = useState()
  useEffect(() => {
   if(window){
    electron.ipcRenderer.invoke("get-file-data").then(res=>{
      setFileData(res)
      dispatch(setMaterials(res.materials))
    }).catch(e=>console.log(e))
   }
  },[])


  const addMaterialHandler = () => {
    const newMaterial = {
      id: uuidv4(),
      name,
      e,
    };
    dispatch(addMaterial(newMaterial));
    electron.ipcRenderer.send('save-file', {...fileData, materials: [...materials, newMaterial]})
    setName("");
    setE("");
  };

  const deleteMaterialHandler = () => {
    dispatch(removeMaterial(selectedMaterial));
    electron.ipcRenderer.send('save-file', {...fileData, materials: materials.filter(m => m.id !== selectedMaterial)})
    setSelectedMaterial("");
  };

  const editButtonHandler = () => {
    if (selectedMaterial) {
      setIsEditing(true);
      const material = materials.find((m) => m.id === selectedMaterial);
      setName(material.name);
      setE(material.e);
    }
  };

  const editMaterial = () => {
    const material = {
      id: selectedMaterial,
      name,
      e,
    };
    dispatch(updateMaterial(material));
    electron.ipcRenderer.send('save-file', {...fileData, materials: materials.map(m => m.id === material.id ? material : m)})
    setIsEditing(false);
    setName("");
    setE("");
    setSelectedMaterial("");
  };

  return (
    <div className="p-4 flex flex-col gap-4 h-full">
      <div className="p-4 flex flex-col items-center gap-4 border border-black relative">
        <SectionTitle title="New" />
        <div className="flex gap-2">
          <span>Material Name :</span>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="flex gap-2">
          <span>Modula of Elasticty E :</span>
          <input value={e} onChange={(e) => setE(e.target.value)} />
          <span>MPa</span>
        </div>
        <Button
          onClick={isEditing ? editMaterial : addMaterialHandler}
          title={isEditing ? "Update" : "Add new Material"}
        />
      </div>
      <div className="border border-black px-1 flex flex-col flex-1 relative">
        <SectionTitle title="Materials" />
        <h5 className="text-center py-1">Select a Material</h5>
        <div className="border border-black px-1 bg-white h-[400px] relative ">
          <div className="absolute bottom-2 right-2">
            {!isEditing && (
              <>
                <Button
                  title={"Delete Material"}
                  onClick={deleteMaterialHandler}
                />
                <Button title={"Update Material"} onClick={editButtonHandler} />
              </>
            )}
          </div>
          <MaterialTable>
            {/* <MaterialTr name="A36" e="200000" /> */}
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
