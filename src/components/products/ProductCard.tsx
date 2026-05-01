"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="sticker-card p-8 flex flex-col h-full relative group bg-white border-4 border-black hover:bg-black hover:text-white transition-all duration-300"
    >
      <div className="absolute top-0 right-0 bg-black text-white px-5 py-2 font-mono uppercase font-black text-[10px] tracking-widest shadow-[4px_4px_0px_0px_rgba(250,204,21,1)] group-hover:bg-white group-hover:text-black transition-colors">
        {product.marketLayer}
      </div>

      <div className="mb-10 pt-4">
        <div className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-black/40 group-hover:text-white/40 transition-colors mb-3 italic">
          {product.cluster}
        </div>
        <h3 className="text-3xl md:text-4xl font-display uppercase italic font-black leading-none mb-6 tracking-tighter text-black group-hover:text-white transition-all group-hover:translate-x-1">
          {product.canonicalLabel ?? product.name}
        </h3>
        <p className="text-base font-bold leading-tight text-black/70 group-hover:text-white/70 transition-colors">
          {product.desc}
        </p>
      </div>

      <div className="mt-auto pt-8 border-t-2 border-black/10 flex items-center justify-between">
        <div className="space-y-2">
          <p className="font-mono text-[10px] font-black uppercase tracking-widest text-black group-hover:text-white transition-colors underline underline-offset-4 decoration-2">
            {product.url}
          </p>
          <p className="text-[10px] font-black uppercase text-black/40 group-hover:text-white/40 transition-colors">
            OWNER: {product.builder}
          </p>
        </div>
        <a
          href={`https://${product.url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-black text-white rounded-none flex items-center justify-center transition-all border-4 border-black group-hover:bg-white group-hover:text-black group-hover:border-white group-hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]"
        >
          <ArrowUpRight size={24} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={3} />
        </a>
      </div>
    </motion.div>
  );
};


