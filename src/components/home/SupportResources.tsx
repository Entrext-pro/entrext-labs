import React from "react";
import { ecosystemPillars, siteContent } from "@/data/siteContent";

export const SupportResources = () => {
  const { ecosystem } = siteContent.home;

  return (
    <section className="py-24 md:py-36 px-6 bg-white border-t-8 border-black">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-[10px] font-black uppercase tracking-widest opacity-50">{ecosystem.eyebrow}</p>
        <h2 className="mt-4 text-4xl md:text-7xl font-display uppercase italic font-black">{ecosystem.title}</h2>
        <p className="mt-4 text-base md:text-xl font-bold opacity-75 max-w-4xl">{ecosystem.subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {ecosystemPillars.map((pillar) => (
            <div key={pillar} className="border-4 border-black rounded-2xl p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-display uppercase italic font-black">{pillar}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

