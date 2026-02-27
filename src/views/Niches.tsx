"use client";

import React from 'react';
import { LiveNiches } from '../components/niches/LiveNiches';
import { ComingSoonNiches } from '../components/niches/ComingSoonNiches';

const liveNiches = [
  {
    title: "Founder, Startup & Business Infrastructure",
    desc: "A 'company operating system' that removes friction from starting, running, and scaling a business by replacing fragmented services with high-leverage tools.",
    color: "bg-yellow-50"
  },
  {
    title: "Pet Economy & Companion Wellness",
    desc: "Treating pets as family members through AI-driven personalized nutrition, health monitoring, and early illness detection for peace of mind.",
    color: "bg-rose-50"
  },
  {
    title: "Relationships, Social & Emotional Tech",
    desc: "Emotional support systems providing guidance for self-awareness, conflict resolution, and social confidence where therapy is inaccessible.",
    color: "bg-purple-50"
  },
  {
    title: "AI, Workflows & Automations",
    desc: "Building mission-critical AI applications, automations, and workflows specifically designed for B2B efficiency.",
    color: "bg-emerald-50"
  },
  {
    title: "Outcome-Based Education",
    desc: "Replacing passive learning with risk reduction and guaranteed results for career pivots, certifications, and income-linked skills.",
    color: "bg-blue-50"
  },
];

const comingSoonNiches = [
  { title: "Self-Improvement / Leveling Up", desc: "Identity-based products for fitness, grooming, and personal growth.", color: "bg-indigo-50" },
  { title: "Cyber-Compliance & Privacy", desc: "Automated tracking and reporting for strict data privacy laws.", color: "bg-cyan-50" },
  { title: "Digital Health & Longevity B2B", desc: "Infrastructure for remote diagnostics and proactive patient care.", color: "bg-sky-50" },
  { title: "PropTech", desc: "AI-driven management for modern real estate and short-term rentals.", color: "bg-amber-50" },
  { title: "Climate-Tech B2B", desc: "Simplifying emissions tracking and regulatory compliance for businesses.", color: "bg-lime-50" },
  { title: "Middle Class Family Office", desc: "Wealth management and estate planning tools for normal households.", color: "bg-stone-50" },
  { title: "\"Boring\" Business Vertical SaaS", desc: "Modernizing construction, legal, and trades with AI digital labor.", color: "bg-orange-50" },
  { title: "Solo-Economy Financial Stack", desc: "Financial tools for freelancers and creators with unpredictable cash flow.", color: "bg-blue-50" },
  { title: "Outcome-as-a-Service", desc: "Selling results (leads, revenue) instead of just software subscriptions.", color: "bg-emerald-50" },
  { title: "Longevity-as-a-Service (B2C)", desc: "Gamifying health optimization and biomarker tracking for consumers.", color: "bg-fuchsia-50" },
  { title: "Creator-to-Commerce", desc: "Backbone infrastructure for creators to turn audiences into businesses.", color: "bg-violet-50" },
  { title: "Solo-Travel & Nomad Infra", desc: "Logistics, taxes, and healthcare for the borderless workforce.", color: "bg-sky-50" },
  { title: "Modern Homesteader Tech", desc: "Tools for self-sufficiency, gardening, and home energy management.", color: "bg-stone-50" },
  { title: "Hyper-Personalized Brands", desc: "AI-designed goods that perfectly reflect personal identity.", color: "bg-pink-50" },
  { title: "Social Commerce Engines", desc: "Community-driven marketplaces for specific online subcultures.", color: "bg-teal-50" },
];

export const Niches = () => {
  return (
    <div className="pt-32 pb-40 bg-yellow-400">
      <section className="py-20 md:py-32 px-6 md:px-8 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] font-display uppercase italic font-black leading-[0.9] md:leading-[0.8] tracking-tighter mb-8 md:mb-10">The_Niches.</h1>
          <p className="text-base md:text-xl font-bold leading-tight max-w-2xl mx-auto opacity-60">
            Strategic market verticals where we deploy our production units.
          </p>
        </div>
        <LiveNiches niches={liveNiches} />
        <ComingSoonNiches niches={comingSoonNiches} liveNichesCount={liveNiches.length} />
      </section>
    </div>
  );
};

