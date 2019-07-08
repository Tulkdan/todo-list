import React from 'react';
import Button from './Button';

const ListItem = props => {
  function onHandleClick() {
    props.completeTask(props.index);
  }

  return (
    <div className="w-full inline-flex border border-gray-400 px-4 py-3 rounded mb-1">
      <p className="text-semibold flex-1 py-2">{props.todo}</p>
      <Button btnClass="bg-red-600 text-white" title="Complete" eventClick={onHandleClick} />
    </div>
  );
};

export default ListItem;