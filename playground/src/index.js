/*
  Public Paths
  - with the small image, it will be parsed into raw data > it always works 
  - but for the big image, it will be renamed and put in build/ 
    > because of that, sometimes it won't work > we need to set build/ as public folder

  (***) inspect the url of the image before and after adding publicPath > we will see the difference

*/

import sum from './sum'
import './image_viewer'

const total = sum(10, 5)
console.log(total)
