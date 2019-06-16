import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from '@material-ui/core/Icon'

const useStyles = makeStyles(theme => ({
  icon: {
    fontSize: 30,
    color: green[600],
    borderRadius: "50%",
    padding: theme.spacing(1),
    '&:hover': {
      cursor: 'pointer',
      fontWeight: "bold",
      backgroundColor: green[100],
    }
  },
  listItem: {
    padding: theme.spacing(2, 2),
    margin: theme.spacing(1),
    backgroundColor: 'rgba(185,171,182, 0.35)',
    boxShadow: '-8px 11px 39px 1px rgba(0,0,0,0.2)',
    border: 'solid 1px',
    borderRadius: '5px'
  }
}))

const TodoListItem = (props) => {
  const classes = useStyles()

  return (
    <ListItem key={props.index} className={classes.listItem}>
      <ListItemText
        primary={props.todo}
      />
      <ListItemSecondaryAction>
        <Icon
          edge="end"
          className={classes.icon}
          onClick={props.action}
        >
          { props.icon }
        </Icon>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default TodoListItem