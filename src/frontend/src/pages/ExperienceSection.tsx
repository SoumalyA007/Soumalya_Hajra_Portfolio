import type { ExperienceItem } from "@/types/portfolio";
import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const EXPERIENCE: ExperienceItem[] = [
  {
    id: "ubuy",
    company: "Ubuy Technologies Pvt. Ltd.",
    role: "QA Tester",
    duration: "2025 – Present",
    location: "India",
    achievements: [
      "Identified numerous bugs with precise defect reporting and categorization across product modules",
      "Achieved zero P1 production defects across 6 consecutive sprints",
      "Improved regression test efficiency significantly through systematic test optimization",
      "Accelerated defect resolution cycle considerably via enhanced collaboration workflows",
    ],
    technologies: [
      "Selenium",
      "TestNG",
      "JIRA",
      "Jenkins",
      "Postman",
      "Chrome DevTools",
    ],
  },
];

const METRICS = [
  {
    value: "Many",
    label: "Bugs Identified",
    sub: "with precise reporting",
    icon: "🐛",
  },
  { value: "Zero", label: "P1 Defects", sub: "across 6 sprints", icon: "🛡️" },
  {
    value: "High",
    label: "Regression Efficiency",
    sub: "improvement",
    icon: "⚡",
  },
  {
    value: "Fast",
    label: "Faster Resolution",
    sub: "defect turnaround",
    icon: "🚀",
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      data-ocid="experience.section"
      ref={sectionRef}
      className="py-24 bg-background"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: animated ? 1 : 0,
            transform: animated ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">
            Career
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-base leading-relaxed">
            Delivering quality at scale with measurable impact across every
            sprint.
          </p>
        </div>

        {/* Impact metrics */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-14"
          style={{
            opacity: animated ? 1 : 0,
            transform: animated ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 150ms, transform 0.6s ease 150ms",
          }}
        >
          {METRICS.map((m, i) => (
            <div
              key={m.label}
              data-ocid={`experience.metric.${i + 1}`}
              className="bg-card border border-border/60 rounded-xl p-4 sm:p-5 text-center card-glow"
              style={{
                opacity: animated ? 1 : 0,
                transform: animated ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.5s ease ${200 + i * 80}ms, transform 0.5s ease ${200 + i * 80}ms`,
              }}
            >
              <span className="text-xl mb-2 block" aria-hidden="true">
                {m.icon}
              </span>
              <div className="font-display font-bold text-2xl sm:text-3xl text-accent mb-1 leading-none">
                {m.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-foreground mb-0.5">
                {m.label}
              </div>
              <div className="text-xs text-muted-foreground">{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-6 bottom-0 w-px bg-gradient-to-b from-accent/60 via-border/50 to-transparent hidden sm:block" />

          {EXPERIENCE.map((exp, index) => (
            <div
              key={exp.id}
              data-ocid="experience.item.1"
              className="relative sm:pl-20"
              style={{
                opacity: animated ? 1 : 0,
                transform: animated ? "translateX(0)" : "translateX(-20px)",
                transition: `opacity 0.6s ease ${400 + index * 150}ms, transform 0.6s ease ${400 + index * 150}ms`,
              }}
            >
              {/* Timeline dot */}
              <div className="hidden sm:flex absolute left-0 top-0 w-12 h-12 items-center justify-center rounded-full bg-accent/10 border-2 border-accent/40 animate-pulse-glow">
                <Briefcase className="w-5 h-5 text-accent" />
              </div>

              {/* Experience card */}
              <div className="bg-card border border-border/60 rounded-2xl p-6 sm:p-7 card-glow">
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground leading-tight">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-1.5 text-sm">
                      <span className="font-semibold text-accent">
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-accent/25 bg-accent/8 text-sm text-accent font-medium whitespace-nowrap">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.duration}
                  </div>
                </div>

                {/* Divider */}
                <div className="section-divider my-5" />

                {/* Achievement bullets */}
                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((achievement) => {
                    const aIdx = exp.achievements.indexOf(achievement);
                    return (
                      <li
                        key={achievement}
                        className="flex items-start gap-3 text-sm text-foreground/85 leading-relaxed"
                        style={{
                          opacity: animated ? 1 : 0,
                          transform: animated
                            ? "translateX(0)"
                            : "translateX(-8px)",
                          transition: `opacity 0.4s ease ${600 + aIdx * 80}ms, transform 0.4s ease ${600 + aIdx * 80}ms`,
                        }}
                      >
                        <TrendingUp className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        {achievement}
                      </li>
                    );
                  })}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/40">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
