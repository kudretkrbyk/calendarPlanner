import React from "react";

const DayPage = ({ day, month }) => {
  return (
    <div
      id={`${month}-${day}`}
      className="mb-8 p-4 border rounded-lg shadow-lg w-full h-full"
    >
      <h3 className="text-xl font-bold text-center mb-4">
        {day} {month}
      </h3>
      <div className="w-full h-80 bg-red-500">ddd</div>
    </div>
  );
};

export default DayPage;
