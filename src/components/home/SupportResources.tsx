import React from 'react';
import { motion } from 'motion/react';
import { Target, Share2, Users, Briefcase, Brain, ShieldCheck } from 'lucide-react';

export const SupportResources = () => (
  <section className="py-32 md:py-56 px-6 bg-white relative z-10 border-t-8 border-black">
    <div className="max-w-7xl mx-auto">
      <div className="mb-24 text-center">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[7rem] font-display uppercase italic font-black leading-[0.9] md:leading-[0.8] tracking-tighter">The Ecosystem.</h2>
        <p className="text-base md:text-xl font-bold leading-tight max-w-2xl mx-auto mt-10 opacity-60">
          We provide the unfair advantages required to win. From distribution networks to elite engineering, we handle the infrastructure so you can focus on the product.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
        {[
          { title: "Strategic Support", desc: "Business models, branding, positioning, and go-to-market strategy.", icon: <Target className="text-black" /> },
          { title: "Distribution", desc: "Access to our network and proven growth loops to scale fast.", icon: <Share2 className="text-black" /> },
          { title: "Co-Founder Driven", desc: "A collaborative approach where everyone has skin in the game.", icon: <Users className="text-black" /> },
          { title: "Hiring & Resources", desc: "We handle the heavy lifting, hiring, and added support so you can build.", icon: <Briefcase className="text-black" /> },
          { title: "Mindset & Community", desc: "Surround yourself with elite builders who ship every week.", icon: <Brain className="text-black" /> },
          { title: "Leadership Skills", desc: "Master team handling, accountability, and autonomy skills.", icon: <ShieldCheck className="text-black" /> }
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10, rotate: i % 2 === 0 ? 1 : -1 }}
            className="sticker-card p-6 md:p-10 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="mb-8 p-3 bg-yellow-400 border-4 border-black inline-block rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">{item.icon}</div>
            <h3 className="text-xl md:text-2xl font-display uppercase italic font-black mb-4">{item.title}</h3>
            <p className="text-base font-bold opacity-60 leading-tight">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
