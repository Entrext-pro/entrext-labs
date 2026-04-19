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
    <div className="pt-24 pb-32 bg-yellow-400">
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="font-mono text-[10px] font-black uppercase tracking-widest opacity-50">{content.eyebrow}</p>
          <h1 className="text-5xl md:text-8xl font-display uppercase italic font-black tracking-tighter mt-4">{content.title}</h1>
          <p className="text-2xl md:text-4xl font-black mt-6">{content.subtitle}</p>
          <p className="text-base md:text-xl font-bold mt-4 opacity-75 max-w-4xl">{content.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {[
              ["5", "TEAMS ACTIVE"],
              ["14", "FOUNDERS"],
              ["20+", "PRODUCTS SHIPPED"],
              ["OPEN", "FOUNDING SEATS"],
            ].map(([v, l]) => (
              <div key={l} className="bg-white border-4 border-black rounded-xl p-4 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-2xl md:text-4xl font-display font-black italic uppercase">{v}</div>
                <div className="font-mono text-[10px] font-black uppercase tracking-widest opacity-60 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-14 mb-24">
          {teams.map((team) => (
            <section key={team.id} className="bg-white border-4 border-black rounded-3xl p-6 md:p-10 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
              <div className="absolute right-4 top-2 text-[5rem] md:text-[7rem] font-display font-black italic opacity-10 select-none">{team.id}</div>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl md:text-5xl font-display font-black italic uppercase">TEAM {team.id}</h2>
                <span className="bg-black text-white px-4 py-2 rounded-full font-mono text-[10px] uppercase font-black tracking-widest">● ACTIVE</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {team.members.map((member, idx) => (
                  <article key={member.name} className={`border-4 border-black rounded-2xl p-5 bg-yellow-50 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${memberCardTilt[idx % memberCardTilt.length]}`}>
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-black text-white flex items-center justify-center font-black text-lg border-2 border-black">
                        {member.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                      </div>
                      <div>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-xl font-black underline decoration-2 underline-offset-4">
                          {member.name}
                        </a>
                        <p className="font-mono text-[10px] font-black uppercase tracking-widest opacity-60 mt-1">{member.role}</p>
                      </div>
                    </div>
                    <p className="text-sm font-bold leading-tight opacity-80">{member.bio}</p>
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
