import React, {useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm/ExpenseForm';

const NewExpense = (props) => {
  const [addExpenseClicked, setAddExpenseClicked] = useState(false);

  const saveExpenseDataHandler = (newExpenseData) => {
    props.onSaveNewExpense(newExpenseData);
  };

  const showExpenseForm = (evt) => {
    setAddExpenseClicked(true)
  }

  let formEl = <button type='button' onClick={showExpenseForm}>Add New Expense</button>;

  if(addExpenseClicked){
    formEl = <ExpenseForm hideAddExpense={setAddExpenseClicked} onSaveExpenseData={saveExpenseDataHandler} />;
  }

  return (
    <div className="new-expense">
      {formEl}
    </div>
  );
};

export default NewExpense