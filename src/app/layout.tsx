// app/layout.tsx
import { Analytics } from "@vercel/analytics/next";
import { Montserrat } from "next/font/google";
import { ReactNode } from "react";
import { AnimatedCursor } from "./components/AnimatedCursor";
import AnimatedFooter from "./components/AnimatedFooter";
import ContextMenu from "./components/ContextMenu";
import { ThemeProvider } from "./components/ThemeProvider";
import Topbar from "./components/Topbar";
import "./styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Portfolio - DG - Intern Frontend Developer",
  description:
    "Cześć! Nazywam się DG i tworzę nowoczesne aplikacje webowe z wykorzystaniem React, Next.js i .NET. Zobacz moje projekty i umiejętności.",
  keywords: [
    "portfolio",
    "programista",
    "frontend",
    "backend",
    "Next.js",
    ".NET",
    "React",
    "developer",
    "fullstack",
    "DG",
  ],
  authors: [{ name: "DG" }],
  creator: "DG",
  robots: "index, follow",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <AnimatedCursor />
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Topbar />
            <main className="flex-1 flex flex-col">
              {children}
              <Analytics />
            </main>
            <AnimatedFooter />
            <ContextMenu />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
