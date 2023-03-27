/*
  Babel Configuration
  - create .babelrc
    > this is the config file for babel only
    > for later version of webpack, we can config babel directly in webpack.config.js 
    > here is just for learning purposes
*/

const sum = require('./sum')

const total = sum(10, 5)
console.log(total)
