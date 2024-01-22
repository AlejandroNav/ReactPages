import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
    if (todos.length === 0) {
        return <p>No hay elementos por hacer.</p>;
    }

    return (
        <ul className='list'>
            {todos.map((todo) => (
                <TodoItem
                    {...todo}
                    key={todo.id}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    );
};

export default TodoList;