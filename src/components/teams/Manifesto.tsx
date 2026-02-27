import React from 'react';
import { motion } from 'motion/react';
import { Plus, X } from 'lucide-react';

export const Manifesto = () => (
  <section className="py-24 md:py-40 px-6 bg-white relative z-10 overflow-hidden border-t-8 border-black">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-32">
        {/* Who This Is For */}
        <div className="space-y-16 md:space-y-24">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-yellow-400 text-black inline-block px-6 py-2 rounded-lg font-mono text-xs font-black uppercase tracking-widest border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              THE_CHOSEN
            </motion.div>
            <h2 className="text-6xl sm:text-7xl md:text-[8rem] font-display uppercase italic font-black leading-[0.8] tracking-tighter">
              WHO THIS <br /> <span className="text-yellow-500">IS FOR.</span>
            </h2>
            <p className="text-xl md:text-3xl font-bold leading-tight opacity-60">
              This isn’t for everyone. It’s for a very specific kind of builder and creator.
            </p>
          </div>

          <div className="space-y-12 md:space-y-16">
            {[
              { title: "Ownership-driven.", desc: "They don't wait for instructions. They build, they own, and they take full responsibility for the outcomes." },
              { title: "Relentlessly obsessed.", desc: "They think about their craft constantly. Not for external rewards, but because they’re genuinely drawn to it." },
              { title: "Tech-rooted builders.", desc: "They understand that technology is the ultimate leverage. They use it to solve real friction at scale." },
              { title: "Long-term thinking.", desc: "They’re building for years, not weeks. They understand compounding, patience, and delayed rewards." },
              { title: "The volume game.", desc: "They produce so much output that failing becomes unreasonable. Success is inevitable." },
              { title: "Founders, not employees.", desc: "They treat every project like their own company. They have skin in the game and act like it." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-8 group"
              >
                <div className="w-16 h-16 bg-white border-4 border-black rounded-2xl flex items-center justify-center flex-shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:bg-yellow-400 transition-colors">
                  <Plus className="text-black" size={32} strokeWidth={4} />
                </div>
                <div className="space-y-3">
                  <h4 className="text-3xl md:text-4xl font-display uppercase italic font-black leading-none">{item.title}</h4>
                  <p className="text-xl font-bold leading-tight opacity-60">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Who This Is Not For */}
        <div className="space-y-16 md:space-y-24">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-black text-white inline-block px-6 py-2 rounded-lg font-mono text-xs font-black uppercase tracking-widest border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
            >
              THE_TOURISTS
            </motion.div>
            <h2 className="text-6xl sm:text-7xl md:text-[8rem] font-display uppercase italic font-black leading-[0.8] tracking-tighter">
              WHO THIS <br /> <span className="text-rose-500">IS NOT.</span>
            </h2>
            <p className="text-xl md:text-3xl font-bold leading-tight opacity-60">
              This space is deliberately not for everyone. We protect the high-velocity ecosystem.
            </p>
          </div>

          <div className="space-y-12 md:space-y-16">
            {[
              { title: "Shortcut chasers.", desc: "If you’re looking for hacks, quick wins, or overnight results, this isn’t your game." },
              { title: "Comfort seekers.", desc: "Growth requires choosing hard things on purpose. If you avoid the challenge, you won't last here." },
              { title: "The quitters.", desc: "The boring phase is where real progress happens. If you leave when it’s not exciting, this isn’t for you." },
              { title: "The ego-driven.", desc: "Ego, entitlement, or disrespect break ecosystems. This is built on trust and mutual respect." },
              { title: "The blamers.", desc: "No excuses. No victim mindset. Ownership is non-negotiable—they own the work and the outcomes." },
              { title: "Responsibility avoiders.", desc: "If you expect someone else to save you or do the hard parts for you, this isn’t the place." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-8 group"
              >
                <div className="w-16 h-16 bg-black border-4 border-black rounded-2xl flex items-center justify-center flex-shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] group-hover:bg-rose-500 transition-colors">
                  <X className="text-white" size={32} strokeWidth={4} />
                </div>
                <div className="space-y-3">
                  <h4 className="text-3xl md:text-4xl font-display uppercase italic font-black leading-none">{item.title}</h4>
                  <p className="text-xl font-bold leading-tight opacity-60">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
