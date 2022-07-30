import React from "react";
import Button from "../Button";
import MaterialTable from "../MaterialTable";
import MaterialTr from "../MaterialTr";
import SectionsPropertiesTr from "../SectionsPropertiesTr";
import SectionTitle from "../SectionTitle";
import SectionTr from "../SectionTr";

function Sections() {
  return (
    <div className="p-4 flex flex-col gap-4 h-full">
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
                <SectionTr
                  edi_std={"L1.125X1.125X1/8"}
                  b={"1.125"}
                  tf={"0.125"}
                  tw="0.125"
                  i33="0.032"
                />
              </tbody>
            </table>
          </div>
        </div>
        <div className="border border-black flex-1 p-1 flex flex-col relative">
          <SectionTitle title="Material" />
          <h5 className="text-center mb-1">Select a material</h5>
          <div className="border border-black flex-1 bg-white">
            <MaterialTable>
              <MaterialTr name="A36" e="200000" />
            </MaterialTable>
          </div>
        </div>
      </div>
      <div className="border border-black px-1 py-3 flex relative">
        <SectionTitle title="Click to" />
        <Button
          title="Join property and material"
          className="w-full border border-gray-500"
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
              <SectionsPropertiesTr
                material_name="A36"
                e="200000"
                edi_std={"L1.125X1.125X1/8"}
                b={"1.125"}
                tf={"0.125"}
                tw="0.125"
                i33="0.032"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Sections;
