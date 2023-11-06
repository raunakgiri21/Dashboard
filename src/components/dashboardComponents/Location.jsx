import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Mo",
    uv: 2000,
    pv: 700,
  },
  {
    name: "Tu",
    uv: 2300,
    pv: 1398,
  },
  {
    name: "we",
    uv: 1200,
    pv: 400,
  },
  {
    name: "Th",
    uv: 3780,
    pv: 1908,
  },
  {
    name: "Fr",
    uv: 1890,
    pv: 1600,
  },
  {
    name: "Sa",
    uv: 1390,
    pv: 300,
  },
  {
    name: "Su",
    uv: 3490,
    pv: 1000,
  },
];

export default function Location() {
  return (
    <div className=" md:w-1/3 w-full h-full min-h-[368px] flex flex-col bg-inherit border border-slate-800 rounded-xl shadow-shadowOne py-2 px-5">
      <div className="flex h-12 w-full justify-between items-center gap-5">
        <div>
          <p className="text-xl text-white font-semibold">Location</p>
        </div>
        <div className="flex gap-5">
          <div className="flex justify-center items-center gap-2">
            <div
              className={`w-3 h-3 rounded-md bg-green-300 flex justify-center items-center`}
            ></div>
            <p className="text-slate-400 text-sm">Country</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div
              className={`w-3 h-3 rounded-md bg-red-500 flex justify-center items-center`}
            ></div>
            <p className="text-slate-400 text-sm">City</p>
          </div>
        </div>
      </div>
      <div>
        <ResponsiveContainer width='100%' height={300}>
          <BarChart
            width={350}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: -15,
              bottom: 5,
            }}
            barSize={10}
          >
            <CartesianGrid
              strokeDasharray="2 2"
              horizontal={false}
            />
            <XAxis dataKey="name" />
            <YAxis dataKey="" />
            {/* <Tooltip /> */}
            <Bar
              dataKey="pv"
              stackId="a"
              fill="rgb(239,68,68)"
            />
            <Bar
              dataKey="uv"
              stackId="a"
              fill="rgb(134,239,172)"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
