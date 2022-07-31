const {
  app,
  BrowserWindow,
  ipcMain,
  Menu
} = require('electron');
const fs = require('fs')
app.disableHardwareAcceleration()
let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
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

function createMaterialWindow() {
  const materialWindow = new BrowserWindow({
    width: 600,
    height: 700,
    title: 'Materials',
    parent: win,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    }
  });
  if (app.isPackaged) {
    materialWindow.loadFile('./.next/server/pages/material.html');
  } else {
    materialWindow.loadURL('http://localhost:3000/material');
  }
}

function createSectionsWindow() {
  const sectionWindow = new BrowserWindow({
    width: 1160,
    height: 750,
    title: 'Sections',
    parent: win,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    }
  });
  if (app.isPackaged) {
    sectionWindow.loadFile('./.next/server/pages/section.html');
  } else {
    sectionWindow.loadURL('http://localhost:3000/section');
  }
}

function createConnectionsWindow() {
  const sectionWindow = new BrowserWindow({
    width: 635,
    height: 400,
    title: 'Connections',
    parent: win,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    }
  });
  if (app.isPackaged) {
    sectionWindow.loadFile('./.next/server/pages/connection.html');
  } else {
    sectionWindow.loadURL('http://localhost:3000/connection');
  }
}

function createSeismicResistingFramesTypeWindow() {
  const seismicResistingFramesTypeWindow = new BrowserWindow({
    width: 380,
    height: 250,
    title: 'Seismic resisting frames type',
    parent: win,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    }
  });
  if (app.isPackaged) {
    seismicResistingFramesTypeWindow.loadFile('./.next/server/pages/seismicResistingFramesType.html');
  } else {
    seismicResistingFramesTypeWindow.loadURL('http://localhost:3000/seismicResistingFramesType');
  }
}

function createStructuresPropertiesWindow() {
  const structuresPropertiesWindow = new BrowserWindow({
    width: 620,
    height: 300,
    title: "Structure's properties",
    parent: win,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    }
  });
  if (app.isPackaged) {
    structuresPropertiesWindow.loadFile('./.next/server/pages/structuresProperties.html');
  } else {
    structuresPropertiesWindow.loadURL('http://localhost:3000/structuresProperties');
  }
}

function createAnalyzeWindow() {
  const analyzeWindow = new BrowserWindow({
    width: 380,
    height: 320,
    title: "Analyze",
    parent: win,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    }
  });
  if (app.isPackaged) {
    analyzeWindow.loadFile('./.next/server/pages/analyze.html');
  } else {
    analyzeWindow.loadURL('http://localhost:3000/analyze');
  }
}

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
      role: 'quit'
    }]
  },
  {
    label: 'Define',
    submenu: [{
        label: 'Material Properties',
        click(){
          createMaterialWindow()
        }
      },
      {
        label: 'Sections',
        submenu: [{
            label: 'Column',
            click() {
              createSectionsWindow()
            }
          },
          {
            label: 'Floor beams',
            click() {
              createSectionsWindow()
            }
          },
          {
            label: 'Ceilig beams',
            click() {
              createSectionsWindow()
            }
          }
        ]
      },
      {
        label: 'Connections',
        submenu: [{
            label: 'Inter-modular connection',
            click() {
              createConnectionsWindow()
            }
          },
          {
            label: 'Intra-modular connection',
            click() {
              createConnectionsWindow()
            }
          }
        ]
      },
      {
        label:'Seismic resisting frames type',
        click(){
          createSeismicResistingFramesTypeWindow()
        }
      },
      {
        label:"Structure's properties",
        click(){
          createStructuresPropertiesWindow()
        }
      },
    ]
  },
  {
    label:'Analyze',
    click(){
      createAnalyzeWindow()
    }
  }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)