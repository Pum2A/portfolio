// app/layout.tsx
import "./styles/globals.css";
import { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import AnimatedFooter from "./components/AnimatedFooter";
import {AnimatedCursor} from "./components/AnimatedCursor";
import ContextMenu from "./components/ContextMenu";
import Topbar from "./components/Topbar";
import { ThemeProvider } from "./components/ThemeProvider";
import AiAssistant from "./components/AiAssistant";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <AnimatedCursor />
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Topbar />
            <main className="flex-1 flex flex-col"> {/* Added flex container here */}
              {children}
            </main>
            <AnimatedFooter />
            <ContextMenu />
            <AiAssistant/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}