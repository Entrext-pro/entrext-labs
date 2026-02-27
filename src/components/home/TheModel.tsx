import React from 'react';
import { motion } from 'motion/react';
import { Zap, Clock, Rocket, BarChart3 } from 'lucide-react';

export const TheModel = () => {
  const steps = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Identify Friction",
      desc: "We analyze 100+ market problems daily to find the most painful friction points.",
      tag: "STEP_01"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "7-Day Sprint",
      desc: "Our elite units build a functional, market-ready product in exactly one week.",
      tag: "STEP_02"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Instant Launch",
      desc: "Products are deployed to our network of 50k+ early adopters immediately.",
      tag: "STEP_03"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Scale or Kill",
      desc: "We track metrics for 30 days. Winners get scaled; losers are archived.",
      tag: "STEP_04"
    }
  ];

  return (
    <section className="py-32 md:py-56 px-6 bg-white relative z-10 border-t-8 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 md:mb-32 gap-12">
          <div className="max-w-3xl">
            <div className="inline-block bg-black text-white px-4 py-1 rounded-lg font-mono text-[10px] font-black mb-8 uppercase tracking-widest">
              The_Production_Cycle
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] font-display uppercase italic font-black leading-[0.9] md:leading-[0.8] tracking-tighter">
              How We <span className="text-yellow-400 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">Dominate.</span>
            </h2>
          </div>
          <p className="text-base md:text-xl font-bold leading-tight max-w-md opacity-60">
            Traditional development is slow. We are a high-velocity factory designed for the speed of the internet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="sticker-card p-10 border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group"
            >
              <div className="font-mono text-[10px] font-black opacity-30 mb-8 tracking-widest">
                {step.tag}
              </div>
              <div className="w-16 h-16 bg-yellow-400 border-4 border-black rounded-2xl flex items-center justify-center mb-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-6 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-xl md:text-3xl font-display uppercase italic font-black mb-6 leading-none">
                {step.title}
              </h3>
              <p className="text-sm md:text-base font-bold opacity-60 leading-tight">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-12 border-8 border-black bg-yellow-400 rounded-[3rem] text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none select-none">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[10rem] font-display uppercase italic font-black leading-none mr-20">HIGH_VELOCITY_PRODUCTION</span>
              ))}
            </div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-4xl md:text-6xl font-display uppercase italic font-black mb-8 tracking-tighter">
              5 Products. Every Week. <br /> No Exceptions.
            </h3>
            <p className="text-sm sm:text-lg md:text-2xl font-black uppercase tracking-widest opacity-40 mb-12">
              The factory never stops.
            </p>
            <button className="bg-black text-white px-6 py-4 md:px-12 md:py-6 rounded-2xl font-black text-lg md:text-2xl uppercase tracking-widest hover:bg-white hover:text-black transition-all border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
              View Current Batch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
