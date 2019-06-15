import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: 30,
    color: red[600]
  }
}))

const TodoList = (props) => {
  const classes = useStyles()

  return (
    <div id="todo-list">
      { props.todoList.map((todo, index) => (
        <Paper key={index} className={classes.root}>
          <Grid item xs={10}>
            <Typography>
              { todo }
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Icon className={classes.icon}>
              delete
            </Icon>
          </Grid>
        </Paper>
      ))}
    </div>
  )
}

export default TodoList;