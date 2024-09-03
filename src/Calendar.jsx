// Calendar.js
import React from "react";
import Month from "./Month";
import { months } from "./data";

const Calendar = () => {
  return (
    <div className="w-[1056px] h-[816px] ">
      {/* Her ay için Month bileşeni */}
      <div>
        {months.map((month, index) => (
          <Month
            key={index}
            name={month.name}
            days={month.days}
            startDay={month.startDay}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
