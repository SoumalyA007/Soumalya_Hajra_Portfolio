import type { NavSection } from "@/types/portfolio";
import { useEffect, useState } from "react";

const SECTIONS: NavSection[] = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "blog",
  "contact",
];

export function useActiveSection(): [
  NavSection,
  (section: NavSection) => void,
] {
  const [activeSection, setActiveSection] = useState<NavSection>("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const sectionVisibility = new Map<NavSection, number>();

    for (const sectionId of SECTIONS) {
      const el = document.getElementById(sectionId);
      if (!el) continue;

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            sectionVisibility.set(sectionId, entry.intersectionRatio);
            let maxRatio = 0;
            let mostVisible: NavSection = "home";
            for (const [id, ratio] of sectionVisibility) {
              if (ratio > maxRatio) {
                maxRatio = ratio;
                mostVisible = id;
              }
            }
            if (maxRatio > 0) {
              setActiveSection(mostVisible);
            }
          }
        },
        {
          threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0],
          rootMargin: "-80px 0px -20% 0px",
        },
      );

      observer.observe(el);
      observers.push(observer);
    }

    return () => {
      for (const obs of observers) {
        obs.disconnect();
      }
    };
  }, []);

  return [activeSection, setActiveSection];
}
