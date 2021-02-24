import React, { useState } from "react";

import "./App.css";

function extractNumbersFromDelimiters(numbers) {
  let extractedNumbers = numbers
    .substring(2)
    .split(numbers.substring(2, 3))
    .map(Number);
  return extractedNumbers;
}

export function Add(numbers) {
  let sum = 0;
  let negativeNumbers = [];

  if (numbers != "") {
    let extractedNumbers = [];

    if (numbers.substring(0, 2) == "//") {
      extractedNumbers = extractNumbersFromDelimiters(numbers);
    } else {
      extractedNumbers = numbers.split(",").map(Number);
    }

    extractedNumbers.forEach((number) => {
      if (number <= 1000) {
        sum = number + sum;
        if (number < 0) {
          negativeNumbers.push(number);
        }
      }
    });
  }

  if (negativeNumbers.length == 0) {
    return sum;
  } else {
    throw "negatives not allowed " + negativeNumbers;
  }
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
