import React from "react";
import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Week5circle = () => {
  const percentage = 76;

  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],

        backgroundColor: ["#FF6467", "#ffe2e2"],

        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "78%",

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        enabled: false,
      },
    },
  };

  const completed = 8;
  const incompleted = 1;

  return (
    <div className="h-50 w-49 border flex flex-col items-center">
      {/* Donut */}
      <div className="relative h-28 w-28 mt-2">
        <Doughnut data={data} options={options} />

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-[#FF6467]">
            {percentage}%
          </span>
        </div>
      </div>

      {/* Bottom Boxes */}
      <div className="flex flex-col mt-[15px]">

  {[1, 2].map((row) => (
    <div key={row} className="flex ">

      {[1, 2, 3, 4, 5, 6, 7].map((box) => (
        <div
          key={box}
          className="h-8 w-7 border-r border-t flex items-center justify-center"
        >
        </div>
      ))}

    </div>
  ))}

</div>
    </div>
  );
};

export default Week5circle;
