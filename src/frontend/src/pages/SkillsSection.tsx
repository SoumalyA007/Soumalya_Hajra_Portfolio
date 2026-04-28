import type { Skill, SkillCategory } from "@/types/portfolio";
import { useEffect, useRef, useState } from "react";

interface SkillGroup {
  category: SkillCategory;
  label: string;
  skills: Skill[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Automation",
    label: "Automation Testing",
    skills: [
      { name: "Selenium", level: 90, category: "Automation" },
      { name: "TestNG", level: 85, category: "Automation" },
      { name: "RestAssured", level: 85, category: "Automation" },
    ],
  },
  {
    category: "Programming",
    label: "Programming",
    skills: [{ name: "Java", level: 80, category: "Programming" }],
  },
  {
    category: "API Testing",
    label: "API Testing",
    skills: [
      { name: "Postman", level: 90, category: "API Testing" },
      { name: "REST APIs", level: 85, category: "API Testing" },
    ],
  },
  {
    category: "CI/CD",
    label: "CI/CD & DevOps",
    skills: [{ name: "Jenkins", level: 80, category: "CI/CD" }],
  },
  {
    category: "Tools",
    label: "Tools",
    skills: [
      { name: "JIRA", level: 85, category: "Tools" },
      { name: "Git / GitHub", level: 90, category: "Tools" },
      { name: "Chrome DevTools", level: 85, category: "Tools" },
    ],
  },
  {
    category: "Testing",
    label: "Testing Methodologies",
    skills: [
      { name: "Regression Testing", level: 95, category: "Testing" },
      { name: "Smoke Testing", level: 90, category: "Testing" },
      { name: "Exploratory Testing", level: 90, category: "Testing" },
      { name: "UAT", level: 85, category: "Testing" },
    ],
  },
];

const CATEGORY_ICON: Record<SkillCategory, string> = {
  Automation: "⚙️",
  Programming: "☕",
  "API Testing": "🔗",
  "CI/CD": "🚀",
  Tools: "🛠️",
  Testing: "🧪",
};

interface SkillBarProps {
  skill: Skill;
  animate: boolean;
  delay: number;
}

function SkillBar({ skill, animate, delay }: SkillBarProps) {
  return (
    <div
      className="space-y-2"
      style={{
        opacity: animate ? 1 : 0,
        transform: animate ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">
          {skill.name}
        </span>
      </div>
      <div className="skill-bar-track h-2">
        <div
          className="skill-bar-fill"
          style={{ width: animate ? `${skill.level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

interface CategoryCardProps {
  group: SkillGroup;
  animate: boolean;
  groupIndex: number;
}

function CategoryCard({ group, animate, groupIndex }: CategoryCardProps) {
  const cardDelay = groupIndex * 80;

  return (
    <div
      className="bg-card border border-border/60 rounded-2xl p-6 card-glow"
      style={{
        opacity: animate ? 1 : 0,
        transform: animate ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${cardDelay}ms, transform 0.6s ease ${cardDelay}ms`,
      }}
    >
      <div className="flex items-center gap-2.5 mb-5">
        <span className="text-lg leading-none" aria-hidden="true">
          {CATEGORY_ICON[group.category]}
        </span>
        <h3 className="font-display font-semibold text-base text-foreground">
          {group.label}
        </h3>
      </div>
      <div className="space-y-4">
        {group.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            animate={animate}
            delay={cardDelay + i * 100 + 150}
          />
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
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
      id="skills"
      data-ocid="skills.section"
      ref={sectionRef}
      className="py-24 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
            Expertise
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-base leading-relaxed">
            From automation frameworks to CI/CD integration — a focused stack
            built for quality engineering.
          </p>
        </div>

        {/* Skill category cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group, index) => (
            <CategoryCard
              key={group.category}
              group={group}
              animate={animated}
              groupIndex={index}
            />
          ))}
        </div>

        {/* Summary bar */}
        <div
          className="mt-12 flex flex-wrap justify-center gap-3"
          style={{
            opacity: animated ? 1 : 0,
            transition: "opacity 0.8s ease 800ms",
          }}
        >
          {SKILL_GROUPS.map((g) => (
            <span
              key={g.category}
              className="text-xs px-3 py-1.5 rounded-full border border-accent/25 bg-accent/8 text-accent font-medium"
            >
              {CATEGORY_ICON[g.category]} {g.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
