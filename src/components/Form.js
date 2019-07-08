import React from 'react';

const Form = () => (
  <div className="flex w-full justify-center">
    <div className="flex items-center border-b border-b-2 border-teal-500 py-2 pt-10 w-1/2">
      <input
        className="appearance-none bg-transparect border-none w-full text-gray-700 leading-tight focus:outline-none"
        placeholder="Create a new task"
      />
      <button className="flex-shrink-0 bg-teal-500 border-teal-500 text-sm border-4 text-white py-1 px-2 rounded">
        Add task
      </button>
    </div>
  </div>
);

export default Form;