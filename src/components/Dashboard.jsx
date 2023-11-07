import React, { useEffect, useState } from "react";
import BarStats from "./dashboardComponents/BarStats";
import { BsArrowDownLeft, BsArrowUpRight } from "react-icons/bs";
import { TbChartCandleFilled } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import UserTraffic from "./dashboardComponents/UserTraffic";
import Location from "./dashboardComponents/Location";
import WebsiteAnalytics from "./dashboardComponents/WebsiteAnalytics";
import ConversionRate from "./dashboardComponents/ConversionRate";
import { barStats } from "../constants/constants";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState({
    totalSubscribers: 0,
    totalVisits: 0,
    totalVisitsIncrease: 0,
    totalSubscribersIncrease: 0,
    activeUsers: 0,
    totalClicks: 0,
  });
  
  useEffect(() => {
    const index = Math.floor(Math.random() * barStats.length);
    const myData = barStats[index];
    setData(myData);
    getBarStatsData();
  }, []);

  const getBarStatsData = async() => {
    try {
      const {data} = await axios.get(
        "https://mocki.io/v1/a30688f2-a260-47ae-ad9d-76f759939e5a"
      );
      setData(data)
    } catch (error) {
      console.log("Error getting api-data for barStats:",error)
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col md:flex-row md:h-1/2 h-full gap-4">
        <div className="grid md:grid-cols-1 md:w-1/4 md:h-full h-1/2 min-h-[400px] gap-3">
          <BarStats
            bg="bg-blue-500"
            title="Total Visits"
            value={data?.totalVisits}
            percent={data?.totalVisitsIncrease}
            icon={
              <BsArrowDownLeft
                className="text-white"
                fontSize={28}
              />
            }
          />
          <BarStats
            bg="bg-orange-400"
            title="Total Subscribers"
            value={data?.totalSubscribers}
            percent={data?.totalSubscribersIncrease}
            icon={
              <BsArrowUpRight
                className="text-white"
                fontSize={28}
              />
            }
          />
          <BarStats
            bg="bg-green-500"
            title="Active Users"
            value={data?.activeUsers}
            icon={
              <TbChartCandleFilled
                className="text-white"
                fontSize={28}
              />
            }
          />
          <BarStats
            bg="bg-purple-500"
            title="Total Clicks"
            value={data?.totalClicks}
            icon={
              <BsGraphUpArrow
                className="text-white"
                fontSize={28}
              />
            }
          />
        </div>
        <UserTraffic className="h-1/2" />
      </div>
      <div className="md:h-1/2 h-full w-full min-h-[368px] flex md:flex-row flex-col gap-5 mt-5 mb-2">
        <Location />
        <ConversionRate />
        <WebsiteAnalytics />
      </div>
    </div>
  );
}
