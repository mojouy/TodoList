import React from 'react';
import { func, string } from 'prop-types';

export const Component = ({handleChange, handleClickAdd, inputValue}) => {
  return (
    <div className="todo-input">
      <input
        onChange={handleChange}
        placeholder="..."
        type="text"
        value={inputValue}
      />
      <button onClick={handleClickAdd}>Add</button>
    </div>
  );
}

Component.propTypes = {
  handleChange: func.isRequired,
  handleClickAdd: func.isRequired,
  inputValue: string
};

Component.displayName = 'TodoInput';
