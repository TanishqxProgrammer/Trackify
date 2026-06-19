import React from "react";
import DailyHabit from "./DailyHabit";
import Week1 from "./Week1";
import Week2 from "./Week2";
import Week3 from "./Week3";
import Week4 from "./Week4";
import Week5 from "./Week5";
import Goal from "./Goal";
import Progress from "./Progress";

const Middle = ({ habits, setHabits, totalDays }) => {
  return (
    <div className="h-136 w-full p-2 border-2 flex">

      <DailyHabit habits={habits} setHabits={setHabits} />

      <Week1 habits={habits} setHabits={setHabits} />

      <Week2 habits={habits} setHabits={setHabits} />

      <Week3 habits={habits} setHabits={setHabits} />

      <Week4 habits={habits} setHabits={setHabits} />

      <Week5
        habits={habits}
        setHabits={setHabits}
        totalDays={totalDays}
      />

      <Goal habits={habits} setHabits={setHabits} />

      <Progress habits={habits} />

    </div>
  );
};

export default Middle;
