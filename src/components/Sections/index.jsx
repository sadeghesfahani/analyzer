import React, {useEffect, useState} from "react";
import Button from "../Button";
import MaterialTable from "../MaterialTable";
import MaterialTr from "../MaterialTr";
import SectionsPropertiesTr from "../SectionsPropertiesTr";
import SectionTitle from "../SectionTitle";
import SectionTr from "../SectionTr";
import {useSelector, useDispatch} from "react-redux";
import {v4 as uuidv4} from "uuid";
import {setProperties} from "../../../redux/slices/properties";
import {
    addPropertyAndMaterial,
    setSections,
} from "../../../redux/slices/sections";
import {setMaterials} from "../../../redux/slices/material"

function Sections() {
  const dispatch = useDispatch();
  const { properties } = useSelector((state) => state.properties);
  const { materials } = useSelector((state) => state.material);
  const { sections } = useSelector((state) => state.sections);
  const [section, setSection] = React.useState("column");
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedProperty, setSelectedProperty] = useState("");
  const [fileData, setFileData] = useState();
  useEffect(() => {
    if (window) {
      electron.ipcRenderer
        .invoke("get-file-data")
        .then((res) => {
          setFileData(res);
          dispatch(setSections(res.sections));
          dispatch(setMaterials(res.materials))
        })
        .catch((e) => console.log(e));
        electron.ipcRenderer.invoke('get-properties').then(res => {
          dispatch(setProperties(res))
        }).catch(e => console.log(e))
    }
  }, []);
  const joinPropertyAndMaterial = () => {
    const property = properties.find((p) => p.EDI_STD[0] === selectedProperty);
    const material = materials.find((m) => m.id === selectedMaterial);
    const propertyAndMaterial = { materials: material, properties:property, id: uuidv4() };
    dispatch(addPropertyAndMaterial({ section, propertyAndMaterial }));
    switch (section) {
      case "column":
        electron.ipcRenderer.send('save-file', {...fileData, sections: {...sections, column: propertyAndMaterial}})
        break;
      case "floor beams":
        electron.ipcRenderer.send('save-file', {...fileData, sections: {...sections, floorBeams: propertyAndMaterial}})
        break;
      case "ceilig beams":
        electron.ipcRenderer.send('save-file', {...fileData, sections: {...sections, ceiligBeams: propertyAndMaterial}})
        break;
    }
    setSelectedMaterial("");
    setSelectedProperty("");
  };
  return (
    <div className="px-6 py-4 flex flex-col gap-4 h-full max-w-6xl">
      <select className="cursor-pointer bg-primary-500 hover:bg-primary-600 text-white rounded py-2 px-4" value={section} onChange={(e) => setSection(e.target.value)}>
        <option value={"column"}>Columns</option>
        <option value={"floor beams"}>Floor Beams</option>
        <option value={"ceilig beams"}>Ceilig Beams</option>
      </select>
      <div className="flex gap-1 h-[350px]">
        <div className="border border-black p-3 flex flex-col relative">
          <SectionTitle title={"Properties"} />
          <h5 className="text-center mb-4 font-semibold ">-Select a property-</h5>
          <div className="border border-black flex-1 bg-white overflow-y-auto">
            <table className="">
              <thead>
                <tr>
                  <th>EDI_STD</th>
                  <th>HT</th>
                  <th>B</th>
                  <th>TF</th>
                  <th>TW</th>
                  <th>I33</th>
                </tr>
              </thead>
              <tbody className="">
                {properties?.map((property) => (
                  <SectionTr
                    key={property.EDI_STD[0]}
                    edi_std={property.EDI_STD[0]}
                    ht={property.HT[0]}
                    b={property.B[0]}
                    tf={property.TF[0]}
                    tw={property.TW[0]}
                    i33={property.I33[0]}
                    selectedProperty={selectedProperty}
                    setSelectedProperty={setSelectedProperty}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="border border-black flex-1 p-3 flex flex-col relative">
          <SectionTitle title="Material" />
          <h5 className="text-center mb-4 font-semibold ">-Select a material-</h5>
          <div className="border border-black flex-1 bg-white overflow-y-auto">
            <MaterialTable>
              {materials.map((material) => (
                <MaterialTr
                  key={material.id}
                  name={material.name}
                  id={material.id}
                  e={material.e}
                  selectedMaterial={selectedMaterial}
                  setSelectedMaterial={setSelectedMaterial}
                />
              ))}
            </MaterialTable>
          </div>
        </div>
      </div>

        <Button
          title="Join property and material"
          className="w-full"
          onClick={joinPropertyAndMaterial}
        />

      <div className="border border-black flex-1 p-3 pt-6 flex relative">
        <SectionTitle title="Properties" />
        <div className="border border-black flex-1 bg-white">
          <table>
            <thead>
              <tr>
                <th>Material Name</th>
                <th>Modula of Elasticty E</th>
                <th>EDI_STD</th>
                <th>HT</th>
                <th>B</th>
                <th>TF</th>
                <th>TW</th>
                <th>I33</th>
              </tr>
            </thead>
            <tbody>
              {section === "column" ? (
                <SectionsPropertiesTr
                  material_name={sections?.column?.materials?.name}
                  e={sections?.column?.materials?.e}
                  edi_std={sections?.column?.properties?.EDI_STD[0]}
                  b={sections?.column?.properties?.B[0]}
                  ht={sections?.column?.properties?.HT[0]}
                  tf={sections?.column?.properties?.TF[0]}
                  tw={sections?.column?.properties?.TW[0]}
                  i33={sections?.column?.properties?.I33[0]}
                />
              ) : section === "floor beams" ? (
                <SectionsPropertiesTr
                  material_name={sections?.floorBeams?.materials?.name}
                  e={sections?.floorBeams?.materials?.e}
                  edi_std={sections?.floorBeams?.properties?.EDI_STD[0]}
                  b={sections?.floorBeams?.properties?.B[0]}
                  ht={sections?.floorBeams?.properties?.HT[0]}
                  tf={sections?.floorBeams?.properties?.TF[0]}
                  tw={sections?.floorBeams?.properties?.TW[0]}
                  i33={sections?.floorBeams?.properties?.I33[0]}
                />
              ) : (
                <SectionsPropertiesTr
                  material_name={sections?.ceiligBeams?.materials?.name}
                  e={sections?.ceiligBeams?.materials?.e}
                  edi_std={sections?.ceiligBeams?.properties?.EDI_STD[0]}
                  b={sections?.ceiligBeams?.properties?.B[0]}
                  ht={sections?.ceiligBeams?.properties?.HT[0]}
                  tf={sections?.ceiligBeams?.properties?.TF[0]}
                  tw={sections?.ceiligBeams?.properties?.TW[0]}
                  i33={sections?.ceiligBeams?.properties?.I33[0]}
                />
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Sections;
