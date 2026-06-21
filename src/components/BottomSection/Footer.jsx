import React from "react";
import WeeklyProgress from "./WeeklyProgress";
import Week1circle from "./Week1circle";
import Week2circle from "./Week2circle";
import Week3circle from "./Week3circle";
import Week4circle from "./Week4circle";
import Week5circle from "./Week5cicle";
import Notes from "./Notes";

const Footer = () => {
  return (
    <div className="p-2 flex border-2">
      <WeeklyProgress />
      <Week1circle />
      <Week2circle />
      <Week3circle />
      <Week4circle />
      <Week5circle />
      <Notes />
    </div>
  );
};

export default Footer;
