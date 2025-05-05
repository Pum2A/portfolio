"use client";
import { useEffect, useState } from "react";

export const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      setScroll((scrollPosition / totalHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-accent z-50">
      <div
        className="h-1 bg-gradient-to-r from-accents to-accents-dark"
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
};
