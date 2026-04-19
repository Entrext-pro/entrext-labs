"use client";

import React from "react";
import { sevenCs, siteContent } from "@/data/siteContent";

export const CoreValues = () => {
  const { sevenCs: content } = siteContent.home;

  return (
    <section className="py-24 md:py-36 px-6 bg-white border-t-8 border-black">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-[10px] font-black uppercase tracking-widest opacity-50 mb-4">{content.eyebrow}</p>
        <h2 className="text-4xl md:text-7xl font-display uppercase italic font-black tracking-tighter">{content.title}</h2>
        <p className="text-base md:text-xl font-bold mt-4 opacity-70">{content.subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {sevenCs.map((item) => (
            <div key={item.code} className="border-4 border-black rounded-2xl p-6 bg-yellow-50 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <p className="font-mono text-[10px] font-black uppercase opacity-50">{item.code}</p>
              <h3 className="mt-4 text-2xl font-display uppercase italic font-black">{item.title}</h3>
              <p className="mt-3 text-sm font-bold opacity-75 leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

