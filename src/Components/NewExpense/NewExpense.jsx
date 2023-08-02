import React from "react";
import "./NewExpense.css";
import ExpenseForm from "../NewExpense/ExpenseForm";

const NewExpense = (props) => {
  // function for getting data from child to parent.
  const saveExpenses = (savedData) => {
    const data = {
      ...savedData,
    };
    props.onSaveAllExpenses(data);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenses={saveExpenses} />
    </div>
  );
};

export default NewExpense;
