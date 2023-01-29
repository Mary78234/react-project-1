import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((ex) => (
        <ExpenseItem title={ex.title} amount={ex.amount} date={ex.date} />
      ))}
    </Card>
  );
}

export default Expenses;
