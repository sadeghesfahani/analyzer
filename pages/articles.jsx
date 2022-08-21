import React from 'react'
import {RiArticleFill} from 'react-icons/ri'


export default function Articles() {
    const pdfFiles = [
        {
            fileName: "main.pdf",
            title: "First PDF",
            author: "javad"
        },
        {
            fileName: "main.pdf",
            title: "Second PDF",
            author: "javid"
        },

    ];

    return (
        <div className="bg-slate-100 w-full h-full flex flex-col">
            <h1 className="bg-primary-500 w-full py-4 px-6 font-bold text-xl text-white">Articles</h1>
            <div className="flex flex-col items-center gap-2 p-4">
                {pdfFiles.map((file, index) => (
                    <button key={index} onClick={() =>
                        electron.ipcRenderer.send("show-pdf", file.fileName)}
                            className="bg-blue-700 hover:bg-blue-900 text-white w-full rounded p-2 h-20 flex flex-row gap-1 items-center ">
                        <RiArticleFill className="text-5xl"/>
                        <div className="h-full pt-2 pb-1.5 flex flex-col items-start gap-1">
                            <h1 className="text-l font-bold">{file.title}</h1>
                            <h3 className="text-xs font-semibold">by: {file.author}</h3>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}