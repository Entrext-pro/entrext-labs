"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export const FAQ = () => {
  const { faq } = siteContent.home;
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="py-24 md:py-36 px-6 bg-black relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-mono text-xs font-black uppercase tracking-widest text-electric-cyan mb-4">
            {faq.eyebrow}
          </p>
          <h2 className="text-4xl md:text-7xl font-display uppercase font-black tracking-tighter text-white">
            {faq.title}
          </h2>
          <p className="mt-6 text-xl font-bold text-muted">
            {faq.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white/[0.05] border-white/20' : 'bg-transparent'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                >
                  <span className={`text-xl font-display uppercase font-black tracking-tight transition-colors ${isOpen ? 'text-electric-cyan' : 'text-white group-hover:text-electric-cyan'}`}>
                    {item.q}
                  </span>
                  {isOpen ? <Minus className="text-electric-cyan shrink-0" size={24} /> : <Plus className="text-white/40 shrink-0" size={24} />}
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8 text-muted leading-relaxed">
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


