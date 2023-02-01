import React, { useState } from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const [saveYear, setYear] = useState(2022);
  const years = [2022, 2021, 2020, 2019];
  const listYears = years.map((year) => (
    <option key={year.toString()} value={year}>
      {year}
    </option>
  ));

  const selectedYear = (event) => {
    setYear(event.target.value);
    props.onSendYear(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year {saveYear}</label>
        <select onChange={selectedYear} value={saveYear}>
          {listYears}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
