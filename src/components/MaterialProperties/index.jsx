import React from "react";
import Button from "../Button";
import MaterialTr from "../MaterialTr";
import SectionTitle from "../SectionTitle";

function MaterialProperties() {
  return (
    <div className="p-4 flex flex-col gap-4 h-full">
      <div className="p-4 flex flex-col items-center gap-4 border border-black relative">
        <SectionTitle title="New" />
        <div className="flex gap-2">
          <span>Material Name :</span>
          <input />
        </div>
        <div className="flex gap-2">
          <span>Modula of Elasticty E :</span>
          <input />
          <span>MPa</span>
        </div>
        <Button title={"Add new Material..."} />
      </div>
      <div className="border border-black px-1 flex flex-col flex-1 relative">
        <SectionTitle title="Materials" />
        <h5 className="text-center py-1">Select a Material</h5>
        <div className="border border-black px-1 bg-white h-[400px] relative ">
          <div className="absolute bottom-2 right-2">
            <Button title={"Delete Material"} />
          </div>
          <table>
            <thead>
              <tr>
                <th>Material_Name</th>
                <th>Modula of Elasticty E</th>
              </tr>
            </thead>
            <tbody>
              <MaterialTr name="test" E="200000000000" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MaterialProperties;
