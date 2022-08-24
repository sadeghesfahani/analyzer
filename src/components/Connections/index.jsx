import React, { useEffect, useState } from "react";
import ConnectionsCheckBox from "../ConnectionsCheckBox";
import ConnectionsTable from "../ConnectionsTable";
import SectionTitle from "../SectionTitle";
import Button from "../Button";
import { useSelector, useDispatch } from "react-redux";
import {
  setConnections,
  editInterModularConnection,
  editIntraModularConnection,
} from "../../../redux/slices/connections";

function Connections() {
  const dispatch = useDispatch()
  const [fileData, setFileData] = useState();
  useEffect(() => {
    if (window) {
      electron.ipcRenderer
        .invoke("get-file-data")
        .then((res) => {
          setFileData(res);
          dispatch(setConnections(res.connections));
        })
        .catch((e) => console.log(e));
    }
  }, []);
  const { connections } = useSelector(
    (store) => store.connections
  );
  const [selectValue, setSelectValue] = React.useState(
    "Inter modular connection"
  );

  const saveHandler = () => {
        electron.ipcRenderer.send('save-file', {...fileData, connections})
        electron.ipcRenderer.send('close-connections-window')
  }
  const tabStyles = "  text-sm w-1/2 py-1 px-4 tab-border";
  const tabDeselected = " text-black hover:bg-gray-200 ";
  const tabSelected = " text-white bg-gray-800 ";
  return (
    <div className="m-1 border p-4 flex flex-col gap-7 ">

        {/*<select*/}
        {/*    className="w-full py-2 px-4 bg-primary-600 hover:bg-primary-500 cursor-pointer rounded  text-white"*/}
        {/*  value={selectValue}*/}
        {/*  onChange={(e) => setSelectValue(e.target.value)}*/}
        {/*>*/}
        {/*  <option value={"Inter modular connection"}>*/}
        {/*    Inter-modular-connection*/}
        {/*  </option>*/}
        {/*  <option value={"Intra modular connection"}>*/}
        {/*    Intra-modular-connection*/}
        {/*  </option>*/}
        {/*</select>*/}
      <div className="flex flex-row gap-0.5 mb-3">
        <button className={selectValue === "Inter modular connection" ? tabSelected + tabStyles : tabDeselected + tabStyles}
                disabled={selectValue === "Inter modular connection"}
                onClick={() => setSelectValue("Inter modular connection")}>Inter-modular-connection
        </button>
        <button className={selectValue === "floor beams" ? tabSelected + tabStyles : tabDeselected + tabStyles}
                disabled={selectValue === "floor beams"}
                onClick={() => setSelectValue("floor beams")}>Intra-modular-connection
        </button>
      </div>
      <div className="flex gap-4 justify-between">
        <div className="border border-black relative">
          <SectionTitle title="Direction" className="text-sm" />
          <div className="px-2 py-6 flex flex-col gap-2">
            {selectValue === "Inter modular connection"
              ? connections?.interModularConnection
                  .filter((c) => c.name[0] === "U")
                  .map((item) => (
                    <ConnectionsCheckBox
                      key={item.name}
                      name={item.name}
                      value={item.value}
                      onChange={editInterModularConnection}
                    />
                  ))
              : connections?.intraModularConnection
                  .filter((c) => c.name[0] === "U")
                  .map((item) => (
                    <ConnectionsCheckBox
                      key={item.name}
                      name={item.name}
                      value={item.value}
                      onChange={editIntraModularConnection}
                    />
                  ))}
          </div>
        </div>
        <div className="border border-black relative">
          <SectionTitle title="Direction" className="text-sm" />
          <div className="px-2 py-6 flex flex-col gap-2">
          {selectValue === "Inter modular connection"
              ? connections?.interModularConnection
                  .filter((c) => c.name[0] === "R")
                  .map((item) => (
                    <ConnectionsCheckBox
                      key={item.name}
                      name={item.name}
                      value={item.value}
                      onChange={editInterModularConnection}
                    />
                  ))
              : connections?.intraModularConnection
                  .filter((c) => c.name[0] === "R")
                  .map((item) => (
                    <ConnectionsCheckBox
                      key={item.name}
                      name={item.name}
                      value={item.value}
                      onChange={editIntraModularConnection}
                    />
                  ))}
          </div>
        </div>
      </div>
        <div className="flex gap-1">
        <Button
          title="OK"
          className="w-20"
          onClick={saveHandler}
        />
        <Button
          title="Cancel"
          className="w-20"
          onClick={()=>electron.ipcRenderer.send('close-connections-window')}
        />
        </div>
    </div>
  );
}

export default Connections;
