# jsboilerplate
javascript starter pack

Download the zip file or git clone this repository.

To run your app on the latest stable version of node (with es2015) use [NVM](https://github.com/creationix/nvm) to manager your node version.
```
nvm install stable
```
Take note of the output with your node & npm version. We will be adding it to your package.json after the next step.


To initialize your project, run
```
npm init
```
Fill out the information for your package.json.
Add the following between license & dependencies. Replace the node & npm version numbers with the numbers from the output after your `nvm install stable`.
```
"engines": {
  "node": "5.10.1",
  "npm": "3.8.3"
},
```

Install your dependencies
```
npm install hapi inert gulp gulp-concat gulp-sass normalize.css --save
npm install browserify babelify babel-preset-es2015 babel-preset-react --save
npm install react react-dom react-redux redux radium --save

```

Add the following scripts to your package.json's npm scripts.
```
"build": "npm run build:assets && npm run build:client",
"build:assets": "gulp",
"build:client": "mkdir -p './ui/' && browserify --transform babelify --entry './client/index.jsx' --outfile './ui/index.js'",
"start": "npm run build && node server/index.js"
```
