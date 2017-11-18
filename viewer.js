const {shell, remote} = require('electron')
const webview = document.querySelector('webview')
const url = require('url')

webview.addEventListener('new-window', (e) => {
  const protocol = url.parse(e.url).protocol
  if (protocol === 'http:' || protocol === 'https:') {
    shell.openExternal(e.url)
  }
})

webview.addEventListener('will-navigate', (e) => {
    webview.loadURL(e);
})

const win = remote.getCurrentWindow()
win.addListener('new-window', (e) => {
    const protocol = url.parse(e.url).protocol
    if (protocol === 'http:' || protocol === 'https:') {
        shell.openExternal(e.url)
    }
})

const vie = remote.getCurrentWebContents()
vie.addListener('new-window', (e) => {
    const protocol = url.parse(e.url).protocol
    if (protocol === 'http:' || protocol === 'https:') {
        window.open(e.url)
    }
})

var ses = remote.getCurrentWebContents().session
ses.getCacheSize((size)=>{
    console.log(size)
})
