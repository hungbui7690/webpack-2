/*
  The Style and CSS Loaders
  - create styles/image_viewer.css
  - import 

  (***) without config, webpack cannot recognize .css file
    > need to install 2 packages: 
      + css-loader
      + style-loader

  > npm install --save-dev css-loader style-loader
  - webpack.config.js

  (***) after build, we inspect > webpack creates the style tag and add the style there
    > we think that it will bundle into 1 single css file, but not > it will create a style tag and add the style there

*/

import sum from './sum'
import './image_viewer'

const total = sum(10, 5)
console.log(total)
