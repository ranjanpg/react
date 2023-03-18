import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id : 'el0',
      amount : 94.12,
      title : 'Toilet Paper',
      date : new Date(2021, 2, 28)
    },
    {
      id : 'el1',
      amount : 799.49,
      title : 'New TV',
      date : new Date(2021, 2, 28)
    },
    {
      id : 'el2',
      amount : 294.67,
      title : 'Car Insurance',
      date : new Date(2021, 2, 28)
    },
    {
      id : 'el3',
      amount : 450,
      title : 'New Desk(Wooden',
      date : new Date(2021, 2, 28)
    }
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense></NewExpense>
      <Expenses expense = {expenses}></Expenses>
    </div>
  );
}

export default App;
