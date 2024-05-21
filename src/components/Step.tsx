import React, { useState } from "react";

import "./Step.css";

function Step() {
  const [step, setStep] = useState<number>(1);
  const [count, setCount] = useState<number>(0);

  const date = new Date();

  const decHandler = () => {
    setCount((count) => count - step);
  };

  const incHandler = () => {
    setCount((count) => count + step);
  };

  const resetHandler = () => {
    setCount(0);
    setStep(1);
  };

  date.setDate(date.getDate() + count);
  const dateString = date.toDateString();

  /*  const decHandler = () => {
    setStep((step) => step - 1);
  };
  const incHandler = () => {
    setStep((step) => step + 1);
  }; */

  return (
    <>
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
        <div className="step">
          <button onClick={decHandler} className="dec">
            -
          </button>
          <input
            type="number"
            value={count}
            onChange={(e) => {
              setCount(Number(e.target.value));
            }}
          ></input>
          <button onClick={incHandler} className="inc">
            +
          </button>
        </div>
        <div>
          <p>
            {count === 0
              ? `Today is`
              : count > 0
              ? `${count} days from today is`
              : count < 0
              ? `${-count} days ago the date was `
              : ""}
          </p>
          <p className="datecls">{dateString}</p>
        </div>
        <div className="reset">
          <button onClick={resetHandler}>reset</button>
        </div>
      </div>
    </>
  );
}

export default Step;
