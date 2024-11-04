import React, { useState } from "react";

export default function DateStateVariable() {
  const [startDate, setStartDate] = useState(new Date()); // Initialize startDate with today's date

  // Utility function to convert Date object to YYYY-MM-DD format
  const dateObjectToHtmlDateString = (date: Date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? "0" : ""}${
      date.getMonth() + 1
    }-${date.getDate() < 10 ? "0" : ""}${date.getDate()}`;
  };

  return (
    <div id="wd-date-state-variables">
      <h2>Date State Variables</h2>
      <h3>{JSON.stringify(startDate)}</h3> {/* Display raw date object */}
      <h3>{dateObjectToHtmlDateString(startDate)}</h3> {/* Display formatted date */}
      <input
        className="form-control"
        type="date"
        value={dateObjectToHtmlDateString(startDate)} // Set initial value in YYYY-MM-DD format
        onChange={(e) => setStartDate(new Date(e.target.value))} // Update state on change
      />
      <hr />
    </div>
  );
}
