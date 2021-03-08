import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import TodoList from './components/TodoList';
import queryString from 'query-string';
import TodoForm from './components/TodoForm';

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
    };
    setTodoList(newTodoList);
  };
  const history = useHistory();
  const match = useRouteMatch();
  const location = useLocation();
  const [filterStatus, setFilterStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || 'all';
  });
  useEffect(() => {
    const searchString = queryString.parse(location.search);
    setFilterStatus(searchString.status || 'all');
  }, [location.search]);
  const handleClickShowAll = () => {
    // setFilterStatus('all');
    const queryParams = { status: 'all' };
    console.log(history);
    history.push({
      patchname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleClickCompleted = () => {
    // setFilterStatus('completed');
    const queryParams = { status: 'completed' };
    console.log(history);
    history.push({
      patchname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleClickNew = () => {
    // setFilterStatus('new');
    const queryParams = { status: 'new' };
    console.log(history);
    history.push({
      patchname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const todoListFilted = useMemo(() => {
    return todoList.filter((item) => filterStatus === 'all' || item.status === filterStatus);
  }, [todoList, filterStatus]);
  function handleOnSubmit(values) {
    const newTodo = {
      id: todoList.length + 1,
      status: 'new',
      title: values.title,
    };
    const newTodoList = [...todoList, newTodo];

    setTodoList(newTodoList);
  }
  return (
    <div>
      <h3>Todo List</h3>
      <TodoForm onSubmit={handleOnSubmit} />
      <TodoList todoList={todoListFilted} onCLickTodo={handleClick} />
      <button onClick={handleClickShowAll}>Show All</button>
      <button onClick={handleClickCompleted}>Show Completed</button>
      <button onClick={handleClickNew}>Show New</button>
    </div>
  );
}

export default Todofeatures;
