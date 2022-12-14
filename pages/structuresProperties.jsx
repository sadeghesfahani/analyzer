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
    <div className="p-4 flex gap-4 h-full overflow-hidden w-full items-center justify-center">
      <div className="flex flex-col justify-center items-center gap-4 flex-[0.6]">
        <div className="flex gap-1 items-center justify-center translate-x-12 -translate-y-8">
          <div className="border border-black px-4 py-6 flex flex-col gap-4 relative text-sm">
            <SectionTitle title="Structure's property" />
            <div className="flex flex-col gap-2">
              <label htmlFor={"heightOfStorey"} className="font-semibold ">
                Height of storey :
              </label>
              <div className="flex gap-1">
                <input
                  id={"heightOfStorey"}
                  className="border"
                  value={structuresProperty.heightOfStorey}
                  type="text"
                  onChange={(e) => {
                    dispatch(setHeightOfStorey(e.target.value));
                  }}
                />
                <h6>mm</h6>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor={"lengthOfSpan"} className="font-semibold ">
                Length of span :
              </label>
              <div className="flex gap-1">
                <input
                  id={"lengthOfSpan"}
                  className="border"
                  type="text"
                  value={structuresProperty.lengthOfSpan}
                  onChange={(e) => dispatch(setLengthOfSpan(e.target.value))}
                />
                <h6>mm</h6>
              </div>
            </div>
          </div>

          <img src="/Page  2.png" alt="" />
        </div>
        <div className="flex gap-3 -translate-y-10">
          <Button title={"OK"} className=" py-1 w-20" onClick={saveHandler} />
          <Button
            title={"Cancel"}
            className="py-1 w-20"
            onClick={() =>
              electron.ipcRenderer.send("close-structuresProperties-window")
            }
          />
        </div>
      </div>
    </div>
  );
}

export default StructuresProperties;
