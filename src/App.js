import "./App.css";
import React, { useState } from "react";

function App() {
  // Making states
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  // Logic
  let calcBmi = (e) =>{

    if(weight === 0 || height === 0){
      alert("Please enter valid weight and height.");
    }
    else{
      let bmi = (weight/(height*height)*703);
      setBmi(bmi.toFixed(1))
    }

    if(bmi < 25) {
      setMessage('You are underweight.')
    }
    else if(bmi>25 && bmi<30){
      setMessage('You are healthy.');
    }
    
  }



  return (
    <div>
      <div className="container">
        <h2>BMI CALCULATOR</h2>

        <form>
          <div>
            <label>Weight (ibs)</label>
            <input
              type="text"
              placeholder="Enter your weight here..."
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label>weight (cm)</label>
            <input
              type="text"
              placeholder="Enter your weight here..."
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <button className="btn" type="submit">
            Submit
          </button>
          <button className="btn reload-btn" type="submit" onClick={reload}>
            Reload
          </button>

          <div className="result">
            <h3>Your BMI is : {bmi}</h3>
            <h3>{messsage}</h3>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
