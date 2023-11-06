import React, { useState } from 'react';

export default function WebsiteAnalytics() {
  const [analyticsState, setAnalyticsState] = useState(2); // [weekly, monthly, yearly]

  return (
    <div className="md:w-1/3 w-full h-full min-h-[368px] flex flex-row bg-inherit border border-slate-800 rounded-xl shadow-shadowOne py-4 px-5">
      <div className="flex flex-col h-12 w-full justify-between gap-2">
        <div>
          <p className="text-xl text-white font-semibold">Website Analytics</p>
          <p className="text-slate-500">Based on your performance</p>
        </div>
        <div className="flex gap-5">
          <div>
            <ul className="w-full grid grid-cols-3">
              <li
                className={`${
                  analyticsState === 1
                    ? "border-slate-800 rounded-lg bg-purple-900"
                    : "border-transparent"
                } analyticsSelector`}
                onClick={() => setAnalyticsState(1)}
              >
                Weekly
              </li>
              <li
                className={`${
                  analyticsState === 2
                    ? "border-slate-800 rounded-lg bg-purple-900"
                    : "border-transparent"
                } analyticsSelector`}
                onClick={() => setAnalyticsState(2)}
              >
                Monthly
              </li>
              <li
                className={`${
                  analyticsState === 3
                    ? "border-slate-800 rounded-lg bg-purple-900"
                    : "border-transparent"
                } analyticsSelector`}
                onClick={() => setAnalyticsState(3)}
              >
                Yearly
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
