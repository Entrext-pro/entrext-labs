import { Niches as NichesPage } from "@/views/Niches";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Market Niches",
    description: "Discover the strategic market verticals where Entrext Labs deploys its production units, from AI Productivity to PetTech.",
};

export default function Niches() {
    return <NichesPage />;
}
