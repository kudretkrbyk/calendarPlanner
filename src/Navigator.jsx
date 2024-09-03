// Navigator.js
import React from "react";
import { months } from "./data";
import background from "./2.png";

const Navigator = () => {
  return (
    <div className="AY-NAVIGATOR flex justify-around mb-4 z-50 relative ">
      {months.map((month, index) => (
        <a
          key={index}
          href={`#${month.name}`} // Ayın ismi ile eşleşen id
          className="p-2 text-xl font-semibold hover:underline z-50"
        >
          {month.name}
        </a>
      ))}
    </div>
  );
};

export default Navigator;
