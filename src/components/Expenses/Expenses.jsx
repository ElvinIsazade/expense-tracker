import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpenseChart from './ExpenseChart';
import ExpensesFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList';


const Expenses = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    const filterExpenses = expenses.filter(expense => (
        expense.date.getFullYear().toString() === filteredYear
    ));
    
    return (
        <Card className="expenses">
            <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
            {/* {Alternative conditioanl rendering } */}
            {/* {filterExpenses.length === 0 && <p>There is not any expense because of this year</p>}
            {filterExpenses.length > 0 && filterExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)}  */}
            <ExpenseChart expenses = {filterExpenses} />
            <ExpensesList items = {filterExpenses} />
        </Card>
    )
}

export default Expenses