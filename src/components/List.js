import React from 'react';
import ListItem from './ListItem';

const List = props => (
    <div className="w-full">
      <h1 className="text-3xl my-5">Todo List</h1>
      <p className="text-right">There are like {props.todoList.length} tasks</p>
      { props.todoList.map((todo, index) => (<ListItem key={index} todo={todo} />))}
    </div>
);

export default List;