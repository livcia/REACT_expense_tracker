import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';
import React, { useState } from 'react';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  /*let filterInfoText = '2019, 2020, 2022, 2023'

  if (filteredYear === '2020'){
    filterInfoText = '2019, 2021, 2022, 2023'
  }else if(filteredYear === '2021'){
    filterInfoText = '2019, 2020, 2022, 2023'
  }else if(filteredYear === '2022'){
    filterInfoText = '2019, 2020, 2021, 2023'
  }else{
    filterInfoText = '2019, 2020, 2021, 2022'
  }*/

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  });

  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
    <ExpensesChart expenses={filteredExpenses}/>
    <ExpensesList items={filteredExpenses}/>
    </Card>
    </div>
  );
}

export default Expenses;