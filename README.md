# cspace-ui-plugin-profile-cinefiles

[![build status](https://travis-ci.org/cspace-deployment/cspace-ui-plugin-profile-cinefiles.js.svg?branch=master)](https://travis-ci.org/cspace-deployment/cspace-ui-plugin-profile-cinefiles.js)

A cspace-ui plugin containing configuration for the CineFiles collection of the  UC Berkeley Art Museum and Pacific Film Archive.

## Installation

Using git:

```
$ git clone https://github.com/cspace-deployment/cspace-ui-plugin-profile-cinefiles.js.git
$ cd cspace-ui-plugin-profile-cinefiles.js
$ npm install
```

## Development

To run the profile:

```
$ npm run devserver
```

Then open a browser to http://localhost:8080. This runs the cspace-ui application, configured with
this plugin.

By default, the application served from the dev server will use the CollectionSpace services API
located at http://localhost:8180. This assumes that a CineFiles-customized CollectionSpace server
has been installed locally, or on a local VM. Source code to build a server is available:

- CineFiles 5.0 services layer: https://github.com/cspace-deployment/services/tree/cinefiles_5.0
- CineFiles 5.0 application layer: https://github.com/cspace-deployment/application/tree/cinefiles_5.0

To run the application against CollectionSpace services located on a different host, edit
index.html, and change the `serverUrl` configuration property. For example, to use a server running
on nightly.collectionspace.org, port 8180, use the settings:

```
cspaceUI({
  serverUrl: 'http://nightly.collectionspace.org:8180',
  // ...
});
```

This project installs a compatible published version of cspace-ui as a development dependency, and
runs this plugin with that version of cspace-ui. During development it may be necessary to run this
plugin against an unreleased version of cspace-ui, for example to use features that are being
developed in cspace-ui concurrently with the development of this plugin. To do this, download the
source code of the cspace-ui project, and ensure that `npm install` has been run. Then run
`npm link` in that project (with superuser privileges). In this project, run `npm link cspace-ui`.
This replaces the cspace-ui dependency with a symbolic link to the local cspace-ui project
directory, so that any changes made to the cspace-ui source code will be visible to this project,
once `npm run build` has been run in cspace-ui.
