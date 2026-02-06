"use client";

import { usePathname } from "next/navigation";
import { CookieModal } from "@/components/CookieModal";
import { Footer } from "@/components/Footer";

const LP_PATH = "empreendimento";

export function LayoutSwitcher({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLp = pathname?.includes(LP_PATH);

  if (isLp) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      <CookieModal />
      <Footer />
    </>
  );
}
