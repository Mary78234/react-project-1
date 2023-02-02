import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const years = [2023, 2022, 2021, 2020, 2019];
  const [selectedYear, setYear] = useState(2021);
  const sendYear = (year) => {
    setYear(year);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          years={years}
          selected={selectedYear}
          onSendYear={sendYear}
        />
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
