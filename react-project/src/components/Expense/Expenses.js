import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

function Expenses(props) {
    const [year, setYear] = useState('');

    const getYearFilter = (year) => {
      console.log(year)
      if(year) setYear(year);
    }

    return (
      <Card className='expenses'>
        <ExpensesFilter onYearSelect = {getYearFilter} selected={year}></ExpensesFilter>
        {props.items.map((expense) => (
            <ExpenseItem 
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        }
      </Card>
    );
}

export default Expenses