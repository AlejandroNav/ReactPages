import { useState } from 'react'
import './app.css'
import './styles.css'
function App() {
  const [newItem, setNewItem] = useState("")
  return (
    <div className='main-section'>
      <form className='new-item-form' action="">
        <div className="row">
          <label htmlFor="item">Nueva Entrada</label>
          <input type="text" id='item' />
        </div>
        <button className='button'>Anadir</button>
      </form>
      <h1 className='header'>Lista por hacer</h1>
      <ul className='list'>
        <li>
          <label htmlFor="">
            <input type="checkbox" name="" id="" />
            Item 1
          </label>
          <button className='buttonDelete'>Borrar</button>
        </li>
        <li>
          <label htmlFor="">
            <input type="checkbox" name="" id="" />
            Item 1
          </label>
          <button className='buttonDelete'>Borrar</button>
        </li>
        <li>
          <label htmlFor="">
            <input type="checkbox" name="" id="" />
            Item 1
          </label>
          <button className='buttonDelete'>Borrar</button>
        </li>
      </ul>
    </div>
  )
}

export default App
