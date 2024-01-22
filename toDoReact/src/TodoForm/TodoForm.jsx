import React, { useState } from 'react'
import './todoForm.css'
const TodoForm = ({ addTodoProp }) => {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return
        addTodoProp(newItem)
        setNewItem("");
    }
    return (
        <form onSubmit={handleSubmit} className='new-item-form' action="">
            <div className="row">
                <label htmlFor="item" className='item-desc'>Nueva Entrada</label>
                <hr />
                <input
                    className='todoForm-input'
                    type="text"
                    id='item'
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                />
            </div>
            <button className='todoForm-button'>Anadir</button>
        </form>
    )
}

export default TodoForm