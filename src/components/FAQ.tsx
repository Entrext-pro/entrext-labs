"use client";

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';

const faqs = [
  {
    q: "If you’re not hiring employees, what exactly is my role here?",
    a: "You join as a founding operator for a specific product or set of products. Your role is to build, ship, validate, and scale — not to execute tickets handed down by someone else. You are treated as a product founder, not an employee."
  },
  {
    q: "How is equity structured across products?",
    a: "Equity is per product, not pooled. All equity has a 6-month cliff and vests over 5 years. Equity is tied to actual shipping and ownership, not just time spent. If you ship multiple products, you can earn equity in each one independently."
  },
  {
    q: "Who owns the product once it’s shipped?",
    a: "You retain founder-level ownership in the product you create. You have meaningful control over product direction, roadmap decisions, and monetization strategy. Strategic alignment happens at the ecosystem level, but product ownership stays with the founder."
  },
  {
    q: "What level of commitment is expected?",
    a: "We care about outcomes, not hours. Full-time or serious part-time is fine. Async is fine. Working on other things is fine. What’s not fine: low ownership, slow execution, or half-built products."
  },
  {
    q: "Who makes final decisions?",
    a: "The person closest to the problem makes the decision. As a product founder, you own decisions related to your product. We step in only for ecosystem-level alignment, capital allocation, or risk control. No endless approvals. No politics."
  },
  {
    q: "What happens if a product fails or doesn’t get traction?",
    a: "Failure is expected — stagnation is not. Each product gets up to 6 months of testing + live market time. If a product doesn’t show traction, it is killed cleanly, learnings are retained, and you can move on to the next product without penalty. Your equity only vests once you pass the cliff and continue building."
  },
  {
    q: "How do you support founders beyond equity?",
    a: "We provide shared infrastructure (tech, ops, tooling), distribution leverage, strategic input, and legal/structural setup. We remove friction so you can focus entirely on building and shipping faster than building alone."
  },
  {
    q: "How are revenue and payouts handled?",
    a: "For revenue-share roles, definitions are clear and transparent. Payouts are tracked per product and reporting is open and auditable. Revenue share applies only to the products you ship and own, not the entire ecosystem."
  },
  {
    q: "What kind of people should not apply?",
    a: "This is not for you if you want a guaranteed salary and comfort, need rigid structure, prefer titles over responsibility, or are afraid of shipping publicly and being wrong. We optimize for builders, not safety-seekers."
  },
  {
    q: "How do I know this isn’t just 'equity for work'?",
    a: "We operate with clear equity terms (cliff + vesting), defined kill timelines, and real infrastructure/distribution. This is a founder ecosystem, not speculative labor. You build real products, with real ownership, in real markets."
  },
  {
    q: "How much equity can I earn?",
    a: "Founding AI Engineers: Up to 10% equity per product. Founding AI Creators: 5% equity + 5% revenue share, or up to 10% equity. Build-in-Public Founding Devs: 10–15% equity per product. All include a 6-month cliff and 5-year vesting."
  }
];

