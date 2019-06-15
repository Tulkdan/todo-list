import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from '@material-ui/core/Icon'

const useStyles = makeStyles(theme => ({
  icon: {
    fontSize: 30,
    color: red[600],
    '&:hover': {
      cursor: 'pointer'
    }
  },
  listItem: {
    padding: theme.spacing(2, 2),
    margin: theme.spacing(1),
    'background-color': 'rgba(185,171,182, 0.35)',
    'box-shadow': '-8px 11px 39px 1px rgba(0,0,0,0.2)',
    border: 'solid 1px',
    'border-radius': '5px'
  }
}))

const TodoList = (props) => {
  const classes = useStyles()

  return (
    <div id="todo-list">
      <List>
        { props.todoList.map((todo, index) => (
          <ListItem key={index} className={classes.listItem}>
            <ListItemText
              primary={todo}
            />
            <ListItemSecondaryAction>
              <Icon
                edge="end"
                className={classes.icon}
                onClick={props.removeTodo}
              >
                delete
              </Icon>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default TodoList;