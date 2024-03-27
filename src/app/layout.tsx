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
  description: "Learn financial literacy the fun way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
