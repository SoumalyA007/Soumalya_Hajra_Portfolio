import { c as createLucideIcon, j as jsxRuntimeExports } from "./index-hhDS7fAK.js";
import { m as motion, B as Badge } from "./proxy-DVINWswX.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
];
const BookOpen = createLucideIcon("book-open", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
const Clock = createLucideIcon("clock", __iconNode);
const BLOG_POSTS = [
  {
    id: "regression-selenium",
    title: "How I Reduced Regression Time by 70% Using Selenium",
    excerpt: "A deep dive into building a scalable POM framework with TestNG and Jenkins integration that cut our regression cycle from days to hours.",
    category: "Automation",
    readTime: "5 min read",
    publishedAt: "Coming Soon",
    tags: ["Selenium", "TestNG", "POM", "Regression"]
  },
  {
    id: "api-testing-practices",
    title: "API Testing Best Practices: From Postman to RestAssured",
    excerpt: "Moving beyond manual API testing — how to build maintainable automated API test suites with proper assertions, reusable builders, and CI hooks.",
    category: "API Testing",
    readTime: "4 min read",
    publishedAt: "Coming Soon",
    tags: ["RestAssured", "Postman", "API", "Best Practices"]
  },
  {
    id: "cicd-qa",
    title: "How CI/CD Changed My QA Workflow",
    excerpt: "Jenkins, GitHub hooks, and automated test triggers — a practical guide to integrating QA into every commit.",
    category: "CI/CD",
    readTime: "3 min read",
    publishedAt: "Coming Soon",
    tags: ["Jenkins", "CI/CD", "Automation", "DevOps"]
  }
];
const CATEGORY_STYLES = {
  Automation: {
    badge: "bg-accent/10 text-accent border-accent/25",
    dot: "bg-accent"
  },
  "API Testing": {
    badge: "bg-primary/10 text-primary border-primary/25",
    dot: "bg-primary"
  },
  "CI/CD": {
    badge: "bg-secondary text-secondary-foreground border-border/40",
    dot: "bg-muted-foreground"
  }
};
function BlogCard({ post, index }) {
  const style = CATEGORY_STYLES[post.category] ?? {
    badge: "bg-muted text-muted-foreground border-border/30",
    dot: "bg-muted-foreground"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.article,
    {
      "data-ocid": `blog.item.${index + 1}`,
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: index * 0.12 },
      className: "bg-card border border-border/60 rounded-2xl overflow-hidden flex flex-col group hover:border-accent/30 hover:shadow-[0_0_20px_rgba(56,189,248,0.1)] transition-all duration-300",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-0.5 w-full ${style.dot} opacity-60` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col gap-4 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `text-xs font-medium px-2.5 py-1 rounded-full border ${style.badge}`,
                children: post.category
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: post.readTime })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-base text-foreground leading-snug group-hover:text-accent/90 transition-colors duration-200", children: post.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed flex-1", children: post.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 pt-3 border-t border-border/40", children: post.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "text-xs text-muted-foreground bg-muted/60 px-2 py-0.5 rounded-full",
              children: [
                "#",
                tag
              ]
            },
            tag
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mt-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: "border-accent/30 text-accent bg-accent/5 text-xs font-medium",
              children: "Coming Soon"
            }
          ) })
        ] })
      ]
    },
    post.id
  );
}
function BlogSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "blog", "data-ocid": "blog.section", className: "py-24 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent text-sm font-medium uppercase tracking-widest mb-3", children: "Insights" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground", children: [
            "From the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Blog" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-4 max-w-xl mx-auto text-base", children: "Practical QA engineering insights — automation strategies, API testing patterns, and CI/CD for quality teams." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: BLOG_POSTS.map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(BlogCard, { post, index: i }, post.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: 0.4 },
        className: "mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 p-6 bg-card border border-border/50 rounded-2xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-5 h-5 text-accent flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm text-center sm:text-left", children: "Articles coming soon. Follow along for QA engineering deep-dives:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://www.linkedin.com/in/soumalya-hajra/",
              target: "_blank",
              rel: "noopener noreferrer",
              "data-ocid": "blog.linkedin.link",
              className: "text-accent text-sm font-medium hover:underline inline-flex items-center gap-1.5 flex-shrink-0 transition-smooth",
              children: [
                "Follow on LinkedIn",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
              ]
            }
          )
        ]
      }
    )
  ] }) });
}
export {
  BlogSection as default
};
