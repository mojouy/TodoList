import React, { Fragment } from 'react';
import { func, array } from 'prop-types';

import { Todo } from '../Todo';

export const Component = ({todoList, handleClickDelete}) => {
  const todoItems = todoList.map((todo, index) =>
    <Todo
      key={todo.id}
      onClickDelete={() => handleClickDelete(index)} text={todo.text}
    />
  );

  return (
    <Fragment>
      <h1>todos</h1>
      <p><span id="counter">1</span> remaining</p>
      <div>{ todoList.length ? todoItems : 'You\'re all done 🌴'}</div>
    </Fragment>
  );
}

Component.propTypes = {
  todoList: array.isRequired,
  handleClickDelete: func.isRequired
};

Component.displayName = 'TodoList';
