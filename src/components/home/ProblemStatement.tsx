import React from "react";
import { siteContent } from "@/data/siteContent";
import { XCircle, ArrowDown } from "lucide-react";

export const ProblemStatement = () => {
  const { problem } = siteContent.home;

  return (
    <section className="py-24 md:py-36 px-6 bg-obsidian text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-black uppercase tracking-widest text-red-500 mb-4">
              {problem.eyebrow}
            </p>
            <h2 className="text-4xl md:text-7xl font-display uppercase font-black tracking-tighter">
              {problem.title}
            </h2>
            <p className="mt-6 text-xl md:text-2xl font-bold text-muted">
              {problem.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {problem.items.map((item, idx) => (
            <div key={idx} className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col items-start group">
              <div className="flex items-center gap-3 text-red-500 mb-6">
                <XCircle size={24} />
                <span className="font-mono text-sm font-black uppercase tracking-widest">→</span>
              </div>
              <h3 className="text-2xl font-display uppercase font-black tracking-tight text-white mb-4 group-hover:text-red-500 transition-colors">
                {item.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-white/10 text-center">
          <div className="inline-flex items-center gap-4 text-electric-cyan mb-8 animate-float">
             <ArrowDown size={32} />
          </div>
          <p className="text-2xl md:text-4xl font-display uppercase font-black tracking-tighter max-w-4xl mx-auto">
            {problem.closing}
          </p>
          <p className="mt-8 font-mono text-xs tracking-[0.5em] text-white/30 uppercase">
            {problem.signature}
          </p>
        </div>
      </div>
    </section>
  );
};


