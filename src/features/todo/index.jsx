import React, { useState } from 'react';
import TodoList from './components/TodoList';


function Todofeatures(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'eat',
            status: 'completed',
        },
        {
            id: 2,
            title: 'code',
            status: 'new',
        },
        {
            id: 3,
            title: 'sleep',
            status: 'new',
        },
    ];
    const [todoList, setTodoList] = useState(initTodoList);
    const handleClick = (item, idx) => {
        const newTodoList = [...todoList];
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        }
        setTodoList(newTodoList);
    };
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList} onCLickTodo={handleClick} />
        </div>
    );
}

export default Todofeatures;