import './styles/image_viewer.css'
import small from '../assets/small.jpg'

// (***) put into a function
export default () => {
  const image = document.createElement('img')
  image.src = small

  document.body.appendChild(image)
}
