import React, { useState } from 'react';
import TodoFrom from './components/TodoFrom';
import TodoList from './components/TodoList';


function TodoRemove() {
    const [todoList, setTodoList] = useState(() => {
        const initTodoList = [
            {
                id: 1,
                title: 'code',
            },
            {
                id: 2,
                title: 'eat',
            },
            {
                id: 3,
                title: 'sleep',
            },
        ];
        return initTodoList;
    });
    function handleTodoClickItem(item) {
        console.log(item);
        const index = todoList.findIndex(x => x.id === item.id);
        if (index < 0) return;
        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    }
    function handleOnSubmit(fromValues) {
        const newTodoList = [...todoList];
        const newTodoItem = {
            id: newTodoList.length + 1,
            title: fromValues.title,
        }
        newTodoList.push(newTodoItem);
        setTodoList(newTodoList);
        console.log(todoList);
    }
    return (
        <div>
            <TodoFrom onSubmit={handleOnSubmit} />
            <TodoList todoList={todoList} todoClickItem={handleTodoClickItem} />
        </div>
    );
}

export default TodoRemove;