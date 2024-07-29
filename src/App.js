import "./App.css";
import React, { useState } from "react";

function App() {
  // Making states
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  // Logic
  let calcBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0 || weight === '' || height === '') {
      alert("Please enter valid weight and height.");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));
      if (bmi < 25) {
        setMessage("You are underweight.");
      } else if (bmi > 25 && bmi < 30) {
        setMessage("You are healthy.");
      } else {
        setMessage("You are over weight.");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div>
      <div className="container">
        <h2 id="title">BMI CALCULATOR</h2>

        <form>
          <div className="input-fields">
            <label>Weight (ibs):</label>
            <input
              type="text"
              placeholder="Enter your weight here..."
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className="input-fields">
            <label>Height (cm):</label>
            <input
              type="text"
              placeholder="Enter your height here..."
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <button className="btn" type="submit" onClick={calcBmi}>
            Submit
          </button>
          <button className="btn reload-btn" type="submit" onClick={reload}>
            Reload
          </button>

          <div className="result">
            <h3>Your BMI is : {bmi}</h3>
            <h3>{message}</h3>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
