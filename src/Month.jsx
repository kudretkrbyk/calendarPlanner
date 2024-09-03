import Day from "./Day";
import Navigator from "./Navigator";
import DayPage from "./DayPage";

const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const Month = ({ name, days, startDay }) => {
  const blanks = [...Array(startDay - 1)].map((_, i) => (
    <td key={i} className="p-2 border border-black"></td>
  ));

  const daysInMonth = [...Array(days)].map((_, i) => (
    <Day key={i} day={i + 1} month={name} />
  ));

  const totalSlots = [...blanks, ...daysInMonth];
  let rows = [];
  let cells = [];

  totalSlots.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(row);
    }
    if (i === totalSlots.length - 1) {
      rows.push(cells);
    }
  });

  const dayPages = [...Array(days)].map((_, i) => (
    <DayPage key={i} day={i + 1} month={name} />
  ));

  return (
    <div id={name} className="relative z-50 p-2 w-full h-full ">
      <div className="AY-GORUNUMU p-2  w-[1025px] h-[1357px] border border-blue-500 overflow-hidden">
        <Navigator />
        <h2 className="text-2xl font-bold   text-left z-50">{name}</h2>

        <div className="z-50 w-full h-full bg-white ">
          <table className="table-fixed w-full h-full text-center  border border-black">
            <thead>
              <tr>
                {daysOfWeek.map((day, index) => (
                  <th key={index} className="border border-black p-2">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((d, i) => (
                <tr key={i}>{d}</tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Gün Sayfaları */}
      <div className="page-break break-before-all"></div>{" "}
      {/* Ay ve gün sayfalarını ayırır */}
      <div className="flex flex-col z-50 ">{dayPages}</div>
    </div>
  );
};

export default Month;
