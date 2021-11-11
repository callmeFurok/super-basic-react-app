import React, { useState } from 'react';

const Counter = ({ initialValue, factor }) => {
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => {
    setCounter(counter + factor);
  };

  const handleRemove = () => {
    setCounter(counter - factor);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <hr />
      <button onClick={handleAdd}>Add</button>

      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default Counter;
