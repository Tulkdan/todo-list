import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1)
  }
}))

const AddTodo = (props) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    todo: ''
  })

  const add = () => {
    if (!values.todo.length) {
      return
    }
    props.addValue(values.todo)
    setValues({ todo: '' })
  }

  const handleChange = event => {
    setValues({ todo: event.target.value })
  }

  return (
    <Container maxWidth="sm">
      <TextField
        label="Todo"
        className={classes.textField}
        value={values.todo}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <Button
        variant="outlined"
        size="large"
        color="primary"
        className={classes.button}
        onClick={add}
      >
        Add
      </Button>
    </Container>
  )
}

export default AddTodo