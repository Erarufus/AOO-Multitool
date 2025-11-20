const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    setTitle: (title) => ipcRenderer.send('set-title', title)
})

contextBridge.exposeInMainWorld('api', {
  navTo: (page) => ipcRenderer.send('nav-To', page)

});