import React from 'react';

const CompleteButton = props => (
  <button className={props.btnClass + " font-semibold py-2 px-4 rounded"}>
    {props.title}
  </button>
);

export default CompleteButton;