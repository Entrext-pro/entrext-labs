import { Teams as TeamsPage } from "@/views/Teams";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The People",
  description:
    "Five teams. Fourteen founders. One standard: ship it. Meet the people and manifesto behind Entrext Labs.",
};

export default function Teams() {
  return <TeamsPage />;
}

