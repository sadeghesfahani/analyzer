const data = require("../data")
const {
  app,
  BrowserWindow,
  ipcMain,
  Menu,
  dialog
} = require('electron');
const fs = require('fs')
app.disableHardwareAcceleration()
let win;

let filePath;

function createWindow() {
  win = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    icon: __dirname + '/Western_Sydney_University_emblem.png',
    webPreferences: {
      nodeIntegration: true,
      preload: __dirname + '/preload.js'
    }
  });
  if (app.isPackaged) {
    win.loadFile('./.next/server/pages/index.html');
  } else {
    win.loadURL('http://localhost:3000');
  }
}

let materialWindow;

function createMaterialWindow() {
  materialWindow = new BrowserWindow({
    width: 600,
    height: 700,
    title: 'Materials',
    parent: win,
    modal:true,
    icon: __dirname + '/Western_Sydney_University_emblem.png',
    webPreferences: {
      preload: __dirname + '/preload.js',
      nodeIntegration: true,
    }
  });
  materialWindow.removeMenu()
  if (app.isPackaged) {
    materialWindow.loadFile('./.next/server/pages/material.html');
  } else {
    materialWindow.loadURL('http://localhost:3000/material');
  }
}


let materialModalWindow;
function createMaterialModalWindow() {
  materialModalWindow = new BrowserWindow({
    width: 600,
    height: 700,
    title: 'Material',
    parent: materialWindow,
    modal:true,
    icon: __dirname + '/Western_Sydney_University_emblem.png',
    webPreferences: {
      preload: __dirname + '/preload.js',
      nodeIntegration: true,
    }
  });
  materialModalWindow.removeMenu()
  if (app.isPackaged) {
    materialModalWindow.loadFile('./.next/server/pages/materialModal.html');
  } else {
    materialModalWindow.loadURL('http://localhost:3000/materialModal');
  }
}

ipcMain.on("closeMaterialModal",(event,arg)=>{
  materialModalWindow.close()
})

ipcMain.on('showMaterialModal',(event, arg) => {
  createMaterialModalWindow();
})

function createSectionsWindow() {
  const sectionWindow = new BrowserWindow({
    width: 1160,
    height: 750,
    title: 'Sections',
    parent: win,
    modal:true,
    icon: __dirname + '/Western_Sydney_University_emblem.png',
    webPreferences: {
      preload: __dirname + '/preload.js',
      nodeIntegration: true,
    }
  });
  sectionWindow.removeMenu()
  if (app.isPackaged) {
    sectionWindow.loadFile('./.next/server/pages/section.html');
  } else {
    sectionWindow.loadURL('http://localhost:3000/section');
  }
}

let connectionWindow;

function createConnectionsWindow() {
  connectionWindow = new BrowserWindow({
    width: 635,
    height: 400,
    title: 'Connections',
    parent: win,
    modal:true,
    icon: __dirname + '/Western_Sydney_University_emblem.png',
    webPreferences: {
      preload: __dirname + '/preload.js',
      nodeIntegration: true,
    }
  });
  connectionWindow.removeMenu()
  if (app.isPackaged) {
    connectionWindow.loadFile('./.next/server/pages/connection.html');
  } else {
    connectionWindow.loadURL('http://localhost:3000/connection');
  }
}

ipcMain.on('close-connections-window', (event, arg) => {
  connectionWindow.close()
})

let seismicResistingFramesTypeWindow;

function createSeismicResistingFramesTypeWindow() {
  seismicResistingFramesTypeWindow = new BrowserWindow({
    width: 380,
    height: 250,
    title: 'Seismic resisting frames type',
    parent: win,
    modal:true,
    icon: __dirname + '/Western_Sydney_University_emblem.png',
    webPreferences: {
      preload: __dirname + '/preload.js',
      nodeIntegration: true,
    }
  });
  seismicResistingFramesTypeWindow.removeMenu()
  if (app.isPackaged) {
    seismicResistingFramesTypeWindow.loadFile('./.next/server/pages/seismicResistingFramesType.html');
  } else {
    seismicResistingFramesTypeWindow.loadURL('http://localhost:3000/seismicResistingFramesType');
  }
}

