import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onClickTodo: PropTypes.func,
};
TodoList.defaultProps = {
    todoList: [],
    onClickTodo: null,
};

function TodoList(props) {
    const { todoList } = props;
    const { onCLickTodo } = props;
    const handleClick = (item, idx) => {
        if (!onCLickTodo) return;
        onCLickTodo(item, idx);
    };

    return (
        <ul className="todo-list">
            {todoList.map((item, idx) => (
                <li key={item.id} className={classNames({
                    'todo-item': true,
                    completed: item.status === 'completed',
                })}
                    onClick={() => handleClick(item, idx)}
                >{item.title}</li>
            ))
            }

        </ul >
    );
}

export default TodoList;