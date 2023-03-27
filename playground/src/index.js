/*
  Code Splitting Intro
  - pic

///////////////////////////////////

  Code Splitting in Practice
  - pic: what we will build 
    > when first load, load index.js 
    > after click > load other file

*/

// ***
const button = document.createElement('button')
button.innerText = 'Click Me'
button.onclick = () => {}

document.body.appendChild(button)
