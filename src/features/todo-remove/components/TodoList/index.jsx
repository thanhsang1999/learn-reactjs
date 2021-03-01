import PropTypes from 'prop-types';
import React from 'react';

TodoList.propTypes = {
    todoList: PropTypes.array,
    todoClickItem: PropTypes.func,
};
TodoList.defaultProps = {
    todoList: [],
    todoClickItem: null,
};

function TodoList(props) {
    const { todoList } = props;
    const { todoClickItem } = props;
    function handleTodoClickItem(item) {
        if (!todoClickItem) return;
        todoClickItem(item);
    }
    return (
        <div>
            <ul>
                {todoList.map((item) => (
                    <li key={item.id} onClick={() => handleTodoClickItem(item)}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;