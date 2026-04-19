import React from "react";
import { journeySteps, siteContent } from "@/data/siteContent";

export const TheModel = () => {
  const { journey } = siteContent.home;

  return (
    <section id="journey" className="py-24 md:py-36 px-6 bg-white border-t-8 border-black">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-[10px] font-black uppercase tracking-widest opacity-50 mb-4">{journey.eyebrow}</p>
        <h2 className="text-4xl md:text-7xl font-display uppercase italic font-black tracking-tighter">{journey.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {journeySteps.map((step) => (
            <article key={step.step} className="border-4 border-black rounded-2xl p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <p className="font-mono text-[10px] font-black uppercase opacity-50">{step.step}</p>
              <h3 className="mt-4 text-xl font-display uppercase italic font-black">{step.title}</h3>
              <p className="mt-4 text-sm font-bold opacity-70 leading-tight">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
