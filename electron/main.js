const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      minWidth: 250,
      height: 600,
      minHeight: 150,
      icon: path.join(__dirname, 'content/favicon/favicon-32x32.png'),
      webPreferences: {
          nodeIntegration: true
      }
    })
  
    win.setTitle('RoadPad')
    win.setMenuBarVisibility(false)
    win.loadFile('index.html')
  }

  app.whenReady().then(() => {
    createWindow()
  })

  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
  })