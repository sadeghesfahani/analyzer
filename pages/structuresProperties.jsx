import React, { useState, useEffect } from "react";
import Button from "../src/components/Button";
import SectionTitle from "../src/components/SectionTitle";

import { useSelector, useDispatch } from "react-redux";
import {
  setStructuresProperty,
  setHeightOfStorey,
  setLengthOfSpan,
} from "../redux/slices/structuresProperty";

function StructuresProperties() {
  const dispatch = useDispatch();
  const { structuresProperty } = useSelector(
    (state) => state.structuresProperty
  );
  const [fileData, setFileData] = useState();
  useEffect(() => {
    if (window) {
      electron.ipcRenderer
        .invoke("get-file-data")
        .then((res) => {
          setFileData(res);
          dispatch(setStructuresProperty(res.structuresProperty));
        })
        .catch((e) => console.log(e));
    }
  }, []);
  const saveHandler = () => {
    electron.ipcRenderer.send("save-file", { ...fileData, structuresProperty });
    electron.ipcRenderer.send("close-structuresProperties-window");
  };
  return (
    <div className="p-4 flex gap-4 h-full">
      <div className="flex flex-col gap-4 flex-[0.6]">
        <div className="border border-black pl-8 py-8 flex flex-col gap-4 relative text-sm">
          <SectionTitle title="Structure's property" />
          <div className="flex gap-4">
            <h6>Height of storey :</h6>
            <input
              value={structuresProperty.heightOfStorey}
              type="text"
              onChange={(e) => {
                dispatch(setHeightOfStorey(e.target.value));
              }}
            />
          </div>
          <div className="flex gap-4">
            <h6>Length of span :</h6>
            <input
              type="text"
              value={structuresProperty.lengthOfSpan}
              onChange={(e) => dispatch(setLengthOfSpan(e.target.value))}
            />
          </div>
        </div>
        <div className="border border-black py-4 flex justify-center items-center">
          <Button
            title={"OK"}
            className="border border-black py-0 px-12"
            onClick={saveHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default StructuresProperties;
