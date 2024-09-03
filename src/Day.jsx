const Day = ({ day, month }) => {
  return (
    <td className="relative p-2 border border-black">
      <a
        href={`#${month}-${day}`}
        className="absolute top-0 left-0 p-1 text-sm"
      >
        {day}
      </a>
    </td>
  );
};

export default Day;
