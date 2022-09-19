
import { useState } from 'react';
import '../NewExpense/ExpenseForm.css';
import ExpensesState from '../../states/ExpensesState';
const EditPriceItem = (props) => {
    const [amount, setAmount] = useState(props.amount);
    
   const saveNewAmount = () => {
        if(amount > 0) {
            ExpensesState.updateItem(props.id, {amount});
            props.onSaved();
            return;
        } 
        alert('Please provide a valid value for amount');
   }

   const onAmountChangeHandler = (event) => {
        const newAmount = Number(event.target.value);
        setAmount(newAmount);
   }




   return <div>
    <div className="new-expense__control">
       <input type="number" placeholder="New Price" className="newPriceInput"  onChange={onAmountChangeHandler}>
       </input>
       <button onClick={saveNewAmount}>Save</button>
       <button>Cancel</button>
    </div>
   </div>
}

export default EditPriceItem;