import React, { useState } from 'react'

const ExpenseForm = (props) => {
    // const [userInputs,setUserInputs] = useState({
    //     enteredTitle: "",
    //     enteredAmount : "",
    //     enteredDate : ""
    // });
    const [enteredTitle,setEnteredTitle] = useState("");
    const [enteredAmount,setEnteredAmount] = useState("");
    const [enteredDate,setEnteredDate] = useState("");

    const titleChange = (e) =>{
        setEnteredTitle(e.target.value)
    }
    const amountChange = (e) =>{
        setEnteredAmount(e.target.value)
    }
    const dateChange = (e) =>{
        setEnteredDate(e.target.value)
    }


    // const handlerInputs = (e)=>{
    //     setUserInputs((prevState)=>{
    //         return {...prevState,[e.target.name] : e.target.value}
    //     })
    // }
    // console.log(userInputs);

    const handlerSubmit = (e) => {
        e.preventDefault();
        const expenseData = {
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }
    
    return (
        <form onSubmit={handlerSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" value={enteredTitle} name='enteredTitle' onChange={titleChange} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" value={enteredAmount} onChange={amountChange} name='enteredAmount' min="0.01" step = "0.01" />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" value={enteredDate} onChange={dateChange} name='enteredDate' min="2019-01-01" max="2022-01-31" step = "2022-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm