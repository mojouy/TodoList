import React, { Component, Fragment } from 'react';
import { uniqueId } from 'lodash';

import { Todo } from '../Todo';
import { TodoList } from '../TodoList';
import { TodoInput } from '../TodoInput';

export class App extends Component {

  state = {
    todo: '',
    todos: [ { text: 'Add your first todo' } ]
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { todos: prevTodos } = prevState;
    const { todos } = this.state;
    if ( prevTodos.length !== todos.length ) {
      document.querySelector('#counter').innerText = todos.length;
    }
  }

  handleChange = event => this.setState({ todo: event.target.value });

  handleClickAdd = () => {
    const { todo, todos } = this.state;
    todo && this.setState({ todos: [ ...todos, { text: todo } ] });
  };

  handleClickDelete = index => {
    // console.log(`Deleting todo number ${index}`);
    const { todos } = this.state;
    this.setState({ todos: [
      ...todos.slice(0, index),
      ...todos.slice(index + 1)
    ]});
  }

  render() {
    this.state.todos.forEach((todo, index) => {
      this.state.todos[index] = { ...todo, id: uniqueId() };
    });
    const { todo, todos } = this.state;
    return (
      <div className="todo-list">
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
