/*
  Webpack Installation and Configuration
  - pic

  - npm install --save-dev webpack@2.2.0-rc.0
  - create webpack.config.js

  - Entry Point Config: 
    + start that entry file
    + use that entry file to build modules around it


  - when we install webpack globally > we just have only 1 version of webpack 
  - locally: depends on each project, we will have multiple versions of webpack


  - package.json
      "build": "webpack"

  - npm run build
  
*/

const sum = require('./sum')

const total = sum(10, 5)
console.log(total)
