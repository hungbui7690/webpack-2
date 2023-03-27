/*
  Handling CSS with Webpack
  - loader
  - pic

  - create image_view.js
  - import in index.js > to let webpack knows and builds this file

*/

import sum from './sum'
import './image_viewer' // *** it's diff when import this file > actually, we don't import, but run that file

const total = sum(10, 5)
console.log(total)
