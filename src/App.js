import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e5',
      title: 'Gym',
      amount: 30,
      date: new Date(2020, 2, 12),
    },
    {
      id: 'e6',
      title: 'Water',
      amount: 200,
      date: new Date(2021, 9, 12),
    },
    {
      id: 'e7',
      title: 'Gas',
      amount: 130,
      date: new Date(2021, 12, 12),
    },
    {
      id: 'e8',
      title: 'Computer',
      amount: 2000,
      date: new Date(2021, 10, 12),
    },
    {
      id: 'e9',
      title: 'Phone',
      amount: 600,
      date: new Date(2021, 1, 12),
    },
    {
      id: 'e10',
      title: 'Food',
      amount: 200,
      date: new Date(2021, 3, 12),
    },
  ];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  // const addExpenseHandler = expense => {
  //   setExpenses([expense, ...expenses])
  // }

//if u updating the state using previous state u have to do it like THIS
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
