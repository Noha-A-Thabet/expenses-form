import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showExpenseButton, setShowExpenseButton] = useState(true);

  const showFormHandler = () => {
    setShowForm(true);
    setShowExpenseButton(false);
  };

  const hideFormHandler = () => {
    setShowForm(false);
    setShowExpenseButton(true);
  };

  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountCahngeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const submitFormHandler = (event) => {
    event.preventDefault();
    const expenseDate = {
      title,
      amount,
      date: new Date(date),
    };
    props.onSaveExpenses(expenseDate);
    setAmount("");
    setDate("");
    setTitle("");
  };

  return (
    <>
      {showExpenseButton && (
        <button onClick={showFormHandler}>Add New Expense</button>
      )}
      {showForm && (
        <form onSubmit={submitFormHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input type="text" onChange={changeTitleHandler} value={title} />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                onChange={amountCahngeHandler}
                value={amount}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                onChange={dateChangeHandler}
                value={date}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
            <button type="submit" onClick={hideFormHandler}>
              Cancle
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default ExpenseForm;
