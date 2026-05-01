"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export const FAQ = () => {
  const { faq } = siteContent.home;
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="py-24 md:py-48 px-6 bg-yellow-400 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-mono text-xs font-black uppercase tracking-widest text-black/50 mb-4"
          >
            {faq.eyebrow}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-[8rem] font-display uppercase italic font-black leading-[0.85] tracking-tighter text-black"
          >
            {faq.title}
          </motion.h2>
          <p className="mt-10 text-2xl md:text-4xl font-black text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] max-w-4xl italic">
            {faq.subtitle}
          </p>
        </div>

        <div className="space-y-6">
          {faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`sticker-card bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-none translate-x-1 translate-y-1' : 'hover:translate-x-1 hover:translate-y-1 hover:shadow-none'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-10 py-8 flex items-center justify-between text-left group"
                >
                  <span className={`text-2xl md:text-3xl font-display uppercase italic font-black tracking-tight transition-colors ${isOpen ? 'text-black' : 'text-black/40 group-hover:text-black'}`}>
                    {item.q}
                  </span>
                  {isOpen ? (
                    <div className="w-10 h-10 bg-black text-white flex items-center justify-center shrink-0">
                      <Minus size={24} strokeWidth={4} />
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-yellow-400 text-black flex items-center justify-center border-4 border-black shrink-0">
                      <Plus size={24} strokeWidth={4} />
                    </div>
                  )}
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-10 pb-10 text-xl font-bold leading-tight text-black/70 italic border-t-2 border-black/5 pt-6">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const LegalModal = ({ type, onClose }: { type: "privacy" | "terms" | "cookies" | "legal"; onClose: () => void }) => (
  <div className="hidden" aria-hidden>
    {type}
    <button onClick={onClose}>Close</button>
  </div>
);


