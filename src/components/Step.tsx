import React, { useState } from "react";
import Count from "./Count";

import "./Step.css";

function Step() {
  const [step, setStep] = useState<number>(0);
  /*  const decHandler = () => {
    setStep((step) => step - 1);
  };
  const incHandler = () => {
    setStep((step) => step + 1);
  }; */

  return (
    <div className="mainContainer">
      <input
        className="range"
        type="range"
        min="0"
        max="10"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      ></input>
      <span>{step}</span>

      {/* <div className="step">
        <button onClick={decHandler} className="dec">
          -
        </button>
        <span>step : {step}</span>
        <button onClick={incHandler} className="inc">
          +
        </button>
      </div> */}
      <Count value={step}></Count>
    </div>
  );
}

export default Step;
