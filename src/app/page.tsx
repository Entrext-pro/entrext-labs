import { Home as HomePage } from "@/views/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Entrext Labs is a founder ecosystem where Tech and Growth founders are paired, mentored, and given ownership to build real products.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "If you're not hiring employees, what exactly is my role here?",
                acceptedAnswer: {
                  "@type": "AcceptedAnswer",
                  text: "You join as a founding operator for a specific product or set of products. Your role is to build, ship, validate, and scale, not execute tickets handed down by someone else.",
                },
              },
              {
                "@type": "Question",
                name: "How is equity structured across products?",
                acceptedAnswer: {
                  "@type": "AcceptedAnswer",
                  text: "Equity is per product, not pooled. All equity has a 6-month cliff and vests over 5 years. Equity is tied to actual shipping and ownership.",
                },
              },
              {
                "@type": "Question",
                name: "Who owns the product once it's shipped?",
                acceptedAnswer: {
                  "@type": "AcceptedAnswer",
                  text: "You retain founder-level ownership in the product you create. You have meaningful control over product direction, roadmap decisions, and monetization strategy.",
                },
              },
            ],
          }),
        }}
      />
      <HomePage />
    </>
  );
}

