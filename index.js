const {
    app,
    BrowserWindow,
    ipcMain
} = require('electron');

let mainWindow;

function createWindow(url) {
    var win = new BrowserWindow({
        width: 400,
        height: 400
    });
    win.loadURL(url)

}

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        maxHeight: 620,
        maxWidth: 800,
        minHeight: 620,
        minWidth: 800,
        
    });
    mainWindow.loadURL(`file://${__dirname}/index.html`);
});

app.on('quit', () => {
    mainWindow = null;
});
