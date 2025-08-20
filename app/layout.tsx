import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const syne = Inter({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://cole-nielson.github.io/coles-portfolio/"),
    title: "Cole's Portfolio",
    description:
    "Cole Nielson - Self-taught AI Engineer passionate about building projects that showcase the real-world potential of AI and automation technologies.",
    generator: "Next.js",
    applicationName: "Cole's Portfolio",
    keywords: [
        "Cole Nielson",
        "AI Engineer",
        "AI Developer",
        "Machine Learning",
        "Automation",
        "Python",
        "JavaScript",
        "React",
        "Next.js",
        "Self-taught developer",
        "AI portfolio",
        "Automation engineer",
        "Full stack developer",
        "Portfolio",
        "Tech enthusiast",
    ],
    colorScheme: "dark",
    openGraph: {
        title: "Cole's Portfolio - AI Engineer",
        description:
      "Self-taught AI Engineer passionate about building projects that showcase the real-world potential of AI and automation technologies.",
        url: "https://cole-nielson.github.io/coles-portfolio/",
        siteName: "Cole's Portfolio",
        images: [
            {
                url: "/hero.png",
                width: 1200,
                height: 630,
                alt: "Cole Nielson - AI Engineer Portfolio",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Cole's Portfolio - AI Engineer",
        description:
      "Self-taught AI Engineer passionate about building projects that showcase the real-world potential of AI and automation technologies.",
        images: ["/hero.png"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
            </body>
        </html>
    );
}
