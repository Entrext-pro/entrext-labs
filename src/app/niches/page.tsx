import { Niches as NichesPage } from "@/views/Niches";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Market Architecture",
  description:
    "View Entrext niche architecture by market layer, strategic cluster, and current product focus.",
};

export default function Niches() {
  return <NichesPage />;
}

