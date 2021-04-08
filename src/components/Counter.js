import React from "react";

const Counter = props => {
  return (
    <>
      <h3>The count is: {props.count}</h3>
      <button onClick={props.onAddClick} disabled={props.input === 0}>
        Add {props.input}
      </button>
      <button onClick={props.onDecClick} disabled={props.count === 0}>
        Substract {props.count}
      </button>
      <button onClick={props.onResetClick} disabled={props.count === 0}>
        Reset
      </button>
    </>
  );
};

export default Counter;
