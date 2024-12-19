import React, { useState } from "react";
import "./App.css";

const App = () => {
  // makeing State of our Applications
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please Enter a Valid weight and Height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage("Your Under Weight");
      } else if (bmi >= 25 && bmi < 35) {
        setMessage("Your are a healthy Weight");
      } else {
        setMessage("Your Over Weight");
      }
    }
  };

  let reload = () => [window.location.reload()];

  return (
    <div className="app">
    <div className="container">
      <h2 className="center">BMI Calculator</h2>
      <form onSubmit={calcBmi}>
        <div>
          <label> Weight (ibs)</label>
          <input
            type="text"
            placeholder="Enter weight Value"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label> Height (in)</label>
          <input
            type="text"
            placeholder="Enter Height Value"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div>
          <button className="btn" type="submit">
            Submit
          </button>
          <button className="btn btn-outline" type="submit" onClick={reload}>
            Reload
          </button>
        </div>
        <div className="center">
          <h3>Your BMI is : {bmi}</h3>
          <p>{message}</p>
        </div>
      </form>
    </div>
    </div>
  );
};

export default App;
