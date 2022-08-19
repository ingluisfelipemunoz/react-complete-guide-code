import React, {useState, setState} from "react";
import './ExpenseForm.css'
const ExpenseForm = () => {
    const [newExpense, setExpense] = useState({
        title: '',
        amount: 0,
        date: '2022-05-05'
    });
    const onChange = (event) => {
        let {name, value} = event.target;
        console.log('title changed', event.target.value, 'name', event.target.name);
        const tempExpense = newExpense;
        tempExpense[name] = value;
        setExpense(tempExpense);
    }

    const saveExpense = (event) => {
        event.preventDefault();
        console.log('newExpense', newExpense);
    }
    return <form onSubmit={saveExpense}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input defaultValue={newExpense.title} onChange={onChange}  name="title" type="text"/>
            </div>
        </div>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Amount</label>
                <input defaultValue={newExpense.amount} onChange={onChange} name="amount" type="number" min="0.01" step="0.01"/>
            </div>
        </div>

        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Date</label>
                <input defaultValue={newExpense.date} onChange={onChange} name="date" type="date" min="2020-01-01" step="2022-08-17"/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Save Expense</button>
        </div>
    </form>
}

export default ExpenseForm;