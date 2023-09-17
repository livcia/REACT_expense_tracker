import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import React, { useState } from 'react';

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
    {filteredExpenses.map(expense => 
    <ExpenseItem 
      key = {expense.id}
      title = {expense.title} 
      amount = {expense.amount} 
      date = {expense.date}
      />)}
    </Card>
    </div>
  );
}

export default Expenses;