import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports } from "./index-hhDS7fAK.js";
import { m as motion, B as Badge } from "./proxy-DVINWswX.js";
import { G as Github } from "./github-BKCRpd_N.js";
import { T as TrendingUp } from "./trending-up-Dgm81ru8.js";
import { Z as Zap } from "./zap-Nxgtvx8d.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "m16 18 6-6-6-6", key: "eg8j8" }],
  ["path", { d: "m8 6-6 6 6 6", key: "ppft3o" }]
];
const Code = createLucideIcon("code", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "18", r: "3", key: "1mpf1b" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["path", { d: "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9", key: "1uq4wg" }],
  ["path", { d: "M12 12v3", key: "158kv8" }]
];
const GitFork = createLucideIcon("git-fork", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
const FEATURED_PROJECTS = [
  {
    id: "opencart-automation",
    title: "OpenCart Automation Framework",
    description: "A production-grade Selenium + TestNG automation framework using Page Object Model, covering critical e-commerce user journeys from login to checkout.",
    highlights: [
      "Automated critical user journeys — login, search, cart, checkout",
      "Reduced regression effort by ~70% vs manual baseline",
      "CI/CD integrated with Jenkins — auto-triggered on every commit",
      "Page Object Model design for maximum maintainability"
    ],
    techStack: ["Selenium", "TestNG", "Java", "Jenkins", "Maven", "POM"],
    githubUrl: "https://github.com/SoumalyA007"
  },
  {
    id: "api-automation",
    title: "REST API Automation Framework",
    description: "Comprehensive RestAssured framework testing authentication, cart, and payment APIs with reusable builder patterns and detailed defect tracking.",
    highlights: [
      "Tested 30+ endpoints across auth, cart, and payments modules",
      "Reusable request builder reduced test creation time by 75%",
      "Identified 12+ critical API defects before UI integration",
      "JSON schema validation and response time assertions"
    ],
    techStack: ["RestAssured", "Java", "TestNG", "Postman", "JSON Schema"],
    githubUrl: "https://github.com/SoumalyA007"
  }
];
const PROJECT_METRICS = {
  "opencart-automation": [
    { value: "~70%", label: "Less Regression Effort", icon: TrendingUp },
    { value: "CI/CD", label: "Jenkins Integrated", icon: Zap }
  ],
  "api-automation": [
    { value: "75%", label: "Faster Test Creation", icon: TrendingUp },
    { value: "12+", label: "Critical Defects Found", icon: Zap }
  ]
};
function FeaturedProjectCard({
  project,
  index
}) {
  const metrics = PROJECT_METRICS[project.id] ?? [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: index * 0.15 },
      "data-ocid": `projects.item.${index + 1}`,
      className: "relative bg-card border border-border/60 rounded-2xl overflow-hidden flex flex-col gap-0 group hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_28px_rgba(56,189,248,0.18)] hover:-translate-y-1",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-0.5 w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col gap-4 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg text-foreground leading-snug group-hover:text-accent transition-colors duration-200", children: project.title }) }),
            project.githubUrl && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: project.githubUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                "data-ocid": `projects.github.link.${index + 1}`,
                "aria-label": `View ${project.title} on GitHub`,
                className: "flex-shrink-0 text-muted-foreground hover:text-accent transition-smooth p-1.5 rounded-lg hover:bg-accent/10",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "w-5 h-5" })
              }
            )
          ] }),
          metrics.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: metrics.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-1.5 bg-accent/10 border border-accent/25 rounded-full px-3 py-1",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(m.icon, { className: "w-3.5 h-3.5 text-accent flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-bold text-sm", children: m.value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs", children: m.label })
              ]
            },
            m.value
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: project.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: project.highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "flex items-start gap-2.5 text-sm text-foreground/80",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: h })
              ]
            },
            h
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/40", children: project.techStack.map((tech) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "secondary",
              className: "text-xs bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors",
              children: tech
            },
            tech
          )) })
        ] })
      ]
    }
  );
}
function GithubRepoCard({
  repo,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.a,
    {
      href: repo.html_url,
      target: "_blank",
      rel: "noopener noreferrer",
      "data-ocid": `projects.github_repo.item.${index + 1}`,
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.4, delay: index * 0.08 },
      className: "bg-card border border-border/50 rounded-xl p-4 flex flex-col gap-2.5 hover:border-accent/40 hover:shadow-[0_0_16px_rgba(56,189,248,0.12)] hover:-translate-y-0.5 transition-all duration-300 group",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Code, { className: "w-4 h-4 text-accent flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-sm text-foreground truncate min-w-0 group-hover:text-accent transition-colors", children: repo.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3 text-muted-foreground ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" })
        ] }),
        repo.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs line-clamp-2 leading-relaxed", children: repo.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground mt-auto", children: [
          repo.language && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-accent" }),
            repo.language
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3" }),
            repo.stargazers_count
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(GitFork, { className: "w-3 h-3" }),
            repo.forks_count
          ] })
        ] })
      ]
    }
  );
}
function RepoSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border/40 rounded-xl p-4 flex flex-col gap-3 animate-pulse", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 bg-muted rounded" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3.5 bg-muted rounded w-2/3" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-muted rounded w-full" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-muted rounded w-4/5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 bg-muted rounded w-12" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 bg-muted rounded w-8" })
    ] })
  ] });
}
function ProjectsSection() {
  const [repos, setRepos] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [fetchError, setFetchError] = reactExports.useState(false);
  reactExports.useEffect(() => {
    fetch(
      "https://api.github.com/users/SoumalyA007/repos?sort=updated&per_page=6"
    ).then((r) => {
      if (!r.ok) throw new Error("GitHub API error");
      return r.json();
    }).then((data) => {
      if (Array.isArray(data)) {
        setRepos(data.slice(0, 6));
      } else {
        setFetchError(true);
      }
    }).catch(() => {
      setFetchError(true);
    }).finally(() => setLoading(false));
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "projects",
      "data-ocid": "projects.section",
      className: "py-24 bg-muted/20",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5 },
            className: "text-center mb-16",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent text-sm font-medium uppercase tracking-widest mb-3", children: "Work" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground", children: [
                "Featured ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Projects" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-4 max-w-xl mx-auto text-base", children: "Real-world automation frameworks with measurable impact on quality and delivery speed." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6 mb-16", children: FEATURED_PROJECTS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturedProjectCard, { project: p, index: i }, p.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-divider mb-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 bg-accent/10 rounded-lg border border-accent/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "w-4 h-4 text-accent" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-xl text-foreground", children: "More on GitHub" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "https://github.com/SoumalyA007",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "data-ocid": "projects.github.profile_link",
                    className: "ml-auto text-xs text-accent hover:underline flex items-center gap-1 transition-smooth",
                    children: [
                      "View all",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3 h-3" })
                    ]
                  }
                )
              ] }),
              loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  "data-ocid": "projects.github.loading_state",
                  className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
                  children: [1, 2, 3, 4, 5, 6].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(RepoSkeleton, {}, n))
                }
              ) : fetchError ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  "data-ocid": "projects.github.error_state",
                  className: "flex flex-col items-center justify-center py-12 gap-3 bg-card border border-border/40 rounded-xl text-center px-6",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "w-8 h-8 text-muted-foreground/50" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Unable to load repos right now." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: "https://github.com/SoumalyA007",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-accent text-sm hover:underline flex items-center gap-1",
                        children: [
                          "View repositories on GitHub",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5" })
                        ]
                      }
                    )
                  ]
                }
              ) : repos.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4", children: repos.map((repo, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(GithubRepoCard, { repo, index: i }, repo.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  "data-ocid": "projects.github.empty_state",
                  className: "text-center py-8 text-muted-foreground text-sm",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "https://github.com/SoumalyA007",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "text-accent hover:underline",
                      children: "View all repositories on GitHub →"
                    }
                  )
                }
              )
            ]
          }
        )
      ] })
    }
  );
}
export {
  ProjectsSection as default
};
