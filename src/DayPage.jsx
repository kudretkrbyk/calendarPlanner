// DayPage.js

const DayPage = ({ day, month }) => {
  return (
    <div
      id={`${month}-${day}`}
      className="mb-8 p-4 border rounded-lg shadow-lg  w-[1025px] h-[1357px] bg-blue-500"
    >
      <h3 className="text-xl font-bold text-left ">
        {day}- {month}
      </h3>
      <div className=" bg-red-500">ddd</div>
    </div>
  );
};

export default DayPage;
