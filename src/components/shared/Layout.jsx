import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col overflow-hidden p-16 py-4 h-screen w-screen">
      <div className="flex justify-between h-24 items-center">
        <div>
          <p className="text-3xl text-slate-300 font-semibold">
            User Analytics
          </p>
          <p className="text-slate-500 mt-2">
            Lorem ipsum dolor sit consectetur
          </p>
        </div>
        <div>
          <select className="cursor-pointer bg-inherit text-slate-500 border border-purple-900 rounded-[7px] px-1 py-2 w-36">
            <option>User</option>
          </select>
        </div>
      </div>
      <div className="h-full">{<Outlet />}</div>
    </div>
  );
}
