const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electron',{
    ipcRenderer,
    openFile:(handler)=>ipcRenderer.on('open-file-handler',(event,arg)=>handler(arg)),
    closeFile:(handler)=>ipcRenderer.on('close-file-handler',(event,arg)=>handler(arg)),
})
