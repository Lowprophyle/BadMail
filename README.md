# BadMail

Personal email software perfect for a student of University of Nottingham Malaysia Campus. It has 2 [Gmail/Inbox](https://inbox.google.com) viewers, the university's [Moodle](https://moodle.nottingham.ac.uk) and [Outlook viewer](https://email.nottingham.edu.my), a [Google Keep](https://keep.google.com) viewer for taking notes and a [GitHub](https://github.com) viewer.

The viewers currently use the `<webview>` element of [Electron](https://electron.atom.io). I plan to use something more dedicated in the releases.

### To-do List
- [ ] Add Going Back Function
- [x] Added GitHub viewer
- [x] Update Package.json
- [ ] Make unresizable view for Mac
- [ ] Fix frame properties for Mac
- [ ] ...

## Build From Source

Packaging works for linux only.

```Bash
# Install npm packages -- REQUIRED
$ npm install

# Run Program without packaging
$ npm start

# Make application
$ npm run package:linux

# Build debian package
$ npm run build:linux

```



