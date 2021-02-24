import React, { useState } from "react";

import "./App.css";

export function Add(numbers) {
  if (numbers != "") {
    let sum = 0;
    if (numbers.split(",").map(Number).length <= 2) {
      numbers
        .split(",")
        .map(Number)
        .forEach((number) => {
          sum = number + sum;
        });
      return sum;
    } else {
      return "Error: The function can handle only up to two numbers";
    }
  } else return 0;
}

function App() {
  const [value, setValue] = useState("");
  const [submmitedValue, setSubmittedValue] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          onChange={(text) => setValue(text.target.value)}
          value={value}
        />
        <button onClick={() => setSubmittedValue(Add(value))}>Calculate</button>
        <h2>Result: {submmitedValue} </h2>
      </header>
    </div>
  );
}

export default App;
