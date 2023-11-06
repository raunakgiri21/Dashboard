import React, { useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "Nov",
    week: "last week",
    year: "2022",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    month: "Jan",
    week: "w-1",
    year: "2023",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    month: "Feb",
    week: "w-2",
    year: "2024",
    uv: 2000,
    pv: 7800,
    amt: 2290,
  },
  {
    month: "Mar",
    week: "w-3",
    year: "2025",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    month: "Apr",
    week: "w-4",
    year: "2026",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

export default function WebsiteAnalytics() {
  const [analyticsState, setAnalyticsState] = useState("month"); // [weekly, monthly, yearly]
  
  useEffect(() => {

  }, [analyticsState]);

  return (
    <div className="md:w-1/3 w-full h-full min-h-[368px] flex flex-col bg-inherit border border-slate-800 rounded-xl shadow-shadowOne py-4 px-5">
      <div className="flex flex-col h-24 w-full justify-between gap-2">
        <div>
          <p className="text-xl text-white font-semibold">Website Analytics</p>
          <p className="text-slate-500">Based on your performance</p>
        </div>
        <div className="flex gap-5">
          <div>
            <ul className="w-full grid grid-cols-3">
              <li
                className={`${
                  analyticsState === "week"
                    ? "border-slate-800 rounded-lg bg-purple-900"
                    : "border-transparent"
                } analyticsSelector`}
                onClick={() => setAnalyticsState("week")}
              >
                Weekly
              </li>
              <li
                className={`${
                  analyticsState === "month"
                    ? "border-slate-800 rounded-lg bg-purple-900"
                    : "border-transparent"
                } analyticsSelector`}
                onClick={() => setAnalyticsState("month")}
              >
                Monthly
              </li>
              <li
                className={`${
                  analyticsState === "year"
                    ? "border-slate-800 rounded-lg bg-purple-900"
                    : "border-transparent"
                } analyticsSelector`}
                onClick={() => setAnalyticsState("year")}
              >
                Yearly
              </li>
            </ul>
          </div>
        </div>
      </div>

      { analyticsState &&
        <div>
          <ResponsiveContainer
            width="100%"
            height={220}
          >
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 10,
                left: -10,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={analyticsState} />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#82ca9d"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      }
      <div className="flex gap-8 pl-12 items-center">
        <div className="flex gap-2 items-center">
          <div
            className={`w-4 h-4 rounded-sm bg-[#3f46f7] flex justify-center items-center`}
          >
            <AiOutlineCheck className="text-white" />
          </div>
          <p className="text-slate-300 text-sm">Visits</p>
        </div>
        <div className="flex gap-2 items-center">
          <div
            className={`w-4 h-4 rounded-sm bg-green-700 flex justify-center items-center`}
          >
            <AiOutlineCheck className="text-white" />
          </div>
          <p className="text-slate-300 text-sm">Sessions</p>
        </div>
      </div>
    </div>
  );
}
