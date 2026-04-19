import React from "react";
import { siteContent } from "@/data/siteContent";

const painPoints = [
  {
    id: "01",
    title: "Tech founder with no distribution",
    desc: "You can build a great product and still launch into silence without a growth partner.",
  },
  {
    id: "02",
    title: "Growth founder with no product",
    desc: "You can see demand clearly, but ideas die when there is no technical co-founder to build fast.",
  },
  {
    id: "03",
    title: "Both founders with no direction",
    desc: "Without a mentor who knows your niche, every decision turns into expensive guesswork.",
  },
];

export const ProblemStatement = () => {
  const { problem } = siteContent.home;

  return (
    <section className="py-24 md:py-36 px-6 bg-black text-white border-t-8 border-black">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-[10px] font-black uppercase tracking-widest text-yellow-400">{problem.eyebrow}</p>
        <h2 className="mt-4 text-4xl md:text-7xl font-display uppercase italic font-black leading-tight">{problem.title}</h2>
        <p className="mt-4 text-base md:text-xl font-bold opacity-80">{problem.subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {painPoints.map((point) => (
            <div key={point.id} className="border-4 border-white/20 rounded-2xl p-6 bg-white/5">
              <p className="font-mono text-xs font-black uppercase text-yellow-400">{point.id}</p>
              <h3 className="mt-3 text-2xl font-display uppercase italic font-black">{point.title}</h3>
              <p className="mt-4 text-sm font-bold opacity-80 leading-tight">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

