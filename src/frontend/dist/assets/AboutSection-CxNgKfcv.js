import { c as createLucideIcon, j as jsxRuntimeExports, r as reactExports } from "./index-SpweSjyp.js";
import { Z as Zap } from "./zap-CdOPC4rU.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
  ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
];
const TrendingDown = createLucideIcon("trending-down", __iconNode);
const highlights = [
  "Reduced regression cycles by 70% using Selenium automation",
  "Zero critical defects reached production across multiple releases",
  "CI/CD-integrated test pipelines with Jenkins auto-triggering",
  "30+ API endpoints tested with reusable RestAssured frameworks"
];
const stats = [
  {
    value: "1+",
    label: "Years Experience",
    sublabel: "Manual & Automation QA",
    icon: Zap
  },
  {
    value: "70%",
    label: "Regression Reduction",
    sublabel: "Faster release cycles",
    icon: TrendingDown
  },
  {
    value: "Zero",
    label: "P1 Defects",
    sublabel: "In production & Multiple sprints",
    icon: ShieldCheck
  }
];
function useInView(threshold = 0.15) {
  const ref = reactExports.useRef(null);
  const [inView, setInView] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}
function AboutSection() {
  const { ref: sectionRef, inView } = useInView(0.12);
  const { ref: statsRef, inView: statsInView } = useInView(0.2);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", "data-ocid": "about.section", className: "py-28 bg-muted/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent text-sm font-semibold uppercase tracking-widest mb-2", children: "About Me" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground", children: [
        "Turning Quality into a",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Competitive Advantage" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-divider w-24 mx-auto mt-6" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref: sectionRef,
        className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "transition-all duration-700 ease-out",
              style: {
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(28px)",
                transitionDelay: "0ms"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-lg leading-relaxed mb-5", children: [
                  "Results-driven QA Engineer with",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-semibold", children: "1+ year experience" }),
                  " ",
                  "in manual and automation testing. I specialize in transforming repetitive manual workflows into scalable automation frameworks using Selenium and RestAssured."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-lg leading-relaxed mb-5", children: [
                  "I've worked on high-scale e-commerce systems where I reduced regression cycles by",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-bold", children: "70%" }),
                  " and ensured",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-bold", children: "zero critical defects" }),
                  " ",
                  "reached production across multiple releases."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed", children: "I focus on building reliable, maintainable test systems integrated with CI/CD pipelines — aligning quality engineering with fast-paced product delivery." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "mt-8 h-1 rounded-full w-20",
                    style: {
                      background: "linear-gradient(to right, oklch(var(--accent)), transparent)"
                    }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "space-y-3",
              style: {
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(28px)",
                transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
                transitionDelay: "150ms"
              },
              children: highlights.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  "data-ocid": `about.highlight.item.${idx + 1}`,
                  className: "flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50 card-glow",
                  style: {
                    transitionDelay: `${150 + idx * 60}ms`
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-accent flex-shrink-0 mt-0.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/90 text-sm leading-relaxed", children: item })
                  ]
                },
                item
              ))
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: statsRef, className: "grid grid-cols-1 sm:grid-cols-3 gap-5", children: stats.map((stat, idx) => {
      const Icon = stat.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": `about.stat.item.${idx + 1}`,
          className: "relative flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border/50 overflow-hidden card-glow",
          style: {
            opacity: statsInView ? 1 : 0,
            transform: statsInView ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            transitionDelay: `${idx * 100}ms`
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute top-0 left-1/2 -translate-x-1/2 w-24 h-16 rounded-full pointer-events-none",
                style: {
                  background: "radial-gradient(ellipse, rgba(56,189,248,0.12) 0%, transparent 70%)"
                },
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                style: {
                  background: "rgba(56,189,248,0.1)",
                  border: "1px solid rgba(56,189,248,0.2)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-accent" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-4xl sm:text-5xl text-accent mb-1 leading-none", children: stat.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground text-base mb-1", children: stat.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs", children: stat.sublabel })
          ]
        },
        stat.label
      );
    }) })
  ] }) });
}
export {
  AboutSection as default
};
