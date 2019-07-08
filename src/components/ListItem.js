import React from 'react';
import Button from './Button';

const ListItem = props => (
  <div className="w-full inline-flex border border-gray-400 px-4 py-3 rounded">
    <p className="text-semibold flex-1 py-2">{props.todo}</p>
    <Button btnClass="bg-red-600 text-white" title="Complete" />
  </div>
);

export default ListItem;