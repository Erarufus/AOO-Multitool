const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('node:path')

let win
const createWindow =() => {
     win = new BrowserWindow ({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile(path.join(__dirname, 'src/index.html'))
    win.webContents.openDevTools()
}

app.whenReady().then(() => {

    createWindow()

    //for MacOS behaviour
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })

     
});

ipcMain.on('nav-To', (event, page) => {
    const filePath = path.join(__dirname, 'src', page);

    win.loadFile(filePath)
});

//for WindowsLinux Behaviour
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })