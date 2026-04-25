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
    <div className="pt-24 pb-32 bg-[#0A0A0B]">
      <section id="products" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-mono text-xs font-black uppercase tracking-[0.4em] text-electric-cyan mb-4">
            ENTREXT PRODUCT ARCHITECTURE 2026
          </p>
          <h1 className="text-5xl md:text-8xl font-display uppercase font-black tracking-tighter text-white">
            Product Portfolio.
          </h1>
          <p className="mt-6 text-xl font-bold text-muted max-w-2xl mx-auto">
            Velocity validated. Grouped by market layer for maximum strategic clarity.
          </p>
        </div>

        {layerOrder.map((layer) => {
          const products = allProducts.filter((p) => p.marketLayer === layer);
          if (!products.length) return null;

          return (
            <div key={layer} className="mb-24 last:mb-0">
              <div className="flex items-center gap-6 mb-12">
                 <h2 className="text-3xl md:text-5xl font-display uppercase font-black tracking-tight text-white whitespace-nowrap">
                   {layerTitles[layer]}
                 </h2>
                 <div className="h-px bg-white/10 w-full" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, i) => (
                  <ProductCard key={`${product.canonicalId ?? product.name}-${i}`} product={product} index={i} />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

