const {app, BrowserWindow} = require('electron')

let mainWin;

const createWindow = () => {
  mainWin = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWin.loadURL('http://localhost:3000');
}


app.whenReady().then(createWindow); 