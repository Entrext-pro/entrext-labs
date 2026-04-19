"use client";

import React from 'react';
import { Hero } from '../components/home/Hero';
import { USPStrip } from '../components/home/USPStrip';
import { TheModel } from '../components/home/TheModel';
import { CoreValues } from '../components/home/CoreValues';
import { ToolOfTheMonth } from '../components/home/ToolOfTheMonth';
import { ProblemStatement } from '../components/home/ProblemStatement';
import { SupportResources } from '../components/home/SupportResources';
import { FoundersWanted } from '../components/home/FoundersWanted';
import { FAQ } from '../components/FAQ';

export const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <USPStrip />
      <TheModel />
      <CoreValues />
      <ToolOfTheMonth />
      <ProblemStatement />
      <SupportResources />
      <FoundersWanted />
      <FAQ />
    </div>
  );
};
