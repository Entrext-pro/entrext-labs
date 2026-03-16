"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Niche } from '@/types';

interface NicheCardProps {
  niche: Niche;
  index: number;
  isLive?: boolean;
}

const SocialIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactNode> = {
    tiktok: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    youtube: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    twitter: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  };
  
  return icons[type] || null;
};

export const NicheCard = ({ niche, index, isLive = true }: NicheCardProps) => {
  const router = useRouter();
  
  const hasSocialLinks = niche.socialLinks && Object.values(niche.socialLinks).some(link => link && link.trim() !== '');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -10, rotate: index % 2 === 0 ? 1 : -1 }}
      className={`sticker-card p-8 md:p-10 flex flex-col h-full min-h-[380px] md:min-h-[450px] relative group bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] ${!isLive ? 'opacity-60 hover:opacity-100 transition-all' : ''}`}
    >
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <div className={`w-12 h-12 md:w-16 md:h-16 ${isLive ? 'bg-yellow-400' : 'bg-black text-white'} border-4 border-black rounded-2xl flex items-center justify-center font-display text-2xl md:text-4xl font-black ${isLive ? 'shadow-sticker-hover' : 'shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]'}`}>
          {String(index + 1).padStart(2, '0')}
        </div>
        <div className={`flex items-center gap-2 ${isLive ? 'bg-black text-white' : 'bg-yellow-400 text-black border-2 border-black'} px-4 md:px-6 py-2 rounded-full shadow-lg`}>
          <div className={`w-2 h-2 md:w-3 md:h-3 ${isLive ? 'bg-emerald-400 rounded-full animate-pulse border-2 border-black' : 'bg-black rounded-full'}`} />
          <span className="font-mono text-[8px] md:text-[10px] font-black uppercase tracking-widest">{isLive ? 'LIVE_NODE' : 'COMING_SOON'}</span>
        </div>
      </div>

      <h3 className="text-2xl md:text-3xl lg:text-4xl font-display uppercase italic font-black leading-[0.9] mb-4 md:mb-6 tracking-tighter">{niche.title}</h3>
      <p className="text-lg md:text-xl font-bold leading-tight mb-6 md:mb-8 flex-1 opacity-60">
        {niche.desc}
      </p>

      <div className="pt-6 md:pt-8 border-t-4 border-black flex items-center justify-between">
        <button
          onClick={() => router.push(`/niches/${niche.id}`)}
          className="btn-primary w-full flex items-center justify-center gap-4 text-lg md:text-xl py-4 md:py-5"
        >
          View Products <ArrowUpRight size={28} strokeWidth={3} />
        </button>
      </div>

      <div className='flex justify-center gap-3 md:gap-6 mt-4 items-end'>
        <SocialIcon type="tiktok" />
        <SocialIcon type="instagram" />
        <SocialIcon type="youtube" />
        <SocialIcon type="twitter" />
        </div>
    </motion.div>
  );
};
