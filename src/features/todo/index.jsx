import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

Todofeatures.propTypes = {
    todoList: PropTypes.array,
};

function Todofeatures(props) {
    const todoList = [
        { id: 1, title: 'eat' },
        { id: 2, title: 'code' },
        { id: 3, title: 'sleep' },
    ];


    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList} />
        </div>
    );
}

export default Todofeatures;