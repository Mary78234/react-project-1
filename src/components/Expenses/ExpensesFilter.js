import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const listYears = props.years.map((year) => (
    <option key={year.toString()} value={year}>
      {year}
    </option>
  ));

  const changeSelectedYear = (event) => {
    props.onSendYear(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={changeSelectedYear} value={props.selected}>
          {listYears}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
