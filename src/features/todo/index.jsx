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
    const [filterStatus, setFilterStatus] = useState('all');
    const handleClickShowAll = () => {
        setFilterStatus('all');
    }
    const handleClickCompleted = () => {
        setFilterStatus('completed');
    }
    const handleClickNew = () => {
        setFilterStatus('new');
    }
    const todoListFilted = todoList.filter((item) => (filterStatus === 'all' || item.status === filterStatus));
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoListFilted} onCLickTodo={handleClick} />
            <button onClick={handleClickShowAll} >Show All</button>
            <button onClick={handleClickCompleted} >Show Completed</button>
            <button onClick={handleClickNew} >Show New</button>

        </div>
    );
}

export default Todofeatures;