// Calendar.js
import Month from "./Month";
import Navigator from "./Navigator";
import { months } from "./data";

const Calendar = () => {
  return (
    <div className="w-full h-full">
      {/* Üstte Navigator Bileşeni   <Navigator />*/}

      {/* Her ay için Month bileşeni */}
      <div className="z-50 w-full h-full">
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
