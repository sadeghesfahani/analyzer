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
        submenu: [{
            label: 'Column',
            click() {
              createMaterialWindow()
            }
          },
          {
            label: 'Floor beams',
            click() {
              createMaterialWindow()
            }
          },
          {
            label: 'Ceilig beams',
            click() {
              createMaterialWindow()
            }
          }
        ]
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
    ]
  }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)