import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import React, { useState } from 'react';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  let filterInfoText = '2019, 2020, 2022, 2023'

  if (filteredYear === '2020'){
    filterInfoText = '2019, 2021, 2022, 2023'
  }else if(filteredYear === '2021'){
    filterInfoText = '2019, 2020, 2022, 2023'
  }else if(filteredYear === '2022'){
    filterInfoText = '2019, 2020, 2021, 2023'
  }else{
    filterInfoText = '2019, 2020, 2021, 2022'
  }

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
    </div>
  );
}

export default Expenses;