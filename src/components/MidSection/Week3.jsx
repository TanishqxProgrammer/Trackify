import React, { useState } from "react";

const Week1 = () => {
  const [checked, setChecked] = useState(Array(105).fill(false));

  const toggleBox = (index) => {
    const copy = [...checked];

    copy[index] = !copy[index];

    setChecked(copy);
  };

  return (
    <div className="border w-50">
      <div className="h-12 border-b flex justify-center p-2.5 font-bold text-center bg-pink-300">
        <h1 className="font-serif">WEEK</h1>
      </div>
      <div className="grid grid-cols-7 h-7 border-b bg-pink-200">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
          <div
            key={index}
            className={`
        flex justify-center items-center
        font-bold font-serif text-sm
        ${index !== 6 ? "border-r border-gray-400" : ""}
      `}
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 h-7 border-b bg-pink-100">
        {[15, 16, 17, 18, 19, 20, 21].map((date, index) => (
          <div
            key={index}
            className={`
        flex justify-center items-center
        ${index !== 6 ? "border-r border-gray-400" : ""}
      `}
          >
            {date}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7">
        {checked.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleBox(index)}
            className={`

                h-7

                border

                border-gray-400

                cursor-pointer

                flex

                justify-center

                items-center

                ${item ? "bg-pink-300" : "bg-pink-50"}

              `}
          >
            {item ? "✓" : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Week1;
