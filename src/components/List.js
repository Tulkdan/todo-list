import React from 'react';
import ListItem from './ListItem';

const List = () => (
    <div className="w-full">
      <h1 className="text-3xl my-5">Todo List</h1>
      <p className="text-right">There are like x tasks</p>
      <ListItem />
    </div>
);

export default List;