export const FAQ = () => {
  const sectionRef = React.useRef<HTMLElement>(null);
  const fundingRef = React.useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = React.useState(false);
  const displayedFaqs = showAll ? faqs : faqs.slice(0, 4);

  const toggleShowAll = () => {
    if (showAll && fundingRef.current) {
      // Calculate position so we end up at the Funding section after layout shrinks
      // We use a slight delay or scrollIntoView to handle the layout shift
      setTimeout(() => {
        fundingRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
    setShowAll(!showAll);
  };



  return (
    <section
      ref={sectionRef}
      className="py-32 md:py-56 px-6 md:px-8 max-w-7xl mx-auto relative z-10"
    >

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-24 md:mb-40"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block bg-yellow-400 text-black px-5 py-2 rounded-lg font-mono text-[10px] font-black mb-10 border-4 border-black uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          Mission_Support
        </motion.div>
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] font-display uppercase italic font-black leading-[0.9] md:leading-[0.8] mb-12 tracking-tighter">FAQ.</h2>
        <p className="text-base md:text-xl font-bold leading-tight max-w-2xl mx-auto opacity-60">Everything you need to know before joining the lab. We believe in radical transparency.</p>
      </motion.div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16"
      >
        <AnimatePresence>

          {displayedFaqs.map((faq, i) => (
            <motion.div
              layout
              key={faq.q}

              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -10, rotate: i % 2 === 0 ? 1 : -1 }}
              className="sticker-card p-6 md:p-10 lg:p-14 border-4 border-black flex flex-col h-full bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex items-start gap-8 mb-10">
                <div className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center font-display text-3xl font-black flex-shrink-0 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                  ?
                </div>
                <h3 className="text-xl md:text-3xl font-display uppercase italic font-black leading-none pt-1">{faq.q}</h3>
              </div>
              <div className="flex-1">
                <p className="text-base md:text-lg font-bold leading-tight opacity-60">
                  {faq.a}
                </p>
              </div>
              <div className="mt-12 pt-8 border-t-4 border-black flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full border-2 border-black" />
                <span className="font-mono text-[8px] font-black uppercase tracking-widest opacity-40">MISSION_INTEL_0{i + 1}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>


      <div className="mt-24 flex justify-center">
        <button
          onClick={toggleShowAll}
          className="btn-secondary px-6 py-4 md:px-10 md:py-5 text-lg md:text-xl flex items-center gap-4"
        >

          {showAll ? "SEE LESS" : "SEE MORE QUESTIONS"}
          <ChevronDown className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} size={24} strokeWidth={3} />
        </button>
      </div>

      {/* Funding Section */}
      <motion.div
        ref={fundingRef}
        initial={{ opacity: 0, y: 30 }}

        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-48 p-8 md:p-12 lg:p-24 bg-black text-white rounded-[3rem] border-8 border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,0.2)] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <Logo className="w-64 h-64" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <h3 className="text-2xl sm:text-4xl md:text-6xl font-display uppercase italic font-black mb-12 tracking-tighter">
            Do you believe in funding? <br />
            <span className="text-yellow-400">Have you raised any capital?</span>
          </h3>
          <div className="space-y-8 text-base md:text-xl font-bold leading-tight opacity-80">
            <p>No, we are fully bootstrapped and intentionally so.</p>
            <p>We believe that in today’s digital world, it doesn’t take significant capital to create meaningful products. What matters far more is an outcome-driven approach, speed, and ownership.</p>
            <p>Funding may come into play only after a product hits clear milestones and proves real demand. Until then, we choose to build with discipline, leverage, and focus.</p>
            <p className="text-yellow-400 uppercase tracking-widest font-black">We are a bootstrapped company and we intend to remain that way.</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 text-center"
      >
        <p className="text-sm font-black mb-10 uppercase tracking-widest opacity-40">Still have questions?</p>
        <button
          onClick={() => window.location.href = 'mailto:entrext.pro@gmail.com'}
          className="btn-primary px-6 py-4 md:px-12 md:py-6 text-lg md:text-2xl"
        >
          CONTACT COMMAND CENTER
        </button>
      </motion.div>
    </section>
  );
};

export const LegalModal = ({ type, onClose }: { type: 'privacy' | 'terms' | 'cookies' | 'legal', onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
  >
    <motion.div
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 20 }}
      className="bg-white w-full max-w-4xl max-h-[80vh] overflow-hidden rounded-3xl border-8 border-black shadow-[24px_24px_0px_0px_rgba(0,0,0,1)] relative flex flex-col"
    >
      <div className="p-8 border-b-8 border-black flex justify-between items-center bg-yellow-400">
        <h2 className="text-4xl md:text-5xl font-display uppercase italic font-black tracking-tighter text-black">
          {type === 'privacy' ? 'Privacy_Protocol' : 'Terms_of_Engagement'}
        </h2>
        <button onClick={onClose} className="w-16 h-16 bg-black text-white rounded-xl flex items-center justify-center hover:rotate-90 transition-transform border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
          <X size={32} strokeWidth={4} />
        </button>
      </div>

      <div className="p-12 overflow-y-auto font-bold text-xl leading-tight space-y-12 text-black">
        <div className="bg-black text-white p-6 rounded-xl border-4 border-black font-mono text-xs font-black uppercase tracking-widest opacity-80">
          Last Updated: February 2026 // Version 2.0.4
        </div>

        <section className="space-y-6">
          <h3 className="text-3xl md:text-4xl font-display uppercase italic font-black text-black">01. Data Collection</h3>
          <p className="opacity-60">We only collect what we need to build. Your data is your ownership. We don't sell it, we don't leak it. We use it to optimize the products archive and ensure your mission success.</p>
        </section>

        <section className="space-y-6">
          <h3 className="text-3xl md:text-4xl font-display uppercase italic font-black text-black">02. Intellectual Property</h3>
          <p className="opacity-60">Every product shipped from the lab is a shared victory. Ownership is distributed based on the partnership lane you've selected. You own your contribution, we own the infrastructure.</p>
        </section>

        <section className="space-y-6">
          <h3 className="text-3xl md:text-4xl font-display uppercase italic font-black text-black">03. Termination</h3>
          <p className="opacity-60">If you stop shipping, you stop winning. We build for the 10-year horizon. Short-term thinkers will be offboarded from the mission control system immediately.</p>
        </section>

        <div className="py-12 text-center border-t-8 border-black/5">
          <p className="font-display text-5xl text-black/10 font-black uppercase italic">End of Protocol</p>
        </div>
      </div>
    </motion.div>
  </motion.div>
);
