"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal } from 'lucide-react';
import { TheWheel } from '../components/products/TheWheel';
import { ProductCard } from '../components/products/ProductCard';
import { allProductsByMonth, months } from '../data/products';

export const Products = () => {
  const [selectedMonth, setSelectedMonth] = useState("JANUARY");
  const activeProducts = allProductsByMonth[selectedMonth] || [];
  const selectedIndex = months.indexOf(selectedMonth);

  return (
    <div className="pt-24 pb-32 bg-yellow-400">
      <section id="products" className="py-32 md:py-56 relative z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none select-none">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[8rem] md:text-[15rem] font-display uppercase italic font-black leading-none mr-40">PRODUCTION_PRODUCTS_2026</span>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <TheWheel
            selectedMonth={selectedMonth}
            setSelectedMonth={setSelectedMonth}
            activeProductsCount={activeProducts.length}
          />

          <div className="mt-40">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMonth}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16"
              >
                {activeProducts.length > 0 ? (
                  activeProducts.map((p, i) => (
                    <ProductCard key={`${p.name}-${i}`} product={p} index={i} />
                  ))
                ) : (
                  <div className="col-span-full py-48 border-8 border-dashed border-black/10 rounded-[3rem] flex flex-col items-center justify-center text-center">
                    <div className="w-24 h-24 bg-black/5 rounded-full flex items-center justify-center mb-8">
                      <Terminal className="text-black/10" size={48} />
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-display uppercase italic font-black text-black/10 tracking-tighter">System Idle.</h3>
                    <p className="font-black text-black/5 mt-4 uppercase tracking-[0.5em] text-lg">Awaiting deployment for {selectedMonth} 2026</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};
