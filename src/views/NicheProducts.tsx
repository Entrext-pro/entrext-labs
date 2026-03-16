"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ProductCard } from '../components/products/ProductCard';
import { Niche, Product } from '@/types';

interface NicheProductsViewProps {
  niche: Niche;
  products: Product[];
}

const ITEMS_PER_PAGE = 9;

export const NicheProductsView = ({ niche, products }: NicheProductsViewProps) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="pt-32 pb-40 bg-yellow-400 min-h-screen">
      <section className="py-20 md:py-32 px-6 md:px-8 max-w-7xl mx-auto relative z-10">
        {/* Back Button */}
        <button
          onClick={() => router.push('/niches')}
          className="mb-8 md:mb-12 flex items-center gap-2 text-black font-bold hover:opacity-60 transition-opacity"
        >
          <ArrowLeft size={24} strokeWidth={3} />
          <span className="text-lg md:text-xl">Back to Niches</span>
        </button>

        {/* Niche Header */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-3 h-3 bg-emerald-400 rounded-full border-2 border-black animate-pulse" />
            <span className="font-mono text-[10px] font-black uppercase tracking-widest opacity-60">Niche Products</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] font-display uppercase italic font-black leading-[0.9] md:leading-[0.8] tracking-tighter mb-8">
            {niche.title}
          </h1>
          <p className="text-lg md:text-2xl font-bold leading-tight max-w-3xl opacity-60">
            {niche.desc}
          </p>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
              {paginatedProducts.map((product, i) => (
                <ProductCard key={`${product.name}-${i}`} product={product} index={i} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-16 md:mt-24 flex items-center justify-center gap-6">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-black text-lg border-4 border-black transition-all ${
                    currentPage === 1
                      ? 'bg-black/10 text-black/30 cursor-not-allowed'
                      : 'bg-white hover:bg-yellow-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                  }`}
                >
                  <ChevronLeft size={24} strokeWidth={3} />
                  Prev
                </button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-12 h-12 rounded-xl font-black text-lg border-4 border-black transition-all ${
                        currentPage === page
                          ? 'bg-black text-white'
                          : 'bg-white hover:bg-yellow-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-black text-lg border-4 border-black transition-all ${
                    currentPage === totalPages
                      ? 'bg-black/10 text-black/30 cursor-not-allowed'
                      : 'bg-white hover:bg-yellow-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                  }`}
                >
                  Next
                  <ChevronRight size={24} strokeWidth={3} />
                </button>
              </div>
            )}

            {/* Products Count */}
            <div className="mt-8 text-center">
              <p className="font-mono text-[10px] font-black uppercase tracking-widest opacity-40">
                Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, products.length)} of {products.length} products
              </p>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-48 border-8 border-dashed border-black/10 rounded-[3rem] flex flex-col items-center justify-center text-center"
          >
            <div className="w-24 h-24 bg-black/5 rounded-full flex items-center justify-center mb-8">
              <svg className="text-black/10" width={48} height={48} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-display uppercase italic font-black text-black/10 tracking-tighter">No Products Yet.</h3>
            <p className="font-black text-black/5 mt-4 uppercase tracking-[0.5em] text-lg">Products coming soon to this niche</p>
          </motion.div>
        )}
      </section>
    </div>
  );
};
