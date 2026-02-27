import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";
import Script from "next/script";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-space-grotesk",
});

const jetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "700", "800"],
    variable: "--font-jetbrains-mono",
});

const baseUrl = process.env.APP_URL || "https://entrextlabs.entrext.com";

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: "Entrext Labs | High-Velocity Micro-SaaS Factory",
        template: "%s | Entrext Labs"
    },
    description: "Entrext Labs is a production unit that ships 5 micro-SaaS products every week. We turn market friction into functional software at terminal velocity.",
    keywords: ["Micro-SaaS", "Venture Lab", "AI Products", "Software Factory", "Startup Incubator"],
    authors: [{ name: "Entrext Labs" }],
    creator: "Entrext Labs",
    publisher: "Entrext Labs",
    alternates: {
        canonical: "/",
    },
    icons: {
        icon: "/Entrext.png",
        apple: "/Entrext.png",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: baseUrl,
        siteName: "Entrext Labs",
        title: "Entrext Labs | High-Velocity Micro-SaaS Factory",
        description: "Shipping 5 micro-SaaS products every week. Turning market friction into functional software.",
        images: [
            {
                url: "/Entrext.png",
                width: 512,
                height: 512,
                alt: "Entrext Labs Logo",
            },
        ],
    },
    twitter: {
        card: "summary",
        title: "Entrext Labs | High-Velocity Micro-SaaS Factory",
        description: "Shipping 5 micro-SaaS products every week. Terminal velocity software production.",
        images: ["/Entrext.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-GEZ4BLC9X0"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){window.dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-GEZ4BLC9X0');
                        `}
                </Script>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Entrext Labs",
                            "url": baseUrl,
                            "logo": `${baseUrl}/Entrext.png`,
                            "image": `${baseUrl}/Entrext.png`,
                            "description": "High-velocity micro-SaaS factory shipping 5 products every week.",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "",
                                "contactType": "customer service",
                                "email": "entrext.pro@gmail.com"
                            },
                        }),
                    }}
                />
            </head>
            <body className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased`}>
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
