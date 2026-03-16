"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10, rotate: index % 2 === 0 ? 1 : -1 }}
      className="sticker-card p-10 flex flex-col h-full relative group bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
    >
      <div className="absolute top-0 right-0 bg-black text-yellow-400 px-5 py-2 border-b-4 border-l-4 border-black font-display uppercase italic font-black text-xs">
        {product.niche}
      </div>

      <div className="mb-12">
        <div className="font-mono text-[8px] font-black uppercase tracking-widest opacity-40 mb-4">Team_{product.team}</div>
        <h3 className="text-xl md:text-3xl font-display uppercase italic font-black leading-[0.9] md:leading-[0.8] mb-8 tracking-tighter">{product.name}</h3>
        <p className="text-base md:text-lg font-bold leading-tight opacity-60">{product.desc}</p>
      </div>

      <div className="mt-auto pt-8 border-t-4 border-black flex items-center justify-between">
        <div className="space-y-2">
          <p className="font-mono text-[8px] font-black uppercase tracking-widest opacity-40">{product.url}</p>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-black" />
            <p className="text-[10px] font-black uppercase">Built by: <span className="text-black underline decoration-2">{product.builder.split(':')[0]}</span></p>
          </div>
        </div>
        <a
          href={`https://${product.url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-black text-white rounded-xl flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]"
        >
          <ArrowUpRight size={24} strokeWidth={3} />
        </a>
      </div>
    </motion.div>
  );
};
