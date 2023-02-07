import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const years = ["2023", "2022", "2021", "2020", "2019"];
  const [selectedYear, setYear] = useState("2023");

  const sendYear = (year) => {
    setYear(year);
  };
  const listExpenses = props.expenses.filter((el) => {
    return el.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          years={years}
          selected={selectedYear}
          onSendYear={sendYear}
        />
        <ExpensesChart expenses={listExpenses} />
        <ExpensesList expenses={listExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
