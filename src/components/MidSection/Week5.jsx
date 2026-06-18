import React, { useState } from "react";

const Week1 = () => {
  const [checked, setChecked] = useState(Array(45).fill(false));

  const toggleBox = (index) => {
    const copy = [...checked];

    copy[index] = !copy[index];

    setChecked(copy);
  };

  return (
    <div className="border ">
      <div className="h-12 border-b flex justify-center p-2.5 font-bold text-center bg-red-400">
        <h1 className="font-serif">WEEK</h1>
      </div>
      <div className="grid grid-cols-3 h-7 border-b bg-red-300">
        {["S", "M", "T",].map((day, index) => (
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

      <div className="grid grid-cols-3 h-7 border-b bg-red-200">
        {[29, 30, 31,].map((date, index) => (
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

      <div className="grid grid-cols-3">
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

                ${item ? "bg-red-400" : "bg-red-100"}

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
