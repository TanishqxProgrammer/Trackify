import React from "react";

const Progress = () => {

  const progressData = [
    { completed: 25, total: 31 },
    { completed: 20, total: 20 },
    { completed: 29, total: 31 },
    { completed: 24, total: 31 },
    { completed: 28, total: 31 },
    { completed: 20, total: 31 },
    { completed: 24, total: 31 },
    { completed: 0, total: 0 },
    { completed: 0, total: 0 },
    { completed: 0, total: 0 },
    { completed: 0, total: 0 },
    { completed: 0, total: 0 },
    { completed: 0, total: 0 },
    { completed: 0, total: 0 },
    { completed: 0, total: 0 },
  ];

  return (
    <div className="border-2 w-75">

      <div className="h-12 border-b flex justify-center items-center font-bold bg-purple-300">
        <h1 className="font-serif">PROGRESS</h1>
      </div>

      <div className="border-b h-7 flex justify-center items-center font-bold font-serif bg-purple-100">
        COMPLETED
      </div>

      <div className="border-b h-7 flex justify-center items-center bg-purple-100">
        202 / 228
      </div>

      {/* Progress Rows */}

      {progressData.map((item, index) => {

        const percentage = (item.completed / item.total) * 100;

        return (
          <div
            key={index}
            className="flex items-center gap-2 px-2 border-b h-7"
          >

            {/* Progress Bar */}

            <div className="w-full h-4 bg-gray-100">
              <div
                className="h-full bg-purple-200"
                style={{
                  width: `${percentage}%`,
                }}
              ></div>
            </div>

            {/* Numbers */}

            <p className="text-xs whitespace-nowrap">
              {item.completed}/{item.total}
            </p>

          </div>
        );
      })}

    </div>
  );
};

export default Progress
