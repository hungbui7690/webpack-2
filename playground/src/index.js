/*
  Why Do We Use Build Tools
  - pic

  Javascript Modules
  - pic

  The Purpose of Webpack
  - pic 

  Webpack in Action
  - pic
  
  - npm init -y
  - src/ 
  - create 2 files
      (***) index.js depends on sum.js 

*/

const sum = require('./sum')

const total = sum(10, 5)
console.log(total)
