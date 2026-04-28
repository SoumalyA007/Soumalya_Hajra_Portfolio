import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports } from "./index-hhDS7fAK.js";
import { M as MapPin } from "./map-pin-bsGJyIW0.js";
import { T as TrendingUp } from "./trending-up-Dgm81ru8.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
];
const Briefcase = createLucideIcon("briefcase", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode);
const EXPERIENCE = [
  {
    id: "ubuy",
    company: "Ubuy Technologies Pvt. Ltd.",
    role: "QA Tester",
    duration: "2023 – 2024",
    location: "India",
    achievements: [
      "Identified 100+ bugs with precise defect reporting and categorization across product modules",
      "Achieved zero P1 production defects across 6 consecutive sprints",
      "Improved regression test efficiency by 60% through systematic test optimization",
      "Accelerated defect resolution cycle by 30% via enhanced collaboration workflows"
    ],
    technologies: [
      "Selenium",
      "TestNG",
      "JIRA",
      "Jenkins",
      "Postman",
      "Chrome DevTools"
    ]
  }
];
const METRICS = [
  {
    value: "100+",
    label: "Bugs Identified",
    sub: "with precise reporting",
    icon: "🐛"
  },
  { value: "Zero", label: "P1 Defects", sub: "across multiple sprints", icon: "🛡️" },
  {
    value: "60%",
    label: "Regression Efficiency",
    sub: "improvement",
    icon: "⚡"
  },
  {
    value: "30%",
    label: "Faster Resolution",
    sub: "defect turnaround",
    icon: "🚀"
  }
];
function ExperienceSection() {
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
      id: "experience",
      "data-ocid": "experience.section",
      ref: sectionRef,
      className: "py-24 bg-background",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6", children: [
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent text-sm font-medium uppercase tracking-widest mb-3", children: "Career" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground", children: [
                "Work ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Experience" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-4 max-w-lg mx-auto text-base leading-relaxed", children: "Delivering quality at scale with measurable impact across every sprint." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-14",
            style: {
              opacity: animated ? 1 : 0,
              transform: animated ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease 150ms, transform 0.6s ease 150ms"
            },
            children: METRICS.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": `experience.metric.${i + 1}`,
                className: "bg-card border border-border/60 rounded-xl p-4 sm:p-5 text-center card-glow",
                style: {
                  opacity: animated ? 1 : 0,
                  transform: animated ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.5s ease ${200 + i * 80}ms, transform 0.5s ease ${200 + i * 80}ms`
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl mb-2 block", "aria-hidden": "true", children: m.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-2xl sm:text-3xl text-accent mb-1 leading-none", children: m.value }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs sm:text-sm font-semibold text-foreground mb-0.5", children: m.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: m.sub })
                ]
              },
              m.label
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-6 top-6 bottom-0 w-px bg-gradient-to-b from-accent/60 via-border/50 to-transparent hidden sm:block" }),
          EXPERIENCE.map((exp, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": "experience.item.1",
              className: "relative sm:pl-20",
              style: {
                opacity: animated ? 1 : 0,
                transform: animated ? "translateX(0)" : "translateX(-20px)",
                transition: `opacity 0.6s ease ${400 + index * 150}ms, transform 0.6s ease ${400 + index * 150}ms`
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:flex absolute left-0 top-0 w-12 h-12 items-center justify-center rounded-full bg-accent/10 border-2 border-accent/40 animate-pulse-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-5 h-5 text-accent" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border/60 rounded-2xl p-6 sm:p-7 card-glow", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-3 mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl sm:text-2xl text-foreground leading-tight", children: exp.role }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 mt-1.5 text-sm", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-accent", children: exp.company }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-muted-foreground", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5 flex-shrink-0" }),
                          exp.location
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-accent/25 bg-accent/8 text-sm text-accent font-medium whitespace-nowrap", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5" }),
                      exp.duration
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-divider my-5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 mb-6", children: exp.achievements.map((achievement) => {
                    const aIdx = exp.achievements.indexOf(achievement);
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "li",
                      {
                        className: "flex items-start gap-3 text-sm text-foreground/85 leading-relaxed",
                        style: {
                          opacity: animated ? 1 : 0,
                          transform: animated ? "translateX(0)" : "translateX(-8px)",
                          transition: `opacity 0.4s ease ${600 + aIdx * 80}ms, transform 0.4s ease ${600 + aIdx * 80}ms`
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-accent flex-shrink-0 mt-0.5" }),
                          achievement
                        ]
                      },
                      achievement
                    );
                  }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 pt-4 border-t border-border/40", children: exp.technologies.map((tech) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 font-medium",
                      children: tech
                    },
                    tech
                  )) })
                ] })
              ]
            },
            exp.id
          ))
        ] })
      ] })
    }
  );
}
export {
  ExperienceSection as default
};
