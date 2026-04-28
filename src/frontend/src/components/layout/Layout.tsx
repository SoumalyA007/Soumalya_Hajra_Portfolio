import { useActiveSection } from "@/hooks/useActiveSection";
import type { ReactNode } from "react";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [activeSection, setActiveSection] = useActiveSection();

  return (
    <div className="min-h-screen flex flex-col bg-background transition-theme">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="flex-1 pt-16">{children}</main>
    </div>
  );
}
