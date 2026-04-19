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
      <section id="products" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-[10px] uppercase font-black tracking-widest opacity-60">ENTREXT PRODUCT ARCHITECTURE 2026</p>
          <h1 className="text-5xl md:text-8xl font-display uppercase italic font-black mt-4 tracking-tighter">Product Portfolio.</h1>
          <p className="text-lg md:text-2xl font-bold mt-4 opacity-75">Months removed. Products are now grouped by market layer.</p>
        </div>

        {layerOrder.map((layer) => {
          const products = allProducts.filter((p) => p.marketLayer === layer);
          if (!products.length) return null;

          return (
            <div key={layer} className="mb-20">
              <h2 className="text-3xl md:text-5xl font-display uppercase italic font-black mb-8">{layerTitles[layer]}</h2>
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
