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
    this.completeTask = this.completeTask.bind(this);
  }

  createTask() {
    if (!this.state.task) return;
    const { todos } = this.state;
    todos.push(this.state.task);
    this.setState({ todos, task: '' });
  }

  handleOnChange(event) {
    this.setState({ task: event.target.value });
  }

  completeTask(index) {
    const { todos } = this.state;
    todos.splice(index, 1);
    this.setState({ todos });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container mx-auto lg:px-20 sm:px-5">
          <Form createTask={this.createTask} handleOnChange={this.handleOnChange} task={this.state.task} />
          <List todoList={this.state.todos} completeTask={this.completeTask} />
        </div>
      </div>
    );
  }
}

export default App;
