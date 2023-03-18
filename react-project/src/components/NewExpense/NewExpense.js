import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm/ExpenseForm';

const NewExpense = () => {
    return (
        <div className='new-expense'>
            <ExpenseForm></ExpenseForm>
        </div>
    );
};

export default NewExpense