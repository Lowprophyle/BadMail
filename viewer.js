const {shell, remote} = require('electron')
const webview = document.querySelector('webview')
const url = require('url')

webview.addEventListener('new-window', (e) => {
  const protocol = url.parse(e.url).protocol
  if (protocol === 'http:' || protocol === 'https:') {
    shell.openExternal(e.url)
  }
})

const win = remote.getCurrentWindow()
win.addListener('new-window', (e) => {
    const protocol = url.parse(e.url).protocol
    if (protocol === 'http:' || protocol === 'https:') {
        shell.openExternal(e.url)
    }
})
