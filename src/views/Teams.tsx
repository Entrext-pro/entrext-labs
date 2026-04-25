"use client";

import React from "react";
import { Manifesto } from "../components/teams/Manifesto";
import { siteContent } from "@/data/siteContent";

interface Member {
  name: string;
  role: "TECH FOUNDER" | "GROWTH FOUNDER" | "BUILD IN PUBLIC DEV";
  bio: string;
  linkedin: string;
}

interface Team {
  id: string;
  members: Member[];
}

const liSearch = (name: string) => `https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(name)}`;

const teams: Team[] = [
  {
    id: "00",
    members: [
      {
        name: "Mohit Sharma",
        role: "TECH FOUNDER",
        bio: "One of the earliest builders in the lab. Shipped 3+ products and helped scale one further with a growth partner.",
        linkedin: liSearch("Mohit Sharma"),
      },
      {
        name: "Youssef Hassan",
        role: "GROWTH FOUNDER",
        bio: "Runs Build in Public on X with strong audience-building instincts and distribution focus.",
        linkedin: liSearch("Youssef Hassan"),
      },
    ],
  },
  {
    id: "01",
    members: [
      {
        name: "Taha Sadikot",
        role: "TECH FOUNDER",
        bio: "One of the first people in the lab, leading deep technical builds with clarity.",
        linkedin: liSearch("Taha Sadikot"),
      },
      {
        name: "Ikshit Talera",
        role: "TECH FOUNDER",
        bio: "Backbone of Team 01 output. Co-owns Upvote and Guava with strong product, support, and SEO ownership.",
        linkedin: liSearch("Ikshit Talera"),
      },
      {
        name: "Ashish Sharma",
        role: "TECH FOUNDER",
        bio: "High-focus builder who ships clean and adds strong technical depth.",
        linkedin: liSearch("Ashish Sharma"),
      },
      {
        name: "Hitender Sharma",
        role: "GROWTH FOUNDER",
        bio: "Growth owner on Upvote with deep SEO-driven distribution work.",
        linkedin: liSearch("Hitender Sharma"),
      },
      {
        name: "Ranim Guani",
        role: "GROWTH FOUNDER",
        bio: "Former agency founder from UAE, now co-building Guava with strong founder energy.",
        linkedin: liSearch("Ranim Guani"),
      },
    ],
  },
  {
    id: "02",
    members: [
      {
        name: "Aryan Sagavekar",
        role: "TECH FOUNDER",
        bio: "Hardworking builder with a knack for extracting strong product ideas from sharp problem statements.",
        linkedin: liSearch("Aryan Sagavekar"),
      },
      {
        name: "Disha Gupta",
        role: "TECH FOUNDER",
        bio: "Punctual, fast, and ownership-first. If it's in Disha's hands, it gets done.",
        linkedin: liSearch("Disha Gupta"),
      },
    ],
  },
  {
    id: "03",
    members: [
      {
        name: "Garv Thakral",
        role: "TECH FOUNDER",
        bio: "Turns deep tech obsession into product ideas in emotional wellness categories.",
        linkedin: liSearch("Garv Thakral"),
      },
      {
        name: "Janet Yee",
        role: "GROWTH FOUNDER",
        bio: "US-based founder with strong marketing/media instincts leading Team 03 growth direction.",
        linkedin: liSearch("Janet Yee"),
      },
    ],
  },
  {
    id: "04",
    members: [
      {
        name: "Komal Siddharth",
        role: "TECH FOUNDER",
        bio: "High-velocity builder and natural team lead for Team 04.",
        linkedin: liSearch("Komal Siddharth"),
      },
      {
        name: "Tirth Patel",
        role: "TECH FOUNDER",
        bio: "Fast-learning builder, active contributor, and strong team player.",
        linkedin: liSearch("Tirth Patel"),
      },
      {
        name: "Anurag Prajapati",
        role: "TECH FOUNDER",
        bio: "Solid technical foundations with a clear builder mindset.",
        linkedin: liSearch("Anurag Prajapati"),
      },
      {
        name: "Akash Bauri",
        role: "TECH FOUNDER",
        bio: "Punctual AI founding engineer with high-variance product thinking.",
        linkedin: liSearch("Akash Bauri"),
      },
      {
        name: "Surya Pranav",
        role: "TECH FOUNDER",
        bio: "Build-in-public practitioner with strong execution habits.",
        linkedin: liSearch("Surya Pranav"),
      },
      {
        name: "Aisha Abahi",
        role: "GROWTH FOUNDER",
        bio: "Growth partner on Editflow, owning branding and Build in Public presence on X.",
        linkedin: liSearch("Aisha Abahi"),
      },
    ],
  },
];

const memberCardTilt = ["rotate-1", "-rotate-1", "rotate-2", "-rotate-2", "rotate-1", "-rotate-1"];

export const Teams = () => {
  const content = siteContent.teams;

  return (
    <div className="pt-24 pb-32 bg-[#0A0A0B]">
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-24">
          <p className="font-mono text-xs font-black uppercase tracking-[0.4em] text-electric-cyan mb-4">
            {content.eyebrow}
          </p>
          <h1 className="text-5xl md:text-8xl font-display uppercase font-black tracking-tighter mt-4 text-white">
            {content.title}
          </h1>
          <p className="text-2xl md:text-4xl font-black mt-8 text-white italic tracking-tight">
            {content.subtitle}
          </p>
          <p className="text-xl font-bold mt-6 text-muted max-w-4xl leading-relaxed">
            {content.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              ["5", "TEAMS ACTIVE"],
              ["14", "FOUNDERS"],
              ["20+", "PRODUCTS SHIPPED"],
              ["OPEN", "FOUNDING SEATS"],
            ].map(([v, l]) => (
              <div key={l} className="lab-card p-6 text-center border-white/5 bg-white/[0.02]">
                <div className="text-3xl md:text-5xl font-display font-black text-electric-cyan tracking-tighter">{v}</div>
                <div className="font-mono text-[10px] font-black uppercase tracking-widest text-muted mt-2">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-24 mb-32">
          {teams.map((team) => (
            <section key={team.id} className="relative group">
              <div className="absolute -left-12 top-0 text-[10rem] font-display font-black text-white/[0.03] select-none pointer-events-none group-hover:text-electric-cyan/[0.05] transition-colors duration-700">
                {team.id}
              </div>
              
              <div className="flex items-center gap-6 mb-12 relative z-10">
                <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight text-white">
                  TEAM {team.id}
                </h2>
                <div className="h-px bg-white/10 flex-1" />
                <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-neon-lime/30 bg-neon-lime/5 text-neon-lime font-mono text-[10px] uppercase font-black tracking-widest animate-pulse">
                  <span className="w-1.5 h-1.5 bg-neon-lime rounded-full" />
                  ACTIVE
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                {team.members.map((member, idx) => (
                  <article key={member.name} className="lab-card p-8 border-white/5 bg-white/[0.02] hover:border-electric-cyan/30 transition-all duration-500 flex flex-col">
                    <div className="flex items-start gap-5 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-electric-cyan/10 text-electric-cyan flex items-center justify-center font-black text-xl border border-electric-cyan/20 group-hover:scale-110 transition-transform">
                        {member.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                      </div>
                      <div>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-xl font-black text-white hover:text-electric-cyan transition-colors">
                          {member.name}
                        </a>
                        <p className="font-mono text-[10px] font-black uppercase tracking-widest text-electric-cyan/40 mt-1">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm font-bold leading-relaxed text-muted flex-1">
                      {member.bio}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <Manifesto />
      </section>
    </div>
  );
};
