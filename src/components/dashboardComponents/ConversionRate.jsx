import React from 'react'
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
  { name: "Group A", value: 13124213 },
  { name: "Group B", value: 5124213 },
  { name: "Group C", value: 3124213 },
];
const COLORS = ["#3f46f7", "#3e3192", "#2a165e"];

export default function ConversionRate() {
  return (
    <div className=" md:w-1/3 w-full h-full min-h-[368px] flex flex-col bg-inherit border border-slate-800 rounded-xl shadow-shadowOne py-4 px-5">
      <div className="flex flex-col h-12 w-full justify-between gap-2">
        <p className="text-xl text-white font-semibold">Conversion Rate</p>
      </div>

      <div className="flex flex-col md:flex-row justify-evenly md:mt-10">
        <div className="flex justify-center items-center">
          <PieChart
            width={170}
            height={170}
          >
            <Pie
              data={data}
              cx={80}
              cy={80}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              Label
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="md:mt-0 mt-2 flex flex-col gap-3">
          <div>
            <div className="flex items-center gap-2">
              <div
                className={`w-6 h-1 rounded-md bg-[#3f46f7] flex justify-center items-center`}
              ></div>
              <p className="text-slate-500 text-sm">Total User Visit</p>
            </div>
            <p className="text-white pl-8 text-sm">{(13124213).toLocaleString()} users</p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <div
                className={`w-6 h-1 rounded-md bg-[#3e3192] flex justify-center items-center`}
              ></div>
              <p className="text-slate-500 text-sm">User Sign Up</p>
            </div>
            <p className="text-white pl-8 text-sm">{(5124213).toLocaleString()} users</p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <div
                className={`w-6 h-1 rounded-md bg-[#2a165e] flex justify-center items-center`}
              ></div>
              <p className="text-slate-500 text-sm">User Subscribed</p>
            </div>
            <p className="text-white pl-8 text-sm">{(3124213).toLocaleString()} users</p>
          </div>
        </div>
      </div>
    </div>
  );
}
