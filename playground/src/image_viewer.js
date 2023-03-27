import './styles/image_viewer.css'

// ***
import big from '../assets/big.jpg'
import small from '../assets/small.jpg'

// ***
const smallImage = document.createElement('img')
smallImage.src = small
const bigImage = document.createElement('img')
bigImage.src = big

document.body.appendChild(smallImage)
document.body.appendChild(bigImage)
