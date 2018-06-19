import React, { Component } from 'react';

import { Todo } from '../Todo';
import { TodoList } from '../TodoList';
import { TodoInput } from '../TodoInput';

export class App extends Component {
  state = {
    todo: '',
    todos: [ { text: 'Add your first todo' } ]
  }

  handleChange = event => this.setState({ todo: event.target.value });

  handleClickAdd = () => {
    const { todo, todos } = this.state;
    todo && this.setState({ todos: [ ...todos, { text: todo } ] });
  };

  handleClickDelete = index => {
    const { todos } = this.state;
    this.setState({ todos: [
      ...todos.slice(0, index),
      ...todos.slice(index + 1)
    ]});
  }

  render() {
    const { todo, todos } = this.state;
    return (
      <div className="todo-list">
        <h1>todos</h1>
        <p>{todos.length} remaining</p>
        <TodoList
          todoList={todos}
          handleClickDelete={this.handleClickDelete}
        />
        <TodoInput
          handleChange={this.handleChange}
          handleClickAdd={this.handleClickAdd}
          inputValue={todo}
        />
      </div>
    )
  }
}

Component.displayName = 'App';
