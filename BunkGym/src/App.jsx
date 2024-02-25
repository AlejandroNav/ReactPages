import { useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Reasons from './components/Reasons/Reasons'
import Reasons2 from './components/Reasons2/Reasons2'
import Planes from './components/Planes/Planes'
import Plans from './components/Plans/Plans'

function App() {
  const [count, setCount] = useState(0)




  return (
    <>
      <Hero/>
      <Programs/>
      <Reasons/>
      <Reasons2/>
      <Planes/>
      <Plans/>
    </>
  )
}

export default App
