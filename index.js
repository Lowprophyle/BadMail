const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        maxHeight:620,
        maxWidth: 800,
        minHeight:620,
        minWidth: 800,
        frame: true,
        transparent: true
    });
    mainWindow.loadURL(`file://${__dirname}/index.html`);
});

app.on('quit', ()=>{
    mainWindow = null;
});