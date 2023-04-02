import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";
// import "./CourseInput.css";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.invalid ? "red" : "black")}
  }

  & input {
    display: block;
    width: 100%;
    border: ${(props) => (props.invalid ? "3px" : "1px")} solid ${(props) =>
  props.invalid ? "red" : ""};
    background: ${(props) => (props.invalid ? "salmon" : "")}
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

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
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <div style={{ display: "flex", justifyContent: "start" }}>
          <input
            ref={inputRef}
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
              setIsValid(false);
              inputRef.current.focus();
            }}
          >
            CLS
          </a>
        </div>
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
