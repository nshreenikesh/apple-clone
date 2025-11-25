import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import CardSlider from './components/CardSlider.jsx'
import Section from './components/Section.jsx'
import Product from './components/Product.jsx'
import ValueSection from './components/ValueSection.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <CardSlider/>
      <Section/>
      <Product/>
      <ValueSection/>
      <Footer/>
    </>
  )
}

export default App