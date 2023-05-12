import React from "react";
import './ExpenseList.css'
import ExpenseItem from "./ExpenseItem";


const ExpenseList = props => {
    if (props.items.length === 0) {
      return <h2 className="expenses-list__fallback">No Expense Found.</h2>
    }

		return (
			<ul className="expenses-list">
				{props.items.map((expense)=>{
					return (
						<ExpenseItem
							key={expense.id}
							amount={expense.amount}
							date={expense.date}
							title={expense.title}
						/>
					)
				})}
			</ul>
		)
}

export default ExpenseList;