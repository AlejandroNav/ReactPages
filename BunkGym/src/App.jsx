import { useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Reasons from './components/Reasons/Reasons'

function App() {
  const [count, setCount] = useState(0)




  return (
    <>
      <Hero/>
      <Programs/>
      <Reasons/>
    </>
  )
}

export default App
