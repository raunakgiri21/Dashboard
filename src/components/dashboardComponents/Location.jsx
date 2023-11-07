import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { locationData } from "../../constants/constants";
import axios from "axios";

export default function Location() {
  const [data,setData] = useState(locationData);

  useEffect(() => {
    getLocationData();
  },[])

  const getLocationData = async() => {
    try {
      const { data: myData } = await axios.get(
        "https://mocki.io/v1/57911e7e-5b24-485b-9187-31e5fb9adb2c"
      );
      setData(myData);
    } catch (error) {
      console.log("Error getting location data: ",error);
    }
  }

  return (
    <div className=" md:w-1/3 w-full h-full min-h-[368px] flex flex-col bg-inherit border border-slate-800 rounded-xl shadow-shadowOne py-2 px-5">
      <div className="flex h-12 w-full justify-between items-center gap-5">
        <div>
          <p className="text-xl text-white font-semibold">Location</p>
        </div>
        <div className="flex gap-5">
          <div className="flex justify-center items-center gap-2">
            <div
              className={`w-3 h-3 rounded-md bg-[#00f2de] flex justify-center items-center`}
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
        <ResponsiveContainer
          width="100%"
          height={300}
        >
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
              fill="#00f2de"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
