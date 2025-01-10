"use client"

import React, { useState } from "react";
import styles from "../styles/Calendar.module.css";

const Calendar = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  // Calculate the days to display
  const daysInMonth = [];
  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    daysInMonth.push(i);
  }

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <button onClick={handlePrevMonth}>&lt;</button>
        <h2>
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </h2>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>

      {/* Days of the Week */}
      <div className={styles.daysOfWeek}>
        {daysOfWeek.map((day) => (
          <div key={day} className={styles.day}>
            {day}
          </div>
        ))}
      </div>

      {/* Days */}
      <div className={styles.days}>
        {Array(firstDayOfMonth.getDay())
          .fill(null)
          .map((_, index) => (
            <div key={`empty-${index}`} className={styles.empty}></div>
          ))}

        {/* Days of the month */}
        {daysInMonth.map((day) => (
          <div
            key={day}
            className={`${styles.day} ${
              today.getDate() === day &&
              today.getMonth() === currentDate.getMonth() &&
              today.getFullYear() === currentDate.getFullYear()
                ? styles.today
                : ""
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;