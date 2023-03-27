/*
  Babel Setup for ES2015
  - a kind of loaders
  - transpile

  > npm install --save-dev babel-loader babel-core babel-preset-env
  (***) update webpack & webpack-cli first, because babel-loader require version higher than 4.0

  - webpack.config.js
*/

const sum = require('./sum')

const total = sum(10, 5)
console.log(total)
