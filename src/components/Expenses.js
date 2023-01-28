import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className="expenses">
      {props.expenses.map((ex) => (
        <ExpenseItem title={ex.title} amount={ex.amount} date={ex.date} />
      ))}
    </div>
  );
}

export default Expenses;
