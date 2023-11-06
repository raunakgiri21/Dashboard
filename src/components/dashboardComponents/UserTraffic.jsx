import React from "react";

export default function UserTraffic() {
  return (
    <div className="flex flex-row w-full h-full bg-inherit border border-slate-800 rounded-xl shadow-shadowOne py-4 px-5">
      <div className="flex justify-between items-center h-12 w-full">
        <div>
          <p className="text-xl text-white font-semibold">User Traffic</p>
        </div>
        <div className="flex gap-8">
          <div className="flex justify-center items-center gap-2">
            <div
              className={`w-3 h-3 rounded-sm bg-blue-500 flex justify-center items-center`}
            ></div>
            <p className="text-slate-400 text-sm">User Sign Up</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div
              className={`w-3 h-3 rounded-sm bg-red-500 flex justify-center items-center`}
            ></div>
            <p className="text-slate-400 text-sm">User Subscribed</p>
          </div>
          <div>
            <select className=" cursor-pointer bg-inherit text-slate-500 border border-purple-900 rounded-[7px] px-[2px] py-[2px] w-28 text-sm">
              <option>Current Year</option>
            </select>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
