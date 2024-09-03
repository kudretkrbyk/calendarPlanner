import React from "react";

const Day = ({ day, month }) => {
  return (
    <a
      href={`#${month}-${day}`}
      className="p-10 border border-black bg-gray-200 text-center rounded-lg hover:bg-gray-300 transition"
    >
      {day}
    </a>
  );
};

export default Day;
