import React from "react";
import { siteContent } from "@/data/siteContent";
import { ShieldCheck, UserPlus, Globe, Map, PieChart, TrendingUp } from "lucide-react";

export const SupportResources = () => {
  const { ecosystem } = siteContent.home;
  const icons = [ShieldCheck, UserPlus, Globe, Map, PieChart, TrendingUp];

  return (
    <section className="py-24 md:py-36 px-6 bg-[#0A0A0B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <p className="font-mono text-xs font-black uppercase tracking-widest text-electric-cyan mb-4">
            {ecosystem.eyebrow}
          </p>
          <h2 className="text-4xl md:text-7xl font-display uppercase font-black tracking-tighter">
            {ecosystem.title}
          </h2>
          <p className="mt-6 text-xl md:text-2xl font-bold text-muted max-w-2xl mx-auto">
            {ecosystem.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {ecosystem.items.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div key={idx} className="lab-card group hover:border-electric-cyan/30">
                <div className="w-10 h-10 rounded-lg bg-electric-cyan/10 flex items-center justify-center mb-6">
                  <Icon className="text-electric-cyan" size={20} />
                </div>
                <h3 className="text-xl font-display uppercase font-black tracking-tight text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


