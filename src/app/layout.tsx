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

const rawBaseUrl = process.env.APP_URL || "https://entrextlabs.entrext.com";
const baseUrl = rawBaseUrl.replace(/['"]/g, '').replace(/\/+$/, '');

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: "Entrext Labs | Where Velocity is the Moat",
        template: "%s | Entrext Labs"
    },
    description: "An experimental lab where Primary Partners validate one-feature products at velocity — and Secondary Partners scale what is already proven. Both get real equity and a community that ships.",
    keywords: ["Micro-SaaS", "Venture Lab", "Primary Partner", "Secondary Partner", "Founder Ecosystem", "AI Products"],
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
        title: "Entrext Labs | Where Velocity is the Moat",
        description: "Primary Partners validate products at velocity. Secondary Partners scale what is proven. Real equity. Clear terms. The lab is open.",
        images: [
            {
                url: `${baseUrl}/Entrext.png`,
                secureUrl: `${baseUrl}/Entrext.png`,
                width: 1024,
                height: 1024,
                type: "image/png",
                alt: "Entrext Labs - Velocity Lab",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Entrext Labs | Where Velocity is the Moat",
        description: "Validate fast. Scale further. Own what works. The partner ecosystem for founders.",
        images: [`${baseUrl}/Entrext.png`],
    },
    other: {
        "article:published_time": new Date(2025, 2, 27).toISOString(),
        "article:modified_time": new Date().toISOString(),
        "google-site-verification": "G-GEZ4BLC9X0", // NOTE: This looks like a GA ID. Ensure this is your actual Search Console verification token.
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
    category: 'technology',
};

export const viewport = {
    themeColor: '#0A0A0B',
    width: 'device-width',
    initialScale: 1,
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
                            "description": "An experimental lab where Primary Partners validate products at velocity and Secondary Partners scale what is proven.",
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
