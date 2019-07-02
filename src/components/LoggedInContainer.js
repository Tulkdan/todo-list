import React from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

const LoggedInContainer = (props) => {
  return (
    <div>
      <AddTodo addValue={props.addTodo} />
      <TodoList
        todoList={props.todoList}
        removeTodo={props.removeTodo}
      />
    </div>
  )
}

export default LoggedInContainer
