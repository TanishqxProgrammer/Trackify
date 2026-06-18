import React, { useState } from "react";

const Goal = () => {

  const [goals, setGoals] = useState(Array(15).fill(""));

  const handleChange = (index, value) => {
    const copyGoals = [...goals];
    copyGoals[index] = value;
    setGoals(copyGoals);
  };

  return (
    <div className="border w-9">
      
      <div className="w-full h-26 border-b flex justify-center items-center">
        <p className="whitespace-pre-line font-bold font-serif text-center">
{`G
O
A
L`}
        </p>
      </div>

      <div className="flex flex-col">
        {goals.map((goal, index) => (
          <input
            key={index}
            type="number"
            value={goal}
            onChange={(e) => handleChange(index, e.target.value)}
            className="h-7 w-full border-b text-center outline-none"
          />
        ))}
      </div>

    </div>
  );
};

export default Goal;