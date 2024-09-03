import React from "react";
import Day from "./Day";
import DayPage from "./DayPage";
import { months } from "./data";

const daysOfWeek = [
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
  "Pazar",
];
const month = ["JAN", "FEB", "MAR", "APR"];

const Month = ({ name, days, startDay }) => {
  const blanks = [...Array(startDay - 1)].map((_, i) => (
    <div key={`blank-${name}-${i}`} className="p-2"></div>
  ));
  const daysInMonth = [...Array(days)].map((_, i) => (
    <Day key={i} day={i + 1} month={name} />
  ));
  const dayPages = [...Array(days)].map((_, i) => (
    <DayPage key={i} day={i + 1} month={name} />
  ));

  return (
    <div className="mb-12 ">
      {/* Ayların yan yana dizilmesi için flex kullanılıyor */}
      <div className="flex justify-around mb-4">
        {months.map((month, index) => (
          <a
            key={index}
            href={`#${month.name}`}
            className="p-2 text-xl font-semibold hover:underline"
          >
            {month.name}
          </a>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-4 text-center">{name} </h2>
      <div className="grid grid-cols-7 gap-2 text-center">
        {daysOfWeek.map((day, index) => (
          <div key={index + day} className="font-bold">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">{blanks.concat(daysInMonth)}</div>
      <div className="mt-8">{dayPages}</div>
    </div>
  );
};

export default Month;
