import React from 'react';
import './todoItem.css'
const TodoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
    return (
        <li>
            <label htmlFor=''>
                {title}
            </label>
            <div className='item-div'>
                <input
                    className='checksy'
                    type='checkbox'
                    checked={completed}
                    onChange={(e) => toggleTodo(id, e.target.checked)}
                />
                <button
                    className='buttonDelete'
                    onClick={() => deleteTodo(id)}
                >
                    Borrar
                </button>
            </div>
        </li>
    );
};

export default TodoItem;