"use client";

import React from "react";

const items = [
  "Validated at Velocity",
  "Primary Partner Model",
  "Secondary Partner Scaling",
  "Real Equity",
  "Experimental Lab",
  "Matched Opposite Partners",
  "Shipping Community",
  "Hypothesis Focused",
  "Architecture Driven",
];

export const MarqueeStrip = () => {
  return (
    <div className="py-12 bg-black overflow-hidden border-y-8 border-black">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-8 mx-8">
            <span className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tighter text-yellow-400">
              {item}
            </span>
            <div className="w-12 h-12 bg-white rotate-45 border-4 border-black shadow-[4px_4px_0px_0px_rgba(250,204,21,1)]" />
          </div>
        ))}
      </div>
    </div>
  );
};
