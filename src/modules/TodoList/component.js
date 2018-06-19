import React from 'react';
import { func, array } from 'prop-types';
import { uniqueId } from 'lodash';

import { Todo } from '../Todo';

export const Component = ({todoList, handleClickDelete}) => {
  const todoItems = todoList.map((todo, index) =>
    <Todo
      key={uniqueId()}
      onClickDelete={() => handleClickDelete(index)} text={todo.text}
    />
  );

  return (
    <div>{ todoList.length ? todoItems : 'You\'re all done 🌴'}</div>
  );
}

Component.propTypes = {
  todoList: array.isRequired,
  handleClickDelete: func.isRequired
};

Component.displayName = 'TodoList';
