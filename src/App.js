import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], task: '' };

    this.createTask = this.createTask.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  createTask() {
    if (!this.state.task) return;
    const todos = this.state.todos;
    todos.push(this.state.task);
    this.setState({ todos, task: '' });
  }

  handleOnChange(event) {
    this.setState({ task: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container mx-auto px-20">
          <Form createTask={this.createTask} handleOnChange={this.handleOnChange} task={this.state.task} />
          <List todoList={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
