import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
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
    this.removeTodo = this.removeTodo.bind(this)
  }

  addTodo(value) {
    const { todoList } = this.state
    todoList.push(value)
    this.setState({ todoList })
  }

  removeTodo(index) {
    const { todoList } = this.state
    todoList.splice(index, 1);
    this.setState({ todoList })
  }

  render() {
    return (
      <div>
        <NavBar />
        <Container maxWidth="md" id="content">
          <AddTodo addValue={this.addTodo} />
          <TodoList
            todoList={this.state.todoList}
            removeTodo={this.removeTodo}
          />
        </Container>
      </div>
    )
  }
}

export default App