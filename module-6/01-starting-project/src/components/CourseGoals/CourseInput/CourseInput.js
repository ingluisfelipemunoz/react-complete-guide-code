import React, { useEffect, useRef, useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const inputRef = useRef();

  useEffect(() => {
    setIsValid(false);
  }, []);
  const goalInputChangeHandler = (event) => {
    const value = event.target.value;
    setEnteredValue(value);
    if (value.trim().length === 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <div style={{ display: "flex", justifyContent: "start" }}>
          <input
            ref={inputRef}
            style={{
              border: !isValid ? "3px solid red" : "",
              background: !isValid ? "salmon" : "transparent",
            }}
            type="text"
            value={enteredValue}
            onChange={goalInputChangeHandler}
          />
          <a
            style={{
              color: "blue",
              appearance: "push-button",
              display: "inline-block !important",
              whiteSpace: "nowrap",
              padding: "5px 1px",
              border: !isValid ? "3px solid red" : "",
              fontWeight: "bold",
            }}
            onClick={() => {
              setEnteredValue("");
              inputRef.current.focus();
            }}
          >
            CLS
          </a>
        </div>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
