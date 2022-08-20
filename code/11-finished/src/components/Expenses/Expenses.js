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
  return (
    <div>
      <ExpenseFilter onYearSelected={onYearSelectedHandler} />
      <Card className="expenses">
        {props.items.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
