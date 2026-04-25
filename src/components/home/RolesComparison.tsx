"use client";

import React from "react";
import { siteContent } from "@/data/siteContent";
import { Check, Info } from "lucide-react";

export const RolesComparison = () => {
  const { rolesComparison } = siteContent.home;

  return (
    <section className="py-24 md:py-36 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-mono text-xs font-black uppercase tracking-widest text-electric-cyan mb-4">
            {rolesComparison.eyebrow}
          </p>
          <h2 className="text-4xl md:text-7xl font-display uppercase font-black tracking-tighter text-white">
            {rolesComparison.title}
          </h2>
        </div>

        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-6 text-left border-b border-white/10 bg-white/[0.02]">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">FEATURE</span>
                </th>
                <th className="p-6 text-center border-b border-white/10 bg-neon-lime/10">
                  <span className="text-xl font-display uppercase font-black tracking-tight text-neon-lime">
                    {rolesComparison.headers[0]}
                  </span>
                </th>
                <th className="p-6 text-center border-b border-white/10 bg-electric-cyan/10">
                  <span className="text-xl font-display uppercase font-black tracking-tight text-electric-cyan">
                    {rolesComparison.headers[1]}
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rolesComparison.rows.map((row, idx) => (
                <tr key={idx} className="group">
                  <td className="p-6 border-b border-white/5 font-bold text-white/60 group-hover:text-white transition-colors">
                    {/* Placeholder for feature names if they were named, using content instead */}
                    <span className="text-sm uppercase tracking-wide">Dimension {idx + 1}</span>
                  </td>
                  <td className="p-6 border-b border-white/5 text-center bg-neon-lime/[0.02] font-black text-white italic">
                    {row[0]}
                  </td>
                  <td className="p-6 border-b border-white/5 text-center bg-electric-cyan/[0.02] font-black text-white italic">
                    {row[1]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
           {rolesComparison.footer.map((note, i) => (
             <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10">
               <Info className="text-electric-cyan shrink-0" size={20} />
               <p className="text-sm font-bold text-white/80 leading-relaxed">
                 {note}
               </p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
