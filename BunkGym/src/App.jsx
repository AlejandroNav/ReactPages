import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <Programs/>
    </>
  )
}

export default App
