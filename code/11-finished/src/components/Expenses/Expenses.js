import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  //var items = props.items;
  const onYearSelectedHandler = (year) => {
    props.onFilterChange(year);
  };
  const onRefreshHandler = () => {
     props.refresh();
  }
  // filtering content
  let expensesContent = <p>No expenses found.</p>;
  if (props.items.length > 0) {
    expensesContent = props.items.map((item) => {
      return (
        <ExpenseItem
          refresh={onRefreshHandler}
          key={item.id}
          id={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      );
    });
  }

  return (
    <div>
      <ExpenseFilter onYearSelected={onYearSelectedHandler} />
      <Card className="expenses">{expensesContent}</Card>
    </div>
  );
};

export default Expenses;
