import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './react-style.scss'
import { gsap } from "gsap"
// import App from './App.jsx'


import Lesson from './Lesson.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Lesson />
  </StrictMode>,
)
