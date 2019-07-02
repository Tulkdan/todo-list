import React, { Component } from 'react'
import firebase from 'firebase'
import Container from '@material-ui/core/Container'
import NavBar from './components/NavBar'
import LoggerInContainer from './components/LoggedInContainer'

class App extends Component {
  state = {
    todoList: []
  }

  constructor(props) {
    super(props)

    this.state = {
      user: null,
      todoList: []
    }

    this.addTodo = this.addTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleSignOut = this.handleSignOut.bind(this)
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  }

  handleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
  }

  handleSignOut() {
    firebase.auth().signOut()
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
    let isLogged

    if (this.user) {
      isLogged = <LoggerInContainer
        addTodo={this.addTodo}
        todoList={this.state.todoList}
        removeTodo={this.removeTodo} />
    }

    return (
      <div>
        <NavBar
          user={this.state.user}
          signIn={this.handleSignIn}
          signOut={this.handleSignOut}
        />
        <Container maxWidth="md" id="content">
          { isLogged }
        </Container>
      </div>
    )
  }
}

export default App