ipcMain.on('close-seismicResistingFramesType-window', (event, arg) => {
  seismicResistingFramesTypeWindow.close()
})

let structuresPropertiesWindow;

function createStructuresPropertiesWindow() {
  structuresPropertiesWindow = new BrowserWindow({
    width: 620,
    height: 300,
    title: "Structure's properties",
    parent: win,
    modal:true,
    icon: __dirname + '/Western_Sydney_University_emblem.png',
    webPreferences: {
      preload: __dirname + '/preload.js',
      nodeIntegration: true,
    }
  });
  structuresPropertiesWindow.removeMenu()
  if (app.isPackaged) {
    structuresPropertiesWindow.loadFile('./.next/server/pages/structuresProperties.html');
  } else {
    structuresPropertiesWindow.loadURL('http://localhost:3000/structuresProperties');
  }
}

ipcMain.on('close-structuresProperties-window', (event, data) => {
  structuresPropertiesWindow.close()
})

let analyzeWindow;

function createAnalyzeWindow() {
  analyzeWindow = new BrowserWindow({
    width: 380,
    height: 320,
    title: "Analyze",
    parent: win,
    modal:true,
    icon: __dirname + '/Western_Sydney_University_emblem.png',
    webPreferences: {
      preload: __dirname + '/preload.js',
      nodeIntegration: true,
    }
  });
  analyzeWindow.removeMenu()
  if (app.isPackaged) {
    analyzeWindow.loadFile('./.next/server/pages/analyze.html');
  } else {
    analyzeWindow.loadURL('http://localhost:3000/analyze');
  }
}

ipcMain.on('close-analyze-window', (event, arg) => {
  analyzeWindow.close()
})

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


ipcMain.on('read-file', (event, path) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err)
    }
    console.log(data.toString())
  })
})


const template = [{
    label: 'File',
    submenu: [{
        label: "new",
        click() {
          dialog.showSaveDialog({
            filters: [{
              name: ".yyy",
              extensions: ["yyy"]
            }]
          }).then(result => {
            fs.writeFile(result.filePath, JSON.stringify(data), function (err) {
              if (err) {
                console.log(err)
              } else {
                filePath = result.filePath
              }

            })

          }).catch(err => {
            console.log(err)
          })
        }
      },
      {
        label: 'load',

        click() {
          dialog.showOpenDialog({
            properties: ['openFile'],
            filters: [{
              name: ".yyy",
              extensions: ["yyy"]
            }]
          }).then(result => {
            filePath = result.filePaths[0]
          }).catch(err => {
            console.log(err)
          })
        }
      },
      {
        role: 'quit'
      },
      {
        role: 'toggleDevTools'
      }
    ]
  },
  {
    label: 'Define',
    submenu: [{
        label: 'Material Properties',
        click() {
          createMaterialWindow()
        }
      },
      {
        label: 'Sections',
        click() {
          createSectionsWindow()
        }
      },
      {
        label: 'Connections',
        click() {
          createConnectionsWindow()
        }
      },
      {
        label: 'Seismic resisting frames type',
        click() {
          createSeismicResistingFramesTypeWindow()
        }
      },
      {
        label: "Structure's properties",
        click() {
          createStructuresPropertiesWindow()
        }
      },
    ]
  },
  {
    label: 'Analyze',
    click() {
      createAnalyzeWindow()
    }
  }
]

ipcMain.handle('get-file-data', async (event, data) => {
  const fileData = await fs.readFileSync(filePath, 'utf8')
  return JSON.parse(fileData)
})

ipcMain.on('save-file', (event, data) => {
  fs.writeFile(filePath, JSON.stringify(data), function (err) {
    if (err) {
      console.log(err)
    }
  })
})

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)