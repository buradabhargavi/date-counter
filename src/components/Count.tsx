import React, { useState } from "react";
import "./Step.css";

interface val {
  value: number;
}
function Count(props: val) {
  // console.log(props.value);

  const date = new Date();

  const [count, setCount] = useState(0);

  const decHandler = () => {
    setCount((count) => {
      if (props.value === 0) {
        return count - 1;
      } else {
        return count - props.value;
      }
    });
  };

  const incHandler = () => {
    setCount((count) => {
      if (props.value === 0) {
        return count + 1;
      } else {
        return count + props.value;
      }
    });
  };
  date.setDate(date.getDate() + count);
  const dateString = date.toDateString();
  //console.log(dateString);

  return (
    <>
      <div className="step">
        <button onClick={decHandler} className="dec">
          -
        </button>
        <span>Count : {count}</span>
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
    </>
  );
}

export default Count;
