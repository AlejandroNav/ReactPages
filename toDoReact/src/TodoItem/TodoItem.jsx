import React from 'react';

const TodoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
    return (
        <li>
            <div><label htmlFor=''>
                {title}
            </label>
            <input
                type='checkbox'
                checked={completed}
                onChange={(e) => toggleTodo(id, e.target.checked)}
            /></div>
            <button
                className='buttonDelete'
                onClick={() => deleteTodo(id)}
            >
                Borrar
            </button>
        </li>
    );
};

export default TodoItem;