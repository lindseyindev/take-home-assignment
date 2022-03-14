import "./App.css";
import React from "react";
import { inputCheck, textToLowerCase, textToUpperCase } from "./utils/helpers";

function App() {
  const [textInput, setTextInput] = React.useState(
    "Here is some example text."
  );
  const [conversionMode, setConversionMode] = React.useState("lowercase");
  const [textOutput, setTextOutput] = React.useState("");
  const [error, setError] = React.useState("");

  const handleRadioChange = (event) => {
    console.log(event.target.value);
    setConversionMode(event.target.value);
  };
  console.log(conversionMode);

  const handleTextareaChange = (event) => {
    console.log(event.target.value);
    setTextInput(event.target.value);
  };
  console.log(textInput);

  const handleSubmit = (event) => {
    console.log("handle submit check");
    event.preventDefault();
    console.log(event.target.value);
    inputCheck(textInput, setError);
    if (!error) {
      console.log("if condition check");
      conversionMode === "lowercase"
        ? setTextOutput(textToLowerCase(textInput))
        : setTextOutput(textToUpperCase(textInput));
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Career Lab text-case converter</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="form-control form-control__text">
          <label htmlFor="text">Text to be converted:</label>
          <textarea
            id="text"
            onChange={handleTextareaChange}
            value={textInput}
          />
        </div>
        <div className="form-control form-control__radio">
          <input
            type="radio"
            name="conversion"
            id="conversion-0"
            value="lowercase"
            checked={conversionMode === "lowercase"}
            onChange={handleRadioChange}
          />
          <label htmlFor="conversion-0">Convert text to lowercase</label>
        </div>
        <div className="form-control form-control__radio">
          <input
            type="radio"
            name="conversion"
            id="conversion-1"
            value="uppercase"
            checked={conversionMode === "uppercase"}
            onChange={handleRadioChange}
          />
          <label htmlFor="conversion-1">Convert text to uppercase</label>
        </div>
        <button className="submit-button" type="submit">Submit</button>
        <div className="form-control form-control__text u-mt-3">
          <label htmlFor="result">Converted text:</label>
          <output id="result" className="result">
            {textOutput}
          </output>
        </div>
      </form>
    </div>
  );
}

export default App;
