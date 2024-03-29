import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./providers";
import { Poppins } from "next/font/google";
import Footer from "../components/footer";
import Navbar from "@/components/navbar";
const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Effinity",
  description:
    "Explore Effinity, a gamified educational platform offering personalized content on technology and finance. Utilizing AI and big data, we provide tailored courses, articles, videos, and quizzes to match your interests and skill level.",

  openGraph: {
    title: "Effinity",
    description:
      "Explore Effinity, a gamified educational platform offering personalized content on technology and finance. Utilizing AI and big data, we provide tailored courses, articles, videos, and quizzes to match your interests and skill level.",
    images: [
      {
        url: "/EffinityMetadataBanner.png",
        width: 800,
        height: 400,
        alt: "Effinity",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/icon" />
        {/* Open Graph (All Social Medias almost) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://effinity.vercel.app/" />
        <meta property="og:title" content="Effinity" />
        <meta
          property="og:description"
          content="Explore Effinity, a gamified educational platform offering personalized content on technology and finance. Utilizing AI and big data, we provide tailored courses, articles, videos, and quizzes to match your interests and skill level."
        />
        <meta property="og:image" content="/EffinityMetadataBanner.png" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://effinity.vercel.app/" />
        <meta property="twitter:title" content="Effinity" />
        <meta
          property="twitter:description"
          content="Explore Effinity, a gamified educational platform offering personalized content on technology and finance. Utilizing AI and big data, we provide tailored courses, articles, videos, and quizzes to match your interests and skill level."
        />
        <meta property="twitter:image" content="/EffinityMetadataBanner.png" />
      </head>
      <body
        className={`${poppins.className} max-w-screen min-h-screen overflow-x-hidden bg-surface-primary`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="mx-auto w-full max-w-full px-4 desktop:max-w-screen-desktop desktop:px-0">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
