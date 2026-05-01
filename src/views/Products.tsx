"use client";

import React from "react";
import { ProductCard } from "../components/products/ProductCard";
import { allProducts } from "../data/products";

const layerOrder = ["HYBRID_PROSUMER", "B2C", "B2B"] as const;

const layerTitles: Record<string, string> = {
  HYBRID_PROSUMER: "Hybrid / Prosumer",
  B2C: "B2C",
  B2B: "B2B",
};

export const Products = () => {
  return (
    <div className="pt-24 pb-32 bg-yellow-400">
      <section id="products" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="mb-24">
          <p className="font-mono text-xs font-black uppercase tracking-[0.4em] text-black/50 mb-4">
            ENTREXT PRODUCT ARCHITECTURE 2026
          </p>
          <h1 className="text-5xl md:text-[8rem] font-display uppercase italic font-black leading-[0.85] tracking-tighter text-black">
            Product Portfolio.
          </h1>
          <p className="mt-10 text-2xl font-black text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] max-w-3xl">
            Velocity validated. Grouped by market layer for maximum strategic clarity.
          </p>
        </div>

        {layerOrder.map((layer) => {
          const products = allProducts.filter((p) => p.marketLayer === layer);
          if (!products.length) return null;

          return (
            <div key={layer} className="mb-32 last:mb-0">
              <div className="flex items-center gap-6 mb-12">
                 <h2 className="text-3xl md:text-6xl font-display uppercase italic font-black tracking-tight text-black whitespace-nowrap">
                   {layerTitles[layer]}
                 </h2>
                 <div className="h-2 bg-black w-full" />
              </div>
              
              {/* Horizontal Scroll Container for Products */}
              <div className="flex overflow-x-auto gap-8 pb-12 px-4 -mx-4 no-scrollbar snap-x snap-mandatory">
                {products.map((product, i) => (
                  <div key={`${product.canonicalId ?? product.name}-${i}`} className="snap-center min-w-[320px] md:min-w-[450px]">
                    <ProductCard product={product} index={i} />
                  </div>
                ))}
                
                {/* Visual End of Scroll */}
                <div className="snap-center min-w-[320px] md:min-w-[450px] bg-black text-white p-12 flex flex-col items-center justify-center text-center border-4 border-black">
                   <p className="font-mono text-[10px] font-black uppercase tracking-widest opacity-50 mb-6 italic">Next in Pipeline</p>
                   <h3 className="text-3xl font-display font-black uppercase italic tracking-tighter mb-8">Building at Velocity</h3>
                   <div className="w-16 h-1 bg-yellow-400" />
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

