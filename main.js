const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 300,
    height: 200,
    alwaysOnTop: true,
    resizable: false,
    frame: true, // sonra false yapıp widget yapabiliriz
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);