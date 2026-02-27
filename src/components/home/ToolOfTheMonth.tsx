import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Flame, Activity, Award, ArrowUpRight, Play } from 'lucide-react';

export const ToolOfTheMonth = () => (
  <section className="py-32 md:py-56 px-6 bg-black text-white relative z-10 overflow-hidden border-t-8 border-black">
    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-[6rem] md:text-[10rem] font-display uppercase italic font-black leading-none mr-20">FEATURED_LAUNCH_WEEK_08</span>
        ))}
      </div>
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1 space-y-12">
          <div className="inline-block bg-yellow-400 text-black px-5 py-2 rounded-lg font-mono text-[10px] font-black uppercase tracking-[0.3em] border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]">
            NEW_DEPLOYMENT
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] font-display uppercase italic font-black leading-[0.9] md:leading-[0.8] tracking-tighter">
            Secret<span className="text-yellow-400">room.</span>
          </h2>
          <p className="text-base md:text-xl font-bold leading-tight max-w-2xl opacity-60">
            Ephemeral anonymous chat service. No signups, no history, no tracking. Just pure, unadulterated vibes for 24 hours.
          </p>
          <div className="flex flex-wrap gap-6">
            <button 
              onClick={() => window.location.href = 'https://secretroom.ai'}
              className="btn-primary px-6 py-4 md:px-10 md:py-5 text-lg md:text-xl flex items-center gap-4"
            >
              LAUNCH APP <ArrowUpRight size={24} strokeWidth={3} />
            </button>
            <div className="flex items-center gap-4 px-4 py-3 md:px-8 md:py-5 border-4 border-white/10 rounded-2xl font-mono text-xs md:text-sm font-black uppercase tracking-widest">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse border-2 border-black" />
              1,240 Active Users
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          <motion.div 
            whileHover={{ scale: 1.02, rotate: -1 }}
            className="sticker-card bg-white p-4 border-8 border-black shadow-[20px_20px_0px_0px_rgba(255,255,250,0.1)] rounded-[3rem] overflow-hidden"
          >
            <div className="aspect-video bg-black rounded-[2rem] flex items-center justify-center relative group overflow-hidden">
              <img 
                src="https://picsum.photos/seed/secretroom/1200/800" 
                alt="Secretroom Preview" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform">
                  <Play size={40} fill="black" />
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-24 h-24 md:w-40 md:h-40 bg-yellow-400 border-4 md:border-8 border-black rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] rotate-12">
            <span className="text-2xl md:text-4xl font-display font-black">9.8</span>
            <span className="text-[8px] md:text-[10px] font-mono font-black uppercase tracking-widest">User_Rating</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);
