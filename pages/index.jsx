import Head from "next/head";
import { useEffect, useState } from "react";

import { VscFiles } from "react-icons/vsc";
import Header from "../src/components/Header";

const itemsStyle =
  "sm:flex flex-col hidden opacity-90 border-dashed border-4 rounded-md border-slate-800 color-slate-800 gap-2 items-center justify-center w-80 h-80";

export default function Home() {
  const [fileLoaded, setFileLoaded] = useState(false);

  function dropping(e) {
    if(!fileLoaded){
      for (const f of e.dataTransfer.files) {
        if (f.path.endsWith(".yyy")) {
          electron.ipcRenderer.send("read-file", f.path);
          setFileLoaded(true);
        } else {
          alert("File not supported");
        }
      }
    }
  }

  useEffect(()=>{
    if(window){
        electron.openFile((res)=>{
            setFileLoaded(true)
        })
        electron.closeFile((res)=>{
            setFileLoaded(false)
        })
    }
  },[])

  return (
    <div
      className="h-full bg-image pt-14"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => dropping(e)}
    >
      <Head>
        <title>Design of inter-modular connections</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Western_Sydney_University_emblem.png" />
      </Head>

      <main className="h-full">
        <Header otherMenus={fileLoaded} />
        {/*<div className="flex h-full gap-8 justify-center text-slate-800 items-center">*/}
        {/*  {!fileLoaded && (*/}
        {/*    <>*/}
        {/*      <div className={itemsStyle}>*/}
        {/*        <div className="flex flex-col items-end ">*/}
        {/*          <VscFiles fontSize={86} />*/}
        {/*          <h4 className="relative bottom-6 left-1 font-semibold">*/}
        {/*            .yyy*/}
        {/*          </h4>*/}
        {/*        </div>*/}
        {/*        <div className="flex flex-col gap-3 justify-start items-center">*/}
        {/*          <h3 className="font-semibold text-l ">*/}
        {/*            Drag and drop to load*/}
        {/*          </h3>*/}
        {/*          <h4 className="font-semibold">or</h4>*/}
        {/*          <button*/}
        {/*            onClick={() => electron.ipcRenderer.send("load-file")}*/}
        {/*            className="bg-blue-500 w-full cursor-pointer hover:bg-blue-600 text-white font-semibold rounded-md px-4 py-2"*/}
        {/*          >*/}
        {/*            Browse*/}
        {/*          </button>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </>*/}
        {/*  )}*/}
        {/*</div>*/}
      </main>
    </div>
  );
}
