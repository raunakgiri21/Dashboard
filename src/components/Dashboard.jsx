import React from "react";
import BarStats from "./dashboardComponents/BarStats";
import { BsArrowDownLeft, BsArrowUpRight } from "react-icons/bs";
import { TbChartCandleFilled } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import UserTraffic from "./dashboardComponents/UserTraffic";
import Location from "./dashboardComponents/Location";
import WebsiteAnalytics from "./dashboardComponents/WebsiteAnalytics";
import ConversionRate from "./dashboardComponents/ConversionRate";

export default function Dashboard() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col md:flex-row md:h-1/2 h-full gap-4">
        <div className="grid md:grid-cols-1 md:w-1/4 md:h-full h-1/2 min-h-[400px] gap-3">
          <BarStats
            bg="bg-blue-500"
            title="Total Visits"
            value="6300"
            percent={1.29}
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
            value="32"
            percent={-1.29}
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
            value="20"
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
            value="199"
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
