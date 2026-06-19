import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#b7adc9", "#ece8f2"];

export default function ProgressCircle({ habits }) {
  const completed = habits.reduce(
    (sum, habit) => sum + habit.checks.filter((check) => check).length,

    0,
  );

  const total = habits.length * 31;

  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  const data = [
    {
      name: "Completed",
      value: percentage,
    },

    {
      name: "Remaining",
      value: 100 - percentage,
    },
  ];

  return (
    <div className="w-50 h-31 ml-2 border-2 relative">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={28}
            outerRadius={38}
            startAngle={90}
            endAngle={-270}
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-bold text-xl text-gray-700">{percentage}%</span>
      </div>
    </div>
  );
}
