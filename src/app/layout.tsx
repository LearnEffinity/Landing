import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./providers";
import { Poppins } from "next/font/google";

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
      <body className={`${poppins.className} bg-surface-primary min-h-screen`}>
        <ThemeProvider>
          {/* Navigation */}
          <main className="w-full mx-auto max-w-screen-desktop px-4 desktop:px-0">
            {children}
          </main>
          {/* Footer */}
        </ThemeProvider>
      </body>
    </html>
  );
}
