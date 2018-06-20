import React from 'react';
import { func, string } from 'prop-types';

export const Component = ({text, onClickDelete}) =>
  <div className="todo-item">
    {text}
    <span onClick={onClickDelete}>&times;</span>
  </div>;

Component.propTypes = {
  onClickDelete: func.isRequired,
  text: string
};

Component.displayName = 'Todo';
