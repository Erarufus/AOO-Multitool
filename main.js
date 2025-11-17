const {app, BrowserWindow} = require('electron');
const createWindow =() => {
    const win = new BrowserWindow ({
        width: 800,
        Height: 600
    })
    win.loadFile('index.html')
}
app.whenReady().then(() => {
    createWindow()
})