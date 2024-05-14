import React from "react";
import { StartItem } from "../../Configs/StatsItem";
import { IStats } from "../../Interfaces/Configs/Stats.interface";
export default function Stats() {
  return (
    <div className="subContainer bg-green-500 grid grid-cols-4 gap-8 justify-between items-center p-10">
      {StartItem.map((item: IStats) => {
        const { key, heading, desc } = item;
        return (
          <div key={key} className="grid justify-center items-center">
            <h1 className="h1 text-white text-center">{heading}</h1>
            <p className="text-white  text-center">{desc}</p>
          </div>
        );
      })}
    </div>
  );
}
