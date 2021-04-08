import React, { useState } from "react";

import Counter from "./components/Counter";
import UserInput from "./components/UserInput";
import Title from "./components/Title";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function handleAddition() {
    setCount(prevCount => prevCount + parseInt(input));
  }
  function handleDecrement() {
    setCount(prevCount => prevCount - input);
  }
  function handleReset(event) {
    event.preventDefault();
    setCount(0);
    setInput(0);
  }
  function handleInputChange(event) {
    setInput(event.target.value);
  }

  return (
    <>
      <Title />
      <UserInput onInputChange={handleInputChange} />
      <Counter
        input={input}
        count={count}
        onResetClick={handleReset}
        onDecClick={handleDecrement}
        onAddClick={handleAddition}
      />
    </>
  );
}

export default App;
