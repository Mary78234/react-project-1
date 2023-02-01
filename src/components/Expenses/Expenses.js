import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [saveYear, setYear] = useState(2022);
  const sendYear = (year) => {
    setYear(year);
    console.log(saveYear);
  };
  return (
    <div className="expenses">
      <ExpensesFilter onSendYear={sendYear} />
      <Card>
        {props.expenses.map((ex) => (
          <ExpenseItem
            key={ex.id}
            title={ex.title}
            amount={ex.amount}
            date={ex.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
