import React from 'react'

export default function BarStats({bg='bg-blue-400',icon, title='Total Visits', value='30', percent, percentColor='bg-red-300'}) {

  let percentDiv = <></>;

  if(percent) {
    percentDiv = (
      <div className="w-20 flex justify-center items-center">
        <div
          className={`w-12 h-5 rounded-lg ${percent>0 ? 'bg-green-700' : 'bg-red-700'} bg-opacity-40 flex justify-center items-center`}
        >
          <p className={`text-sm ${percent>0 ? 'text-green-500' : 'text-red-500'}`}>{percent>0? "+" : "-"}{Math.abs(percent)}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row w-full h-1/4 bg-inherit border border-slate-800 rounded-xl shadow-shadowOne">
      <div className="flex w-20 justify-center items-center">
        <div
          className={`w-12 h-12 rounded-md ${bg} flex justify-center items-center`}
        >
          {icon}
        </div>
      </div>
      <div className="flex-1">
        <p className="text-slate-500 mt-4">{title}</p>
        <p className="text-white text-2xl font-medium">{value}</p>
      </div>
      {percentDiv}
    </div>
  );
}
