import { useState } from 'react'
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
