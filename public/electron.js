xml2js = require('xml2js');

var parser = new xml2js.Parser();
const data = require("../data")
const {
  app,
  BrowserWindow,
  ipcMain,
  Menu,
  dialog
} = require('electron');
const fs = require('fs')
const Calculator = require('../src/utils/calculator')

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
    modal: true,
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
    modal: true,
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

ipcMain.on("closeMaterialModal", (event, arg) => {
  materialModalWindow.close()
})

ipcMain.on('showMaterialModal', (event, arg) => {
  createMaterialModalWindow();
})

function createSectionsWindow() {
  const sectionWindow = new BrowserWindow({
    minWidth: 1160,
    minHeight: 750,
    width: 1160,
    height: 750,
    title: 'Sections',
    parent: win,
    modal: true,
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
    width: 500,
    height: 400,
    title: 'Connections',
    parent: win,
    modal: true,
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
    minWidth: 380,
    minHeight: 250,
    maxWidth: 380,
    maxHeight: 250,
    title: 'Seismic resisting frames type',
    parent: win,
    modal: true,
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
    width: 420,
    height: 400,
    minWidth: 420,
    minHeight: 400,
    maxWidth: 420,
    maxHeight: 400,
    title: "Structure's properties",
    parent: win,
    modal: true,
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
    modal: true,
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

function createStabilityResultWindow() {
  const stabilityWindow = new BrowserWindow({
    width: 1350,
    height: 700,
    title: 'Stability result',
    parent: win,
    icon: __dirname + '/Western_Sydney_University_emblem.png',
    webPreferences: {
      nodeIntegration: true,
      preload: __dirname + '/preload.js'
    }
  });
  stabilityWindow.removeMenu()
  if (app.isPackaged) {
    stabilityWindow.loadFile('./.next/server/pages/stabilityResult.html');
  } else {
    stabilityWindow.loadURL('http://localhost:3000/stabilityResult');
  }
}

function createDesignForServiceabilityResult() {
  const designForServiceabilityResult = new BrowserWindow({
    width: 1350,
    height: 700,
    title: 'Design for serviceability result',
    parent: win,
    icon: __dirname + '/Western_Sydney_University_emblem.png',
    webPreferences: {
      nodeIntegration: true,
      preload: __dirname + '/preload.js'
    }
  });
  designForServiceabilityResult.removeMenu()
  if (app.isPackaged) {
    designForServiceabilityResult.loadFile('./.next/server/pages/designForServiceability.html');
  } else {
    designForServiceabilityResult.loadURL('http://localhost:3000/designForServiceability');
  }
}

function createSeismicPerformanceFactors() {
  const seismicPerformanceFactors = new BrowserWindow({
    width: 900,
    height: 480,
    title: 'Seismic performance factors',
    parent: win,
    icon: __dirname + '/Western_Sydney_University_emblem.png',
    webPreferences: {
      nodeIntegration: true,
      preload: __dirname + '/preload.js'
    }
  });
  seismicPerformanceFactors.removeMenu()
  if (app.isPackaged) {
    seismicPerformanceFactors.loadFile('./.next/server/pages/seismicPerformanceFactors.html');
  } else {
    seismicPerformanceFactors.loadURL('http://localhost:3000/seismicPerformanceFactors');
  }
}

function createPdfWindow(name) {
  const pdfWindow = new BrowserWindow({
    title: 'PDF',
    parent: win,
    icon: __dirname + '/Western_Sydney_University_emblem.png',
    webPreferences: {
      nodeIntegration: true,
      preload: __dirname + '/preload.js'
    }
  });
  pdfWindow.removeMenu()
  pdfWindow.loadFile(`./public/${name}`);
}

ipcMain.on('show-pdf', (event, name) => {
  createPdfWindow(name)
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


ipcMain.on('read-file', (event, path) => {
  filePath = path
})

ipcMain.handle('get-properties', () => {
  const fileData = fs.readFileSync(__dirname + '/Ali.xml', 'utf8')
  let data;
  parser.parseString(fileData, function (err, result) {
    data = [...result.PROPERTY_FILE.STEEL_BOX, ...result.PROPERTY_FILE.STEEL_CHANNEL, ...result.PROPERTY_FILE.STEEL_I_SECTION]
  });

  return data
})


const template = [{
    label: 'File',
    submenu: [{
        label: "new",
        click() {
          dialog.showSaveDialog({
            defaultPath:'new-file',
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
  },
  {
    label: 'Result',
    submenu: [{
        label: 'Stability result',
        click() {
          createStabilityResultWindow()
        }
      },
      {
        label: 'Design for serviceability result',
        click() {
          createDesignForServiceabilityResult()
        }
      },
      {
        label: 'Seismic performance factors',
        click() {
          createSeismicPerformanceFactors()
        }
      }
    ]
  }
]

ipcMain.handle('get-file-data', async (event, data) => {
  const fileData = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(fileData)
})

ipcMain.on('save-file', (event, data) => {
  fs.writeFile(filePath, JSON.stringify(data), function (err) {
    if (err) {
      console.log(err)
    }
  })
})

ipcMain.on("load-file", (event, arg) => {
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
})

ipcMain.handle('get-result', async (event, arg) => {
  const fileData = fs.readFileSync(filePath, 'utf8')
  const data = JSON.parse(fileData)
  const calculator = new Calculator(data.sections, {
    heightOfStorey: data.structuresProperty.heightOfStorey * 1000,
    lengthOfSpan: data.structuresProperty.lengthOfSpan * 1000
  }, data.connections.interModularConnection[5].value, data.connections.intraModularConnection[5].value)
  const result = calculator.getResult()
  return result
})

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)