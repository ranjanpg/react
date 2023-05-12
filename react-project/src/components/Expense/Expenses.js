import ExpenseList from './ExpenseList'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import { useState } from 'react';

function Expenses(props) {
    const [year, setYear] = useState('');

    const getYearFilter = (year) => {
      setYear(year);
    }

    const filteredExpenses = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === year;
    });

    return (
      <Card className='expenses'>
        <ExpensesFilter onYearSelect = {getYearFilter} selected={year}></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses}/>
      </Card>
    );
}

export default Expenses