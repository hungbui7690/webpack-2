/*
  Handling Images with Webpack P1
  - right now, if we refresh the page continuously, we will see a little bit lag due to the fact that we need the load image outside 
    > it should be better if we host the image locally 

  - we need to packages to achieve this loaders: 
    > npm install --save-dev image-webpack-loader url-loader

  - webpack.config.js
    + url-loader will behave differently depends on the size of the image > we need to config it > next lesson

*/

import sum from './sum'
import './image_viewer'

const total = sum(10, 5)
console.log(total)
