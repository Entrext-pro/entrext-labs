"use client";

import React from "react";
import { siteContent } from "@/data/siteContent";
import { Check, Info } from "lucide-react";
import { motion } from "motion/react";

export const RolesComparison = () => {
  const { rolesComparison } = siteContent.home;

  return (
    <section className="py-24 md:py-48 px-6 bg-yellow-400 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-mono text-xs font-black uppercase tracking-widest text-black/50 mb-4"
          >
            {rolesComparison.eyebrow}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-[8rem] font-display uppercase italic font-black leading-[0.85] tracking-tighter text-black"
          >
            {rolesComparison.title}
          </motion.h2>
        </div>

        <div className="overflow-x-auto no-scrollbar sticker-card border-4 border-black bg-white">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-4 border-black">
                <th className="p-8 text-left bg-black/5 border-r-4 border-black">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-black/40 font-black">FEATURE DIMENSION</span>
                </th>
                <th className="p-8 text-center bg-black text-white border-r-4 border-black">
                  <span className="text-2xl md:text-3xl font-display uppercase italic font-black tracking-tight">
                    {rolesComparison.headers[0]}
                  </span>
                </th>
                <th className="p-8 text-center bg-yellow-400 text-black">
                  <span className="text-2xl md:text-3xl font-display uppercase italic font-black tracking-tight">
                    {rolesComparison.headers[1]}
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rolesComparison.rows.map((row, idx) => (
                <tr key={idx} className="group border-b-2 border-black last:border-b-0">
                  <td className="p-8 border-r-4 border-black font-mono text-[10px] font-black uppercase tracking-widest text-black/30 bg-black/5 group-hover:bg-black group-hover:text-white transition-colors">
                    Dimension {idx + 1}
                  </td>
                  <td className="p-8 border-r-4 border-black text-center font-black text-black italic text-lg group-hover:bg-black group-hover:text-white transition-all">
                    {row[0]}
                  </td>
                  <td className="p-8 text-center font-black text-black italic text-lg group-hover:bg-white transition-all">
                    {row[1]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
           {rolesComparison.footer.map((note, i) => (
             <div key={i} className="flex items-start gap-6 p-8 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
               <div className="w-10 h-10 bg-black text-white flex items-center justify-center shrink-0">
                  <Info size={24} strokeWidth={3} />
               </div>
               <p className="text-base font-bold text-black leading-tight italic">
                 {note}
               </p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
