import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const getDefaultState = () => {
    return { title: "", amount: 0, date: "2022-05-05" };
  };
  //   one state
  const [newExpense, setExpense] = useState({
    title: "",
    amount: 0,
    date: "2022-05-05",
  });
  //   ona state for all change event
  const onChange = (event) => {
    let { name, value } = event.target;
    console.log("title changed", event.target.value, "name", event.target.name);
    const tempExpense = newExpense;
    tempExpense[name] = value;
    setExpense(tempExpense);
  };
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("2022-05-05");

  const titleChange = (event) => {
    setTitle(event.target.value);
  };
  const amountChange = (event) => {
    setAmount(event.target.value);
  };
  const dateChange = (event) => {
    console.log("event.target", event.target);
    setDate(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: date,
    };
    console.log("newExpense", expenseData);
    props.onSaveExpenseData(expenseData);
    //setExpense(getDefaultState()); //exec one state setter
    setTitle("");
    setDate("2022-05-05");
    setAmount(0);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={title}
            onChange={titleChange}
            name="title"
            type="text"
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={amount}
            onChange={amountChange}
            name="amount"
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
      </div>

      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input value={date} onChange={dateChange} name="date" type="date" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Save Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
