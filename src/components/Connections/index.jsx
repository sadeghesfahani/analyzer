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
  return (
    <div className="m-1 border border-black p-4 flex flex-col gap-4 h-full">
      <div>
        <select
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
        >
          <option value={"Inter modular connection"}>
            Inter modular connection
          </option>
          <option value={"Intra modular connection"}>
            Intra modular connection
          </option>
        </select>
      </div>
      <div className="flex justify-between">
        <div className="border border-black relative w-[150px]">
          <SectionTitle title="Direction" className="text-sm" />
          <div className="px-2 py-3 flex flex-col gap-2">
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
        <div className="border border-black relative w-[150px]">
          <SectionTitle title="Direction" className="text-sm" />
          <div className="px-2 py-3 flex flex-col gap-2">
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
      <div className="border border-black relative p-2 px-6 self-center">
        <Button
          title="Save and Close"
          className="border border-black text-sm px-4"
          onClick={saveHandler}
        />
      </div>
    </div>
  );
}

export default Connections;
