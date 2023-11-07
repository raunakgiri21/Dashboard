import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Cell,
  Tooltip,
} from "recharts";
import { userTrafficData } from "../../constants/constants";

export default function UserTraffic() {
  const [data, setData] = useState(userTrafficData);

  useEffect(() => {
    getUserTrafficData();
  }, []);

  const getUserTrafficData = async() => {
    try {
      const { data: myData } = await axios.get(
        "https://mocki.io/v1/891633bb-0c12-40e6-bd6e-c99e6594d254"
      );
      setData(myData);
    } catch (error) {
      console.log("Error getting user traffic data: ", error);
    }
  };

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
            barSize={75}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <ReferenceLine
              y={0}
              stroke="#000"
            />
            <Bar
              dataKey="amt"
              fill="#8884d8"
            >
              {data.map((entry, index) => {
                const color =
                  entry.amt > 0 ? "rgb(59,130,246)" : "rgb(239,68,68)";
                return <Cell key={index} fill={color} />;
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
