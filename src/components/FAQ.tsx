"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { siteContent } from "@/data/siteContent";

const faqs = [
  {
    q: "If you're not hiring employees, what exactly is my role here?",
    a: "You join as a founding operator for a specific product or set of products. Your role is to build, ship, validate, and scale, not execute tickets handed down by someone else.",
  },
  {
    q: "How is equity structured across products?",
    a: "Equity is per product, not pooled. All equity has a 6-month cliff and vests over 5 years. Equity is tied to actual shipping and ownership, not just time spent.",
  },
  {
    q: "Who owns the product once it's shipped?",
    a: "You retain founder-level ownership in the product you create. You have meaningful control over product direction, roadmap decisions, and monetization strategy.",
  },
  {
    q: "What level of commitment is expected?",
    a: "We care about outcomes, not hours. Full-time or serious part-time is fine. Async is fine. What is not fine: low ownership, slow execution, or half-built products.",
  },
  {
    q: "Who makes final decisions?",
    a: "The person closest to the problem makes the decision. We step in only for ecosystem-level alignment, capital allocation, or risk control.",
  },
  {
    q: "What happens if a product fails or doesn't get traction?",
    a: "Each product gets up to 6 months of testing and live market time. If traction is missing, it is closed cleanly, learnings are retained, and you can move to the next product.",
  },
  {
    q: "How do you support founders beyond equity?",
    a: "We provide shared infrastructure, tooling, strategic input, distribution leverage, and legal/structural support so founders can focus on building.",
  },
  {
    q: "How are revenue and payouts handled?",
    a: "For revenue-share roles, definitions are clear and transparent. Payouts are tracked per product, and reporting remains open and auditable.",
  },
  {
    q: "What kind of people should not apply?",
    a: "This is not for people seeking guaranteed comfort, rigid structure, titles over responsibility, or avoidance of public shipping and accountability.",
  },
  {
    q: "How do I know this isn't just equity-for-work?",
    a: "We operate with explicit cliff + vesting terms, kill timelines, and real founder infrastructure. This is a founder ecosystem, not speculative labor.",
  },
];

export const FAQ = () => {
  const { faq, bootstrapped } = siteContent.home;
  const [showAll, setShowAll] = React.useState(false);
  const displayedFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <section className="py-24 md:py-36 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <p className="font-mono text-[10px] font-black uppercase tracking-widest opacity-50">{faq.eyebrow}</p>
        <h2 className="text-4xl md:text-7xl font-display uppercase italic font-black mt-4">{faq.title}</h2>
        <p className="text-base md:text-xl font-bold opacity-70 mt-4">{faq.subtitle}</p>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence>
          {displayedFaqs.map((item) => (
            <motion.article
              key={item.q}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              className="border-4 border-black rounded-2xl p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            >
              <h3 className="text-2xl font-display uppercase italic font-black">{item.q}</h3>
              <p className="mt-4 text-sm md:text-base font-bold opacity-75 leading-tight">{item.a}</p>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-12 flex justify-center">
        <button onClick={() => setShowAll((v) => !v)} className="btn-secondary px-8 py-4 text-lg flex items-center gap-3">
          {showAll ? "See Less" : "See More Questions"}
          <ChevronDown className={`transition-transform ${showAll ? "rotate-180" : ""}`} size={20} />
        </button>
      </div>

      <div className="mt-24 border-8 border-black rounded-[2rem] p-8 md:p-12 bg-black text-white">
        <p className="font-mono text-[10px] font-black uppercase tracking-widest text-yellow-400">{bootstrapped.eyebrow}</p>
        <h3 className="mt-4 text-3xl md:text-5xl font-display uppercase italic font-black">{bootstrapped.title}</h3>
        <div className="mt-6 space-y-3 text-sm md:text-lg font-bold opacity-80">
          {bootstrapped.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <p className="mt-6 text-yellow-400 uppercase tracking-widest font-black">{bootstrapped.closing}</p>
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

