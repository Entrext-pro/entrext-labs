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
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
        <div className="max-w-4xl">
          <h2 className="text-5xl sm:text-7xl md:text-[9rem] font-display uppercase italic font-black leading-[0.8] mb-6 tracking-tighter">Expanding Next.</h2>
          <p className="text-lg md:text-2xl font-bold leading-tight max-w-3xl mt-6 opacity-70">
            Focused clusters in pipeline, chosen for leverage and clarity rather than portfolio sprawl.
          </p>
        </div>
        <div className="bg-black text-white p-6 rounded-2xl border-4 border-black">
          <p className="font-mono text-[10px] font-black uppercase tracking-widest mb-2 opacity-50">Status</p>
          <p className="text-2xl font-display uppercase italic font-black">Researching</p>
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        <AnimatePresence>
          {displayedComing.map((niche, i) => (
            <NicheCard key={niche.id} niche={niche} index={i + liveNichesCount} isLive={false} />
          ))}
        </AnimatePresence>

        <motion.a
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          href="mailto:entrext.pro@gmail.com"
          className="sticker-card bg-black text-white p-8 flex flex-col items-center justify-center text-center h-full min-h-[360px] border-4 border-black"
        >
          <div className="w-20 h-20 bg-yellow-400 text-black rounded-full flex items-center justify-center mb-8 border-4 border-black">
            <Plus size={48} strokeWidth={4} />
          </div>
          <h3 className="text-3xl font-display uppercase italic font-black mb-4 tracking-tighter">Your Cluster?</h3>
          <p className="text-lg font-black uppercase tracking-widest opacity-60 max-w-[240px]">Propose a vertical you want to lead.</p>
        </motion.a>
      </motion.div>

      <div className="mt-16 md:mt-24 flex justify-center">
        <button onClick={() => setShowAllComing(!showAllComing)} className="btn-primary px-10 py-5 text-xl flex items-center gap-4">
          {showAllComing ? "See Less" : "See All"}
          <ChevronDown className={`transition-transform duration-300 ${showAllComing ? "rotate-180" : ""}`} size={24} strokeWidth={3} />
        </button>
      </div>
    </>
  );
};

