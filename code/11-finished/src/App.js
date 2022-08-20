import React, { useState } from "react";
import ExpenseState from "./states/ExpensesState.js";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState({
    data: ExpenseState.getDataFromStorage(),
  });
  const onFilterChangeHandler = (year) => {
    let data = ExpenseState.getDataFromStorage();
    if (year != "-") {
      data = data.filter((x) => {
        return new Date(x.date).getFullYear().toString() == year;
      });
    }
    setExpenses({
      data,
    });
  };

  const onExpenseAddedHandler = (item) => {
    item.date = new Date(item.date);
    setExpenses((prevState) => ({
      data: [...prevState.data, item],
    }));
    const newData = ExpenseState.getDataFromStorage();
    newData.push(item);
    ExpenseState.setDataToStorage(newData);
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={onExpenseAddedHandler} />
      <Expenses onFilterChange={onFilterChangeHandler} items={expenses.data} />
    </div>
  );
};

export default App;
