import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import EditPriceItem from './EditPriceItem';

const ExpenseItem = (props) => {  
  const [title, setTitle] = useState(props.title);
  const [editing, setEditing] = useState(false);
  const editHandler = () => {
    setTitle("newTitle");
  }

  const editingHandler = () => {
    setEditing((prev) => {
      return !prev;
    });
  }
  const editingInput = () => {
    return <div>
    
    </div>
  }
  const priceInfo = () => {
    return <div>
    <div className='expense-item__price'>${props.amount}</div></div>

  }
  const onNewPriceSaved = () => {        
      editingHandler();
      props.refresh();
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        {
          (editing) ? <EditPriceItem amount={props.amount} id={props.id} onSaved={onNewPriceSaved}/> : priceInfo()
        }
        
      </div>
      <button onClick={editingHandler}>Edit</button>
    </Card>
  );
}

export default ExpenseItem;
