import React from "react";
import { siteContent } from "@/data/siteContent";

export const USPStrip = () => {
  const { usp } = siteContent.home;

  return (
    <section className="py-20 px-6 bg-white border-t-8 border-black">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-mono text-[10px] font-black uppercase tracking-widest opacity-50 mb-4">
          {usp.eyebrow}
        </p>
        <h2 className="text-3xl md:text-5xl font-display uppercase italic font-black leading-tight">
          {usp.title}
        </h2>
        <p className="text-lg md:text-2xl font-bold mt-4 opacity-70">{usp.subtitle}</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {usp.items.map((item) => (
            <div key={item} className="bg-yellow-400 border-4 border-black rounded-2xl py-4 px-6 font-black uppercase">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
