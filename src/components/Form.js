import React from 'react';
import Button from './Button';

const Form = props => (
  <div className="flex w-full justify-center">
    <div className="flex items-center border-b border-b-2 border-teal-500 py-2 pt-10 w-1/2">
      <input
        className="appearance-none bg-transparect border-none w-full text-gray-700 leading-tight focus:outline-none"
        placeholder="Create a new task"
        value={props.task}
        onChange={props.handleOnChange}
      />
      <Button
        btnClass="bg-teal-500 border-teal-500 text-sm flex-shrink-0 text-white"
        title="Add task"
        eventClick={props.createTask}
      />
    </div>
  </div>
);

export default Form;