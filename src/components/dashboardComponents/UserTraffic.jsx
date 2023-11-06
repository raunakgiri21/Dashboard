import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  {
    name: "Jan",
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    pv: -5800,
    amt: 2290,
  },
  {
    name: "Apr",
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    pv: -3800,
    amt: 2500,
  },
  {
    name: "Jul",
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    pv: -9800,
    amt: 2290,
  },
  {
    name: "Sep",
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Oct",
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Nov",
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Nov",
    pv: 2400,
    amt: 2400,
  },
];

export default function UserTraffic() {
  return (
    <div className="flex flex-col w-full h-full min-h-[400px] bg-inherit border border-slate-800 rounded-xl shadow-shadowOne py-4 px-5">
      <div className="flex md:flex-row flex-col justify-between md:items-center h-12 w-full">
        <div>
          <p className="text-xl text-white font-semibold">User Traffic</p>
        </div>
        <div className="flex md:gap-8 gap-4 md:mt-0 mt-2 justify-between">
          <div className="flex md:gap-8 gap-4">
            <div className="flex justify-center items-center md:gap-2 gap-1">
              <div
                className={`w-3 h-3 rounded-sm bg-blue-500 flex justify-center items-center`}
              ></div>
              <p className="text-slate-400 text-sm">User Sign Up</p>
            </div>
            <div className="flex justify-center items-center md:gap-2 gap-1">
              <div
                className={`w-3 h-3 rounded-sm bg-red-500 flex justify-center items-center`}
              ></div>
              <p className="text-slate-400 text-sm">User Subscribed</p>
            </div>
          </div>
          <div>
            <select className=" cursor-pointer bg-inherit text-slate-500 border border-purple-900 rounded-[7px] px-[2px] py-[2px] md:w-28 w-16 text-sm">
              <option>Current Year</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <ResponsiveContainer
          height={300}
          width="100%"
        >
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 40,
              right: 10,
              left: -10,
              bottom: 0,
            }}
            barSize={30}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />
            <XAxis dataKey="name" />
            <YAxis />
            {/* <Tooltip /> */}
            <ReferenceLine
              y={0}
              stroke="#000"
            />
            <Bar
              dataKey="pv"
              fill="#8884d8"
            >
              {data.map((entry, index) => {
                const color =
                  entry.pv > 0 ? "rgb(59,130,246)" : "rgb(239,68,68)";
                return <Cell fill={color} />;
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
