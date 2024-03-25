import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./providers";
import Navbar from "./components/navbar";

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
        <body className={""}>
          
          <Navbar />
        </body>
      </ThemeProvider>
    </html>
  );
}
