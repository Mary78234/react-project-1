import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const years = ["2023", "2022", "2021", "2020", "2019"];
  const [selectedYear, setYear] = useState("2021");

  const sendYear = (year) => {
    setYear(year);
  };
  let listExpenses = props.expenses.filter((el) => {
    return el.date.getFullYear().toString() === selectedYear;
  });

  //SOLUTION 3
  let expensesContent = <p>No expenses found.</p>;
  if (listExpenses.length > 0) {
    expensesContent = listExpenses.map((ex) => (
      <ExpenseItem
        key={ex.id}
        title={ex.title}
        amount={ex.amount}
        date={ex.date}
      />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          years={years}
          selected={selectedYear}
          onSendYear={sendYear}
        />
        {
          //SOLUTION 1
          /* listExpenses.length === 0 ? (
            <p>No expenses found.</p>
          ) : (
            listExpenses.map((ex) => (
              <ExpenseItem
                key={ex.id}
                title={ex.title}
                amount={ex.amount}
                date={ex.date}
              />
            ))
          ) */

          /* 
          SOLUTION 2
          {istExpenses.length === 0 && <p>No expenses found.</p>}
          {listExpenses.length > 0 &&
            listExpenses.map((ex) => (
              <ExpenseItem
                key={ex.id}
                title={ex.title}
                amount={ex.amount}
                date={ex.date}
              />
            ))} */

          //SOLUTION 3
          expensesContent
        }
      </Card>
    </div>
  );
}

export default Expenses;
