const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('electron',{
    ipcRenderer : require('electron').ipcRenderer,
})