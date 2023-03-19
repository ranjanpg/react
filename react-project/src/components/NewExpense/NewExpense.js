import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm/ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (newExpenseData) => {
    props.onSaveNewExpense(newExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense