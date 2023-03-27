import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";


function App() {
  const [taskCount, setTaskCount] = useState('0');

  const addNewExpense = (expenseData) => {
    if(expenseData) {
      expenseData = {
        id: `${taskCount}`,
        ...expenseData
      };
      setTaskCount( (prevCount) => {
        return `${prevCount - '0' + 1}`;
      } );

      expenses.push(expenseData);
    }
  }


  const expenses = [
    {
      id : '0',
      amount : 94.12,
      title : 'Toilet Paper',
      date : new Date(2021, 2, 28)
    },
    {
      id : '1',
      amount : 799.49,
      title : 'New TV',
      date : new Date(2021, 2, 28)
    },
    {
      id : '2',
      amount : 294.67,
      title : 'Car Insurance',
      date : new Date(2021, 2, 28)
    },
    {
      id : '3',
      amount : 450,
      title : 'New Desk(Wooden',
      date : new Date(2021, 2, 28)
    }
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onSaveNewExpense = {addNewExpense}></NewExpense>
      <Expenses expense = {expenses}></Expenses>
    </div>
  );
}

export default App;
