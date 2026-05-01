import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, ChevronDown } from "lucide-react";
import { NicheCard } from "./NicheCard";
import { Niche } from "@/types";

interface ComingSoonNichesProps {
  niches: Niche[];
  liveNichesCount: number;
}

export const ComingSoonNiches = ({ niches, liveNichesCount }: ComingSoonNichesProps) => {
  const [showAllComing, setShowAllComing] = useState(false);
  const displayedComing = showAllComing ? niches : niches.slice(0, 3);

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="max-w-4xl"
        >
          <h2 className="text-6xl md:text-[8rem] font-display uppercase italic font-black leading-[0.8] tracking-tighter text-black">
            Expanding Next.
          </h2>
          <p className="text-2xl font-black text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] max-w-3xl mt-10 italic">
            Focused clusters in pipeline, chosen for leverage and clarity rather than portfolio sprawl.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white text-black p-10 border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] -rotate-3"
        >
          <p className="font-mono text-[10px] font-black uppercase tracking-[0.3em] mb-3 text-black/40">STATUS</p>
          <p className="text-3xl font-display uppercase italic font-black tracking-tight">Researching</p>
        </motion.div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <AnimatePresence>
          {displayedComing.map((niche, i) => (
            <NicheCard key={niche.id} niche={niche} index={i + liveNichesCount} isLive={false} />
          ))}
        </AnimatePresence>

        <motion.a
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          href="mailto:entrext.pro@gmail.com"
          className="sticker-card bg-black text-white p-12 flex flex-col items-center justify-center text-center h-full min-h-[420px] border-8 border-black group hover:bg-white hover:text-black transition-all duration-300 shadow-[16px_16px_0px_0px_rgba(0,0,0,0.5)]"
        >
          <div className="w-24 h-24 bg-white text-black border-4 border-black flex items-center justify-center mb-10 group-hover:scale-110 transition-transform shadow-[8px_8px_0px_0px_rgba(250,204,21,1)]">
            <Plus size={48} strokeWidth={4} />
          </div>
          <h3 className="text-4xl font-display uppercase italic font-black mb-6 tracking-tight">Your Cluster?</h3>
          <p className="text-sm font-black uppercase tracking-[0.3em] opacity-60 max-w-[240px] italic">Propose a vertical you want to lead.</p>
        </motion.a>
      </motion.div>

      <div className="mt-24 flex justify-center">
        <button 
          onClick={() => setShowAllComing(!showAllComing)} 
          className="btn-primary px-16 py-6 text-2xl flex items-center gap-6 group bg-black text-white border-4 border-black hover:bg-white hover:text-black transition-all"
        >
          {showAllComing ? "SEE LESS" : "SEE ALL CLUSTERS"}
          <ChevronDown className={`transition-transform duration-300 ${showAllComing ? "rotate-180" : ""} group-hover:translate-y-1`} size={32} strokeWidth={4} />
        </button>
      </div>
    </>
  );
};


