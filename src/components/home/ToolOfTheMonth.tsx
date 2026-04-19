import React from "react";
import { ArrowUpRight } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export const ToolOfTheMonth = () => {
  const { featured } = siteContent.home;

  return (
    <section className="py-20 px-6 bg-black text-white border-t-8 border-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-mono text-[10px] font-black uppercase tracking-widest text-yellow-400">{featured.eyebrow}</p>
          <h2 className="mt-4 text-5xl md:text-7xl font-display uppercase italic font-black">{featured.title}</h2>
          <p className="mt-6 text-base md:text-xl font-bold opacity-80">{featured.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            {featured.stats.map((s) => (
              <div key={s} className="border-2 border-white/30 rounded-lg px-4 py-2 font-mono text-xs uppercase font-black">
                {s}
              </div>
            ))}
          </div>
          <a href={featured.cta.href} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 inline-flex items-center gap-3 px-8 py-4 text-lg">
            {featured.cta.label} <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="border-8 border-black rounded-[2rem] overflow-hidden bg-white">
          <img
            src="https://picsum.photos/seed/secretroom/1200/800"
            alt="Secretroom preview"
            className="w-full h-[320px] object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
};

