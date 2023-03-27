/*
  System Import Calls
  - check network tab > when refresh > only load 1 js file 
    > after click on the button > load another js file

*/

const button = document.createElement('button')
button.innerText = 'Click Me'
button.onclick = () => {
  return import('./image_viewer.js').then((module) => {
    module.default() // run the function on image_viewer.js
  })
}

document.body.appendChild(button)
