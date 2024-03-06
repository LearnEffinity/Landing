import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./providers";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600"],
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
      <ThemeProvider>
        <body className={poppins.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
