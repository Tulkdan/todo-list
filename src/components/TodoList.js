import React from 'react'
import List from '@material-ui/core/List'
import ListItem from './TodoListItem'

const TodoList = (props) => {
  return (
    <div id="todo-list">
      <List>
        { props.todoList.map((todo, index) => (
          <ListItem
            index={index}
            todo={todo}
            action={props.removeTodo}
            icon="done"
          />
        ))}
      </List>
    </div>
  )
}

export default TodoList;