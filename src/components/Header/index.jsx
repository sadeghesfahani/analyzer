import React, { useEffect } from "react";
import { MdOutlineArticle } from "react-icons/md";
import Dropdown from "./Dropdown/Dropdown";
import HeaderButton from "./HeaderButton/HeaderButton";
const dropdowned =
  "w-48 bg-primary-600 cursor-pointer text-white text-sm font-semibold py-2 px-4 hover:bg-primary-400";
export default function Header({otherMenus, analyze}) {
  const resultSubMenus = [
    {title:"Stability result",click:() => workWithFileMenus("show-stability-result")},
    {title:"Serviceability result",click:()=>workWithFileMenus("show-designForServiceability-window")},
    {title:"Seismic performance factors",click:() => workWithFileMenus("show-seismicPerformanceFactors-window")},
  ]
  const showWindow = (name) => {
    electron.ipcRenderer.send(name);
  };
  const workWithFileMenus = (name) => {
    if(!otherMenus)alert('Please load a file first or create new one')
    else electron.ipcRenderer.send(name);
  }
  return (
    <header className="flex w-full h-14 z-1 justify-between items-center absolute bg-primary-500 top-0 left-0 right-0 px-4 py-2.5">
      <div className="flex h-full  gap-2">
        <Dropdown title="File">
          {!otherMenus ? (
            <>
              <a
            className={dropdowned}
            onClick={() => showWindow("create-new-file")}
          >
            New
          </a>
          <a className={dropdowned} onClick={() => showWindow("load-file")}>
            Load
          </a>
            </>
          ):
          <a className={dropdowned} onClick={()=>showWindow('close-file')}>
            Close
          </a>
        }
        <a className={dropdowned} onClick={()=>showWindow('exit')}>
            Exit
          </a>
        </Dropdown>
          <>
            <Dropdown title="Define">
              <a
                className={dropdowned}
                onClick={() => workWithFileMenus("show-material-window")}
              >
                Material Properties
              </a>
              <a
                className={dropdowned}
                onClick={() => workWithFileMenus("show-section-window")}
              >
                Sections
              </a>
              <a
                className={dropdowned}
                onClick={() => workWithFileMenus("show-connections-window")}
              >
                Connections
              </a>
              <a
                className={dropdowned}
                onClick={() =>
                  workWithFileMenus("show-seismicResistingFramesType-window")
                }
              >
                Seismic resisting frames type
              </a>
              <a
                className={dropdowned}
                onClick={() => workWithFileMenus("show-structuresProperties-window")}
              >
                Structure&apos;s property
              </a>
            </Dropdown>
            <HeaderButton
              title="Analyze"
              className=" bg-primary-400 hover:bg-primary-300"
              onClick={() => {
                workWithFileMenus("show-analyze-window");
              }}
            />
            <Dropdown title="Result">
              {resultSubMenus.map((item,index) => (
                <a
                  key={index}
                  className={`${dropdowned} ${(analyze[index] && analyze[index].check && " ") || "opacity-70 cursor-not-allowed text-gray-500"}`}
                  onClick={(analyze[index] && analyze[index].check && item.click) || (()=>{})}
                >
                  {item.title}
                </a>
              ))}
              {/* <a
                className={dropdowned}
                onClick={() => workWithFileMenus("show-stability-result")}
              >
                Stability result
              </a>
              <a
                className={dropdowned}
                onClick={() =>
                  workWithFileMenus("show-designForServiceability-window")
                }
              >
                Serviceability result
              </a>
              <a
                className={dropdowned}
                onClick={() =>
                  workWithFileMenus("show-seismicPerformanceFactors-window")
                }
              >
                Seismic performance factors
              </a> */}
            </Dropdown>
            <Dropdown title="Help">
            <a
                className={dropdowned}
                onClick={() =>
                    showWindow("show-articles-window")
                }
              >
                Articles
              </a>
              <a
                  className={dropdowned}
                  onClick={()=>{
                    showWindow("show-aboutus-window")
                  }}
              >
                About us
              </a>
            </Dropdown>
          </>
      </div>
      {/* <div className="flex h-full">
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
      </div> */}
    </header>
  );
}
