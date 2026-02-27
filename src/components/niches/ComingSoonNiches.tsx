import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Plus, ChevronDown } from 'lucide-react';

interface Niche {
  title: string;
  desc: string;
  color: string;
}

interface ComingSoonNichesProps {
  niches: Niche[];
  liveNichesCount: number;
}

export const ComingSoonNiches = ({ niches, liveNichesCount }: ComingSoonNichesProps) => {
  const [showAllComing, setShowAllComing] = useState(false);
  const displayedComing = showAllComing ? niches : niches.slice(0, 6);

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-32 gap-8 md:gap-12">
        <div className="max-w-4xl">
          <h2 className="text-5xl sm:text-7xl md:text-[9rem] font-display uppercase italic font-black leading-[0.8] mb-6 md:mb-8 tracking-tighter">Coming Soon.</h2>
          <p className="text-lg md:text-3xl font-bold leading-tight max-w-3xl mt-6 md:mt-8 opacity-60">
            We are currently mapping out the next generation of business verticals.
            <span className="text-black underline decoration-4 underline-offset-8"> Propose your own if you have the vision.</span>
          </p>
        </div>
        <div className="bg-black text-white p-6 md:p-12 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] self-start md:self-auto border-4 border-black">
          <p className="font-mono text-[10px] font-black uppercase tracking-widest mb-2 opacity-40">Status</p>
          <p className="text-2xl md:text-4xl font-display uppercase italic font-black">Researching</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        <AnimatePresence mode="popLayout">
          {displayedComing.map((niche, i) => (
            <motion.div
              key={niche.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -10, rotate: i % 2 === 0 ? 1 : -1 }}
              className="sticker-card p-8 md:p-10 flex flex-col h-full min-h-[350px] md:min-h-[400px] relative group opacity-60 hover:opacity-100 transition-all bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex items-center justify-between mb-8 md:mb-12">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-black text-white rounded-2xl flex items-center justify-center font-display text-2xl md:text-4xl font-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                  {String(i + 1 + liveNichesCount).padStart(2, '0')}
                </div>
                <div className="flex items-center gap-2 bg-yellow-400 text-black px-4 md:px-6 py-2 rounded-full border-2 border-black shadow-lg">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-black rounded-full" />
                  <span className="font-mono text-[8px] md:text-[10px] font-black uppercase tracking-widest">COMING_SOON</span>
                </div>
              </div>

              <h3 className="text-2xl md:text-5xl font-display uppercase italic font-black leading-[0.8] mb-6 md:mb-8 tracking-tighter">{niche.title}</h3>
              <p className="text-lg md:text-xl font-bold leading-tight mb-8 md:mb-10 flex-1 opacity-60">
                {niche.desc}
              </p>

              <div className="pt-6 md:pt-8 border-t-4 border-black flex items-center justify-between">
                <button className="btn-secondary w-full flex items-center justify-center gap-4 text-lg md:text-xl py-4 md:py-5">
                  Apply to Lead <ArrowUpRight size={28} strokeWidth={3} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Propose Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          onClick={() => window.location.href = 'mailto:entrext.pro@gmail.com'}
          className="sticker-card bg-black text-white p-8 md:p-10 flex flex-col items-center justify-center text-center h-full min-h-[350px] md:min-h-[400px] cursor-pointer border-4 border-black group shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 bg-yellow-400 text-black rounded-full flex items-center justify-center mb-8 md:mb-10 group-hover:rotate-90 transition-transform shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] border-4 border-black">
            <Plus size={64} strokeWidth={4} />
          </div>
          <h3 className="text-3xl md:text-5xl font-display uppercase italic font-black mb-6 md:mb-8 tracking-tighter">YOUR NICHE?</h3>
          <p className="text-lg md:text-2xl font-black uppercase tracking-widest opacity-40 max-w-[240px]">Propose a vertical you want to lead.</p>
          <div className="mt-8 md:mt-10 bg-white text-black px-8 md:px-12 py-4 md:py-5 rounded-2xl font-black text-xl md:text-2xl uppercase tracking-widest group-hover:bg-yellow-400 transition-all border-4 border-black shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]">
            Propose Now
          </div>
        </motion.div>
      </div>

      <div className="mt-16 md:mt-24 flex justify-center">
        <button
          onClick={() => setShowAllComing(!showAllComing)}
          className="btn-primary px-12 md:px-20 py-6 md:py-8 text-2xl md:text-3xl flex items-center gap-4 md:gap-6"
        >
          {showAllComing ? "SEE LESS" : "SEE ALL NICHES"}
          <ChevronDown className={`transition-transform duration-300 ${showAllComing ? 'rotate-180' : ''}`} size={40} strokeWidth={4} />
        </button>
      </div>
    </>
  );
};
