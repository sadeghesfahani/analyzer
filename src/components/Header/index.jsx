import React from "react";
import { MdOutlineArticle } from "react-icons/md";
import Dropdown from "./Dropdown/Dropdown";
import HeaderButton from "./HeaderButton/HeaderButton";
const dropdowned =
  "w-48 bg-primary-600 cursor-pointer text-white text-sm font-semibold py-2 px-4 hover:bg-primary-400";
export default function Header({otherMenus}) {
  const showWindow = (name) => {
    electron.ipcRenderer.send(name);
  };
  return (
    <header className="flex w-full h-14 z-1 justify-between items-center absolute top-0 left-0 right-0 bg-primary-500 px-4 py-2.5">
      <div className="flex h-full  gap-2">
        <Dropdown title="file">
          {!otherMenus ? (
            <>
              <a
            className={dropdowned}
            onClick={() => showWindow("create-new-file")}
          >
            new
          </a>
          <a className={dropdowned} onClick={() => showWindow("load-file")}>
            load
          </a>
            </>
          ):
          <a className={dropdowned} onClick={()=>showWindow('close-file')}>
            close
          </a>
        }
        </Dropdown>
        {otherMenus && (
          <>
            <Dropdown title="Define">
              <a
                className={dropdowned}
                onClick={() => showWindow("show-material-window")}
              >
                Material Properties
              </a>
              <a
                className={dropdowned}
                onClick={() => showWindow("show-section-window")}
              >
                Sections
              </a>
              <a
                className={dropdowned}
                onClick={() => showWindow("show-connections-window")}
              >
                Connections
              </a>
              <a
                className={dropdowned}
                onClick={() =>
                  showWindow("show-seismicResistingFramesType-window")
                }
              >
                Seismic resisting frames type
              </a>
              <a
                className={dropdowned}
                onClick={() => showWindow("show-structuresProperties-window")}
              >
                Structure&apos;s property
              </a>
            </Dropdown>
            <HeaderButton
              title="Analyze"
              className=" bg-primary-400  hover:bg-primary-300"
              onClick={() => {
                showWindow("show-analyze-window");
              }}
            />
            <Dropdown title="Result">
              <a
                className={dropdowned}
                onClick={() => showWindow("show-stability-result")}
              >
                Stability result
              </a>
              <a
                className={dropdowned}
                onClick={() =>
                  showWindow("show-designForServiceability-window")
                }
              >
                Design for serviceability result
              </a>
              <a
                className={dropdowned}
                onClick={() =>
                  showWindow("show-seismicPerformanceFactors-window")
                }
              >
                Seismic performance factors
              </a>
            </Dropdown>
          </>
        )}
      </div>
      <div className="flex h-full">
        <HeaderButton
          title={
            <div className="flex flex-row items-center gap-1">
              <p>Article</p>
              <MdOutlineArticle className="text-white text-l relative top-0.5 " />
            </div>
          }
          className={` bg-blue-600  hover:bg-blue-700 flex gap-1 items-center justify-center`}
          onClick={() => {
            electron.ipcRenderer.send("show-pdf", "result3.pdf");
          }}
        />
      </div>
    </header>
  );
}
