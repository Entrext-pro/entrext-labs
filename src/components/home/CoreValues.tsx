"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, Heart, MessageSquare } from 'lucide-react';

export const CoreValues = () => {
    const values = [
        {
            icon: <Target className="w-8 h-8" />,
            title: "Commitment",
            desc: "Radical dedication to the mission. We don't just start projects; we see them through to market validation.",
            tag: "CORE_01"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Collaboration",
            desc: "Building in public, sharing infrastructure, and leveraging the collective intelligence of our founder network.",
            tag: "CORE_02"
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Customer",
            desc: "Every line of code is written to solve real-world friction. If it doesn't serve the user, it doesn't belong.",
            tag: "CORE_03"
        },
        {
            icon: <MessageSquare className="w-8 h-8" />,
            title: "Communication",
            desc: "Async-first, direct, and outcome-driven. We cut the noise to ensure maximum signal and execution speed.",
            tag: "CORE_04"
        }
    ];

    return (
        <section className="py-32 md:py-56 px-6 bg-white relative z-10 border-t-8 border-black">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 md:mb-32 gap-12">
                    <div className="max-w-3xl">
                        <div className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-lg font-mono text-[10px] font-black mb-8 uppercase tracking-widest border-2 border-black">
                            Foundational_Pillars
                        </div>
                        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] font-display uppercase italic font-black leading-[0.9] md:leading-[0.8] tracking-tighter">
                            The <span className="text-black drop-shadow-[4px_4px_0px_rgba(250,204,21,1)]">4 C's.</span>
                        </h2>
                    </div>
                    <p className="text-base md:text-xl font-bold leading-tight max-w-md opacity-60">
                        Our culture isn't built on slogans. It's built on these four non-negotiable pillars that drive every product we ship.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                            className="sticker-card p-10 border-4 border-black bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group overflow-hidden relative"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <div className="text-8xl font-display font-black italic select-none">C</div>
                            </div>

                            <div className="font-mono text-[10px] font-black opacity-30 mb-8 tracking-widest">
                                {value.tag}
                            </div>
                            <div className="w-16 h-16 bg-white border-4 border-black rounded-2xl flex items-center justify-center mb-10 shadow-sticker-hover group-hover:bg-yellow-400 group-hover:-rotate-6 transition-all duration-300">
                                {value.icon}
                            </div>
                            <h3 className="text-xl md:text-3xl font-display uppercase italic font-black mb-6 leading-none">
                                {value.title}
                            </h3>
                            <p className="text-sm md:text-base font-bold opacity-60 leading-tight">
                                {value.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
