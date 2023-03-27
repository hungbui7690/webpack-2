/*
  The Extract Text Plugin
  - loading css and javascript in a single file takes long time since we did not utilize the parallel loading feature from the browser
    > we need to tweak webpack a little bit 


  (***) Instructor > DEPRECATED > https://github.com/webpack-contrib/mini-css-extract-plugin
    > as suggestion, we should use: mini-css-extract-plugin
      > npm install --save-dev mini-css-extract-plugin
  - webpack.config.js


  - index.html > link to the new style file > build/style.css


*/

import sum from './sum'
import './image_viewer'

const total = sum(10, 5)
console.log(total)
