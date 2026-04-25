import React from "react";
import { siteContent } from "@/data/siteContent";
import { CheckCircle2, Users, Zap } from "lucide-react";

export const TheModel = () => {
  const { usp } = siteContent.home;
  const icons = [Zap, Users, CheckCircle2];

  return (
    <section className="py-24 md:py-36 px-6 bg-[#0A0A0B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center md:text-left">
          <p className="font-mono text-xs font-black uppercase tracking-widest text-electric-cyan mb-4">
            {usp.eyebrow}
          </p>
          <h2 className="text-4xl md:text-7xl font-display uppercase font-black tracking-tighter max-w-4xl">
            {usp.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {usp.items.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <article key={idx} className="lab-card group">
                <div className="w-12 h-12 rounded-xl bg-electric-cyan/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-electric-cyan" size={24} />
                </div>
                <h3 className="text-2xl font-display uppercase font-black tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-muted leading-relaxed">
                  {item.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
