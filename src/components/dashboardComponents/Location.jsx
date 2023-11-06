import React from 'react'

export default function Location() {
  return (
    <div className=" md:w-1/3 w-full h-full min-h-[368px] flex flex-row bg-inherit border border-slate-800 rounded-xl shadow-shadowOne py-2 px-5">
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
      <div></div>
    </div>
  );
}
