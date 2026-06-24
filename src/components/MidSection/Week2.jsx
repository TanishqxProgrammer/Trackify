import React from "react";

const Week2 = ({ habits, setHabits, calendarData, setHighlightRow }) => {
  const start = 7;
  const end = 14;

  const toggleBox = (row, col) => {
    const copy = habits.map((habit) => ({
      ...habit,
      checks: [...habit.checks],
    }));

    copy[row].checks[start + col] = !copy[row].checks[start + col];

    setHabits(copy);
  };

  return (
    <div className="border w-50">
      {/* Header */}
      <div className="h-12 border-b flex justify-center items-center font-bold text-center bg-green-300">
        <h1 className="font-serif">WEEK 2</h1>
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 h-7 border-b bg-green-200">
        {calendarData.slice(start, end).map((item, index) => (
          <div
            key={index}
            className={`flex justify-center items-center font-bold font-serif text-sm ${
              index !== 6 ? "border-r border-gray-400" : ""
            }`}
          >
            {item.day[0]}
          </div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 h-7 border-b bg-green-100">
        {calendarData.slice(start, end).map((item, index) => (
          <div
            key={index}
            className={`flex justify-center items-center ${
              index !== 6 ? "border-r border-gray-400" : ""
            }`}
          >
            {item.date}
          </div>
        ))}
      </div>

      {/* Checkboxes */}
      <div>
        {habits.map((habit, row) => (
          <div key={row} className="grid grid-cols-7">
            {habit.checks.slice(start, end).map((item, col) => (
              <div
                key={col}
                onClick={() => {
                  if (habit.name.trim() !== "") {
                    toggleBox(row, col);
                  } else {
                    setHighlightRow(row);
                    setTimeout(() => setHighlightRow(null), 1500);
                  }
                }}
                className={`h-7 border border-gray-400 flex items-center justify-center cursor-pointer ${
                  habit.name.trim() === ""
                    ? "bg-gray-100 cursor-not-allowed"
                    : item
                      ? "bg-green-300"
                      : "bg-green-50"
                }`}
              >
                {item ? (
                  <span className="flex items-center justify-center w-full h-full">
                    ✓
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Week2;
