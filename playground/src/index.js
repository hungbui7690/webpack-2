/*
  On Demand Code Loading
  - pic

  - image_viewer.js
  - index.js


  (***) if the image_view.js depends on many dependencies > it will be import as well
  (***) System.import() return promise (DEPRECATED)
    > return import().then()
*/

const button = document.createElement('button')
button.innerText = 'Click Me'
button.onclick = () => {
  // *** this will load the file when click on the button
  return import('./image_viewer.js').then((module) => console.log(module))
}

document.body.appendChild(button)
