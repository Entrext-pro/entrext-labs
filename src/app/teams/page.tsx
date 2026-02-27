import { Teams as TeamsPage } from "@/views/Teams";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Teams & Manifesto",
    description: "Meet the 5 elite units of Entrext Labs. Our manifesto defines our high-velocity production and founder-first equity model.",
};

export default function Teams() {
    return <TeamsPage />;
}
