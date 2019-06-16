import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
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

  const handleChange = ({ target }) => {
    setValues({ todo: target.value })
  }

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Typography variant="h3" gutterBottom>
        Create a new todo!
      </Typography>
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