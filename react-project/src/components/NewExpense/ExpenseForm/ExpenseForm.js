import React , { useState }from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: ''
	// });
	const titleChangeHandler = (evt) => {
		// setUserInput( (prevState) => {
		// 	return {...userInput, enteredTitle: evt.target.value}
		// });
		setEnteredTitle(evt.target.value);
	};

	const amountChangeHandler = (evt)=>{
		// setUserInput({
		// 	...userInput,
		// 	enteredAmount: evt.target.value
		// });
		setEnteredAmount(evt.target.value);
	}

	const dateChangeHandler = (evt)=>{
		// setUserInput({
		// 	...userInput,
		// 	enteredDate: evt.target.value
		// });
		setEnteredDate(evt.target.value);
	}
	const submitHandler = (evt) => {
		evt.preventDefault();
		const expenseData = {
			title : enteredTitle,
			amount : enteredAmount,
			date : new Date(enteredDate)
		}
		//console.log(expenseData);
		props.onSaveExpenseData(expenseData);
		setEnteredAmount('');
		setEnteredTitle('');
		setEnteredDate('');
		return expenseData;
	};

	const cancelHandler = () => {
		props.hideAddExpense(false)
	}

	return (
		<div>
			<form onSubmit={submitHandler}>
				<div className='new-expense__controls'>
					<div className='new-expense__control'>
						<label>Title</label>
						<input type="text" value = {enteredTitle} onChange={titleChangeHandler}/>
					</div>
					<div className='new-expense__control'>
						<label>Amount</label>
						<input type='number' min='0.01' step='0.01' value = {enteredAmount} onChange={amountChangeHandler}/>
					</div>
					<div className='new-expense__control'>
						<label>Date</label>
						<input type='date' min='2019-01-01' max='2023-03-18' value = {enteredDate} onChange={dateChangeHandler}/>
					</div>
				</div>
				<div className='new-expense__actions'>
					<button type='button' onClick={cancelHandler}>Cancel</button>
					<button type='submit'>Add Expense</button>
				</div>
			</form>
		</div>
	);
};

export default ExpenseForm