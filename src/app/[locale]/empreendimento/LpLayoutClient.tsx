"use client";

import { useState, useEffect } from "react";
import { LpNavigation } from "./components/LpNavigation";
import { LpFooter } from "./components/LpFooter";

export function LpLayoutClient({ children }: { children: React.ReactNode }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sansSystem">
      <LpNavigation scrollY={scrollY} />
      <main>{children}</main>
      <LpFooter />
    </div>
  );
}
