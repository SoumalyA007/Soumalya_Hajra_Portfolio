import { r as reactExports, j as jsxRuntimeExports } from "./index-hhDS7fAK.js";
const SKILL_GROUPS = [
  {
    category: "Automation",
    label: "Automation Testing",
    skills: [
      { name: "Selenium",  category: "Automation" },
      { name: "TestNG",  category: "Automation" },
      { name: "RestAssured", category: "Automation" }
    ]
  },
  {
    category: "Programming",
    label: "Programming",
    skills: [{ name: "Java", , category: "Programming" }]
  },
  {
    category: "API Testing",
    label: "API Testing",
    skills: [
      { name: "Postman", , category: "API Testing" },
      { name: "REST APIs",  category: "API Testing" }
    ]
  },
  {
    category: "CI/CD",
    label: "CI/CD & DevOps",
    skills: [{ name: "Jenkins",  category: "CI/CD" }]
  },
  {
    category: "Tools",
    label: "Tools",
    skills: [
      { name: "JIRA", , category: "Tools" },
      { name: "Git / GitHub", , category: "Tools" },
      { name: "Chrome DevTools", , category: "Tools" }
    ]
  },
  {
    category: "Testing",
    label: "Testing Methodologies",
    skills: [
      { name: "Regression Testing",  category: "Testing" },
      { name: "Smoke Testing", category: "Testing" },
      { name: "Exploratory Testing",  category: "Testing" },
      { name: "UAT",  category: "Testing" }
    ]
  }
];
const CATEGORY_ICON = {
  Automation: "⚙️",
  Programming: "☕",
  "API Testing": "🔗",
  "CI/CD": "🚀",
  Tools: "🛠️",
  Testing: "🧪"
};
function SkillBar({ skill, animate, delay }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "space-y-2",
      style: {
        opacity: animate ? 1 : 0,
        transform: animate ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: skill.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-mono font-semibold text-accent tabular-nums", children: [
            skill.level,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "skill-bar-track h-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "skill-bar-fill",
            style: { width: animate ? `${skill.level}%` : "0%" }
          }
        ) })
      ]
    }
  );
}
function CategoryCard({ group, animate, groupIndex }) {
  const cardDelay = groupIndex * 80;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card border border-border/60 rounded-2xl p-6 card-glow",
      style: {
        opacity: animate ? 1 : 0,
        transform: animate ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${cardDelay}ms, transform 0.6s ease ${cardDelay}ms`
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg leading-none", "aria-hidden": "true", children: CATEGORY_ICON[group.category] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-base text-foreground", children: group.label })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: group.skills.map((skill, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          SkillBar,
          {
            skill,
            animate,
            delay: cardDelay + i * 100 + 150
          },
          skill.name
        )) })
      ]
    }
  );
}
function SkillsSection() {
  const sectionRef = reactExports.useRef(null);
  const [animated, setAnimated] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "skills",
      "data-ocid": "skills.section",
      ref: sectionRef,
      className: "py-24 bg-muted/30",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "text-center mb-16",
            style: {
              opacity: animated ? 1 : 0,
              transform: animated ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease, transform 0.6s ease"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent text-sm font-medium uppercase tracking-widest mb-3", children: "Expertise" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground", children: [
                "Technical ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Skills" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-4 max-w-xl mx-auto text-base leading-relaxed", children: "From automation frameworks to CI/CD integration — a focused stack built for quality engineering." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: SKILL_GROUPS.map((group, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          CategoryCard,
          {
            group,
            animate: animated,
            groupIndex: index
          },
          group.category
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "mt-12 flex flex-wrap justify-center gap-3",
            style: {
              opacity: animated ? 1 : 0,
              transition: "opacity 0.8s ease 800ms"
            },
            children: SKILL_GROUPS.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "text-xs px-3 py-1.5 rounded-full border border-accent/25 bg-accent/8 text-accent font-medium",
                children: [
                  CATEGORY_ICON[g.category],
                  " ",
                  g.label
                ]
              },
              g.category
            ))
          }
        )
      ] })
    }
  );
}
export {
  SkillsSection as default
};
