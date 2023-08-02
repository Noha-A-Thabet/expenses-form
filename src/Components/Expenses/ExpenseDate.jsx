import React from "react";
import "./ExpenseDate.css";
import Card from "./../UI/Card";

export default function ExpenseDate(props) {
  const Month = props.date.toLocaleString("en-US", { month: "long" });
  const Year = props.date.toLocaleString("en-US", { year: "numeric" });
  const Day = props.date.toLocaleString("en-US", { day: "numeric" });
  return (
    <Card className="expenseItem">
      <div className="expense-date">
        <div className="expense-date__month">{Month}</div>
        <div className="expense-date__year">{Year}</div>
        <div className="expense-date__day">{Day}</div>
      </div>
    </Card>
  );
}
