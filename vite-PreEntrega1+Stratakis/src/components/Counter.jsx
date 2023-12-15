import React from 'react';

const Counter = ({ count, setCount }) => {
  return (
    <div>
      <h4>{count}</h4>
      <button className="button" onClick={() => setCount(count + 1)}>+</button>
      <button className="button" onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>
    </div>
  );
};

export default Counter;
