import React, { useEffect, useState } from "react";
import Button from "../Button";
import MaterialTable from "../MaterialTable";
import MaterialTr from "../MaterialTr";
import SectionsPropertiesTr from "../SectionsPropertiesTr";
import SectionTitle from "../SectionTitle";
import SectionTr from "../SectionTr";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  addPropertyAndMaterial,
  setSections,
} from "../../../redux/slices/sections";
import { setMaterials } from "../../../redux/slices/material"

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
    }
  }, []);
  const joinPropertyAndMaterial = () => {
    const property = properties.find((p) => p.id === selectedProperty);
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
    <div className="p-4 flex flex-col gap-4 h-full">
      <select value={section} onChange={(e) => setSection(e.target.value)}>
        <option value={"column"}>column</option>
        <option value={"floor beams"}>Floor Beams</option>
        <option value={"ceilig beams"}>Ceilig Beams</option>
      </select>
      <div className="flex gap-1 h-[350px]">
        <div className="border border-black p-1 flex flex-col relative">
          <SectionTitle title={"Properties"} />
          <h5 className="text-center mb-1">Select a property</h5>
          <div className="border border-black flex-1 bg-white">
            <table>
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
              <tbody>
                {properties.map((property) => (
                  <SectionTr
                    key={property.id}
                    id={property.id}
                    edi_std={property.edi_std}
                    ht={property.ht}
                    b={property.b}
                    tf={property.tf}
                    tw={property.tw}
                    i33={property.i33}
                    selectedProperty={selectedProperty}
                    setSelectedProperty={setSelectedProperty}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="border border-black flex-1 p-1 flex flex-col relative">
          <SectionTitle title="Material" />
          <h5 className="text-center mb-1">Select a material</h5>
          <div className="border border-black flex-1 bg-white">
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
      <div className="border border-black px-1 py-3 flex relative">
        <SectionTitle title="Click to" />
        <Button
          title="Join property and material"
          className="w-full border border-gray-500"
          onClick={joinPropertyAndMaterial}
        />
      </div>
      <div className="border border-black flex-1 px-1 py-3 flex relative">
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
                  edi_std={sections?.column?.properties?.edi_std}
                  b={sections?.column?.properties?.b}
                  tf={sections?.column?.properties?.tf}
                  tw={sections?.column?.properties?.tw}
                  i33={sections?.column?.properties?.i33}
                />
              ) : section === "floor beams" ? (
                <SectionsPropertiesTr
                  material_name={sections?.floorBeams?.materials?.name}
                  e={sections?.floorBeams?.materials?.e}
                  edi_std={sections?.floorBeams?.properties?.edi_std}
                  b={sections?.floorBeams?.properties?.b}
                  tf={sections?.floorBeams?.properties?.tf}
                  tw={sections?.floorBeams?.properties?.tw}
                  i33={sections?.floorBeams?.properties?.i33}
                />
              ) : (
                <SectionsPropertiesTr
                  material_name={sections?.ceiligBeams?.materials?.name}
                  e={sections?.ceiligBeams?.materials?.e}
                  edi_std={sections?.ceiligBeams?.properties?.edi_std}
                  b={sections?.ceiligBeams?.properties?.b}
                  tf={sections?.ceiligBeams?.properties?.tf}
                  tw={sections?.ceiligBeams?.properties?.tw}
                  i33={sections?.ceiligBeams?.properties?.i33}
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
