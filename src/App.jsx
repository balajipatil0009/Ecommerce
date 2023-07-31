import { useState } from 'react'
import Slider from "react-slick"
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";
import './App.css'

import Home from './componunts/Home';

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  }
  return (
    <div>
         <Home/>   
    </div>
  )
}

export default App
