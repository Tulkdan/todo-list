import React, { Component } from 'react';
import Form from './Form/Form';
import List from './Form/List';

const COLLECTION = 'todos';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], task: '', db: props.db };

    this.createTask = this.createTask.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.completeTask = this.completeTask.bind(this);
  }

  createTask() {
    const { task, db } = this.state;
    if (!task) return;
    db.collection(COLLECTION).add({
      todo: task,
      created_at: new Date().toISOString()
    }).then(() => this.setState({ task: '' }))
    .catch(error => console.log(`Error adding document ${error}`));
  }

  componentDidMount() {
    const { db } = this.state;
    db.collection(COLLECTION)
      .onSnapshot(data => {
        this.setState({ todos: [] });
        const { todos } = this.state;
        data.docs.forEach(task => 
          todos.push({
            ...task.data(),
            id: task.id
          })
        );
        this.setState({ todos });
      });
  }

  handleOnChange(event) {
    this.setState({ task: event.target.value });
  }

  completeTask(taskId) {
    const { db } = this.state;
    db.collection(COLLECTION).doc(taskId).delete()
      .catch(error => console.log(`Error to complete task ${taskId}`, error));
  }

  render() {
    const { todos, task } = this.state;

    return (
      <div className="container mx-auto lg:px-20 sm:px-5">
        <Form createTask={this.createTask} handleOnChange={this.handleOnChange} task={task} />
        <List todoList={todos} completeTask={this.completeTask} />
      </div>
    );
  }
};

export default FormContainer;