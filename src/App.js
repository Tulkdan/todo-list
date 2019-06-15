import React, { Component } from 'react'
import NavBar from './components/NavBar'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

class App extends Component {
  state = {
    todoList: ['hahahaha']
  }

  constructor(props) {
    super(props)

    this.addTodo = this.addTodo.bind(this)
  }

  addTodo(value) {
    const { todoList } = this.state
    todoList.push(value)
    this.setState({ todoList })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <NavBar />
        <AddTodo addValue={this.addTodo} />
        <TodoList todoList={this.state.todoList} />
      </div>
    )
  }
}

export default App