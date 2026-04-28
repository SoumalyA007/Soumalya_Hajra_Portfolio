import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, X } from "./index-x34Ahtzv.js";
import { M as MotionConfigContext, i as isHTMLElement, u as useConstant, P as PresenceContext, a as usePresence, b as useIsomorphicLayoutEffect, L as LayoutGroupContext, m as motion } from "./proxy-BsFL-MTO.js";
import { C as Calendar } from "./calendar-DzMrJ2b6.js";
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
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode);
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup === "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup === "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs(...refs) {
  return reactExports.useCallback(composeRefs(...refs), refs);
}
class PopChildMeasure extends reactExports.Component {
  getSnapshotBeforeUpdate(prevProps) {
    const element = this.props.childRef.current;
    if (isHTMLElement(element) && prevProps.isPresent && !this.props.isPresent && this.props.pop !== false) {
      const parent = element.offsetParent;
      const parentWidth = isHTMLElement(parent) ? parent.offsetWidth || 0 : 0;
      const parentHeight = isHTMLElement(parent) ? parent.offsetHeight || 0 : 0;
      const computedStyle = getComputedStyle(element);
      const size = this.props.sizeRef.current;
      size.height = parseFloat(computedStyle.height);
      size.width = parseFloat(computedStyle.width);
      size.top = element.offsetTop;
      size.left = element.offsetLeft;
      size.right = parentWidth - size.width - size.left;
      size.bottom = parentHeight - size.height - size.top;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function PopChild({ children, isPresent, anchorX, anchorY, root, pop }) {
  var _a;
  const id = reactExports.useId();
  const ref = reactExports.useRef(null);
  const size = reactExports.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  });
  const { nonce } = reactExports.useContext(MotionConfigContext);
  const childRef = ((_a = children.props) == null ? void 0 : _a.ref) ?? (children == null ? void 0 : children.ref);
  const composedRef = useComposedRefs(ref, childRef);
  reactExports.useInsertionEffect(() => {
    const { width, height, top, left, right, bottom } = size.current;
    if (isPresent || pop === false || !ref.current || !width || !height)
      return;
    const x = anchorX === "left" ? `left: ${left}` : `right: ${right}`;
    const y = anchorY === "bottom" ? `bottom: ${bottom}` : `top: ${top}`;
    ref.current.dataset.motionPopId = id;
    const style = document.createElement("style");
    if (nonce)
      style.nonce = nonce;
    const parent = root ?? document.head;
    parent.appendChild(style);
    if (style.sheet) {
      style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            ${x}px !important;
            ${y}px !important;
          }
        `);
    }
    return () => {
      var _a2;
      (_a2 = ref.current) == null ? void 0 : _a2.removeAttribute("data-motion-pop-id");
      if (parent.contains(style)) {
        parent.removeChild(style);
      }
    };
  }, [isPresent]);
  return jsxRuntimeExports.jsx(PopChildMeasure, { isPresent, childRef: ref, sizeRef: size, pop, children: pop === false ? children : reactExports.cloneElement(children, { ref: composedRef }) });
}
const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, anchorX, anchorY, root }) => {
  const presenceChildren = useConstant(newChildrenMap);
  const id = reactExports.useId();
  let isReusedContext = true;
  let context = reactExports.useMemo(() => {
    isReusedContext = false;
    return {
      id,
      initial,
      isPresent,
      custom,
      onExitComplete: (childId) => {
        presenceChildren.set(childId, true);
        for (const isComplete of presenceChildren.values()) {
          if (!isComplete)
            return;
        }
        onExitComplete && onExitComplete();
      },
      register: (childId) => {
        presenceChildren.set(childId, false);
        return () => presenceChildren.delete(childId);
      }
    };
  }, [isPresent, presenceChildren, onExitComplete]);
  if (presenceAffectsLayout && isReusedContext) {
    context = { ...context };
  }
  reactExports.useMemo(() => {
    presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
  }, [isPresent]);
  reactExports.useEffect(() => {
    !isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
  }, [isPresent]);
  children = jsxRuntimeExports.jsx(PopChild, { pop: mode === "popLayout", isPresent, anchorX, anchorY, root, children });
  return jsxRuntimeExports.jsx(PresenceContext.Provider, { value: context, children });
};
function newChildrenMap() {
  return /* @__PURE__ */ new Map();
}
const getChildKey = (child) => child.key || "";
function onlyElements(children) {
  const filtered = [];
  reactExports.Children.forEach(children, (child) => {
    if (reactExports.isValidElement(child))
      filtered.push(child);
  });
  return filtered;
}
const AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false, anchorX = "left", anchorY = "top", root }) => {
  const [isParentPresent, safeToRemove] = usePresence(propagate);
  const presentChildren = reactExports.useMemo(() => onlyElements(children), [children]);
  const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey);
  const isInitialRender = reactExports.useRef(true);
  const pendingPresentChildren = reactExports.useRef(presentChildren);
  const exitComplete = useConstant(() => /* @__PURE__ */ new Map());
  const exitingComponents = reactExports.useRef(/* @__PURE__ */ new Set());
  const [diffedChildren, setDiffedChildren] = reactExports.useState(presentChildren);
  const [renderedChildren, setRenderedChildren] = reactExports.useState(presentChildren);
  useIsomorphicLayoutEffect(() => {
    isInitialRender.current = false;
    pendingPresentChildren.current = presentChildren;
    for (let i = 0; i < renderedChildren.length; i++) {
      const key = getChildKey(renderedChildren[i]);
      if (!presentKeys.includes(key)) {
        if (exitComplete.get(key) !== true) {
          exitComplete.set(key, false);
        }
      } else {
        exitComplete.delete(key);
        exitingComponents.current.delete(key);
      }
    }
  }, [renderedChildren, presentKeys.length, presentKeys.join("-")]);
  const exitingChildren = [];
  if (presentChildren !== diffedChildren) {
    let nextChildren = [...presentChildren];
    for (let i = 0; i < renderedChildren.length; i++) {
      const child = renderedChildren[i];
      const key = getChildKey(child);
      if (!presentKeys.includes(key)) {
        nextChildren.splice(i, 0, child);
        exitingChildren.push(child);
      }
    }
    if (mode === "wait" && exitingChildren.length) {
      nextChildren = exitingChildren;
    }
    setRenderedChildren(onlyElements(nextChildren));
    setDiffedChildren(presentChildren);
    return null;
  }
  const { forceRender } = reactExports.useContext(LayoutGroupContext);
  return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: renderedChildren.map((child) => {
    const key = getChildKey(child);
    const isPresent = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
    const onExit = () => {
      if (exitingComponents.current.has(key)) {
        return;
      }
      if (exitComplete.has(key)) {
        exitingComponents.current.add(key);
        exitComplete.set(key, true);
      } else {
        return;
      }
      let isEveryExitComplete = true;
      exitComplete.forEach((isExitComplete) => {
        if (!isExitComplete)
          isEveryExitComplete = false;
      });
      if (isEveryExitComplete) {
        forceRender == null ? void 0 : forceRender();
        setRenderedChildren(pendingPresentChildren.current);
        propagate && (safeToRemove == null ? void 0 : safeToRemove());
        onExitComplete && onExitComplete();
      }
    };
    return jsxRuntimeExports.jsx(PresenceChild, { isPresent, initial: !isInitialRender.current || initial ? void 0 : false, custom, presenceAffectsLayout, mode, root, onExitComplete: isPresent ? void 0 : onExit, anchorX, anchorY, children: child }, key);
  }) });
};
const BLOG_POSTS = [
  {
    id: "blog-1",
    title: "Why Every QA Engineer Should Learn to Code",
    excerpt: "Coding skills are the bridge between manual testing and true SDET mastery. Discover how writing code elevates your testing career, enables automation at scale, and makes you indispensable to any engineering team.",
    content: `The shift from QA Engineer to SDET isn't just a title change — it's a mindset transformation. When you learn to code, you stop being a gatekeeper and start being a co-creator of quality.

Manual testing has its place, but it doesn't scale. As feature velocity increases, teams need engineers who can write automated checks that run in CI/CD pipelines, catch regressions within minutes, and provide meaningful feedback to developers before a single line hits production.

Learning Java (or Python, or JavaScript) opens doors that were previously closed. You can contribute to the automation framework itself, fix flaky tests, review pull requests, and collaborate directly with developers on testability improvements.

CI/CD integration is where the real leverage is. When your tests run automatically on every commit, quality becomes a continuous property of the codebase — not a phase at the end of a sprint. You become the engineer who wired that safety net, and that matters.

Code reviews are another hidden benefit. When you understand the code, you can review it with a tester's eye — spotting edge cases, missing error handling, and untested branches that no one else noticed.

Start small: automate one repetitive test case this week. Then another. Within months, you'll have a portfolio of automation that speaks louder than any manual test report ever could.

The path from QA to SDET is built one function at a time.`,
    category: "Career",
    publishedAt: "15 Jan 2025",
    tags: ["SDET", "Automation", "Career Growth"],
    isPublished: true
  },
  {
    id: "blog-2",
    title: "Selenium vs. Playwright: A QA Engineer's Perspective",
    excerpt: "Two automation titans, one decision. After building real-world test frameworks with both, here's an honest comparison of Selenium and Playwright — covering speed, reliability, browser support, and when to choose each.",
    content: `I've spent months building production test suites with both Selenium and Playwright. Here's what I've learned from the trenches.

Selenium's longevity is its strength. It has been around since 2004, which means it has the broadest browser support (including IE legacy environments), the largest community, and the most integrations with CI/CD tools. If your company runs Java or has a mature Selenium Grid, the switching cost to Playwright is real.

But Playwright has momentum, and for good reason. The auto-wait mechanism alone eliminates entire categories of flaky tests. Instead of manually adding Thread.sleep() or explicit waits, Playwright waits for elements to be actionable before interacting. This leads to dramatically more stable test runs.

Speed is another differentiator. Playwright's parallelism is built in at the test level. Selenium can parallelize too (via TestNG or JUnit), but it requires more configuration effort.

Browser support: Playwright supports Chromium, Firefox, and WebKit out of the box. Selenium supports the same plus Safari and IE. For most modern web apps, Playwright's coverage is sufficient.

The WebDriver protocol matters for architecture. Selenium uses the WebDriver protocol (W3C standard), which means it works with real browser drivers. Playwright uses its own CDP-based communication layer, which is faster but less interoperable with some enterprise tools.

My recommendation: if you're starting a new project and don't have legacy constraints, Playwright is the pragmatic choice. If you're maintaining an existing Selenium suite, invest in improving it rather than rewriting it — unless flakiness is a persistent, team-wide problem.

The best automation tool is the one your team will actually maintain.`,
    category: "Testing",
    publishedAt: "28 Feb 2025",
    tags: ["Selenium", "Playwright", "Automation"],
    isPublished: true
  },
  {
    id: "blog-3",
    title: "Building a REST API Test Framework from Scratch",
    excerpt: "A step-by-step guide to designing a reusable, maintainable REST API test framework using RestAssured and Java. Covers test data management, response validation, reporting, and CI/CD integration.",
    content: `Building a REST API test framework from scratch taught me more about software architecture than any course ever did. Here's how I approached it.

The first decision is the HTTP client. RestAssured (Java) is my go-to for JVM projects — it has a fluent DSL, excellent JSON/XML support, and integrates cleanly with TestNG and JUnit. If you're in a JavaScript environment, supertest or axios + Jest work well.

Layering the framework matters. I use three layers: the HTTP client layer (raw requests/responses), the service layer (domain-specific methods like createUser() or placeOrder()), and the test layer (the actual test classes). This separation makes tests readable and the framework extensible.

Test data management is where most frameworks break down. Hardcoded test data leads to brittle tests. Instead, I create test data factories that generate unique, isolated data for each test run. This enables parallel execution without data collisions.

Schema validation is underrated. Using JSON Schema assertions (or Pojo deserialization) catches contract breaks before they reach integration. I validate every response against a schema, not just spot-checking fields.

Reporting is how you sell testing to non-testers. Allure Reports transforms raw TestNG output into beautiful, stakeholder-friendly reports with request/response logs, screenshots, and pass/fail history. Setting it up takes a day but pays dividends for years.

CI/CD integration completes the loop. Running API tests in a GitHub Actions pipeline on every pull request means no one can merge code that breaks the contract. Add Slack or Teams notifications and your team gets instant feedback without monitoring dashboards.

Start with one endpoint, build the pattern right, then scale.`,
    category: "Testing",
    publishedAt: "10 Mar 2025",
    tags: ["API Testing", "RestAssured", "Java"],
    isPublished: true
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
  },
  Career: {
    badge: "bg-accent/10 text-accent border-accent/25",
    dot: "bg-accent"
  },
  Testing: {
    badge: "bg-primary/10 text-primary border-primary/25",
    dot: "bg-primary"
  },
  General: {
    badge: "bg-muted text-muted-foreground border-border/30",
    dot: "bg-muted-foreground"
  }
};
function categoryStyle(cat) {
  return CATEGORY_STYLES[cat] ?? {
    badge: "bg-muted text-muted-foreground border-border/30",
    dot: "bg-muted-foreground"
  };
}
function ReadMoreModal({
  post,
  onClose
}) {
  const style = categoryStyle(post.category);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "dialog",
    {
      "data-ocid": "blog.read_more.dialog",
      open: true,
      className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent border-0 max-w-none max-h-none w-full h-full m-0",
      "aria-labelledby": "readmore-title",
      onClick: (e) => {
        if (e.target === e.currentTarget) onClose();
      },
      onKeyDown: (e) => {
        if (e.key === "Escape") onClose();
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            className: "absolute inset-0 bg-background/80 backdrop-blur-sm"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95, y: 20 },
            animate: { opacity: 1, scale: 1, y: 0 },
            exit: { opacity: 0, scale: 0.95, y: 20 },
            transition: { duration: 0.25, ease: "easeOut" },
            className: "relative z-10 w-full max-w-2xl max-h-[85vh] flex flex-col bg-card border border-border/70 rounded-2xl shadow-[0_0_60px_rgba(56,189,248,0.12)] overflow-hidden",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `h-0.5 w-full ${style.dot} opacity-70 flex-shrink-0`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 p-6 pb-4 flex-shrink-0 border-b border-border/40", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `text-xs font-medium px-2.5 py-1 rounded-full border ${style.badge}`,
                        children: post.category
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: post.publishedAt })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h2",
                    {
                      id: "readmore-title",
                      className: "font-display font-bold text-xl text-foreground leading-snug",
                      children: post.title
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "blog.read_more.close_button",
                    onClick: onClose,
                    className: "flex-shrink-0 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50",
                    "aria-label": "Close article",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-6 pt-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed italic border-l-2 border-accent/40 pl-4 mb-6", children: post.excerpt }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground/90 text-sm leading-relaxed space-y-4", children: (post.content ?? "").split("\n").reduce(
                  (acc, line, i) => {
                    const trimmed = line.trim();
                    acc.push({
                      key: trimmed ? `${i}-${trimmed.slice(0, 12)}` : `gap-${i}`,
                      text: trimmed,
                      blank: !trimmed
                    });
                    return acc;
                  },
                  []
                ).map(
                  ({ key, text, blank }) => blank ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2" }, key) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: text }, key)
                ) }),
                post.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mt-8 pt-5 border-t border-border/40", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-3.5 h-3.5 text-muted-foreground flex-shrink-0" }),
                  post.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "text-xs text-muted-foreground bg-muted/60 px-2.5 py-1 rounded-full",
                      children: [
                        "#",
                        tag
                      ]
                    },
                    tag
                  ))
                ] })
              ] })
            ]
          }
        )
      ]
    }
  ) });
}
function BlogCard({
  post,
  index,
  onReadMore
}) {
  const style = categoryStyle(post.category);
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `text-xs font-medium px-2.5 py-1 rounded-full border ${style.badge}`,
              children: post.category
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-base text-foreground leading-snug group-hover:text-accent/90 transition-colors duration-200", children: post.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed flex-1 line-clamp-3", children: post.excerpt }),
          post.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5 pt-3 border-t border-border/40", children: [
            post.tags.slice(0, 3).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "text-xs text-muted-foreground bg-muted/60 px-2 py-0.5 rounded-full",
                children: [
                  "#",
                  tag
                ]
              },
              tag
            )),
            post.tags.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground bg-muted/60 px-2 py-0.5 rounded-full", children: [
              "+",
              post.tags.length - 3
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-auto pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3" }),
              post.publishedAt
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                "data-ocid": `blog.read_more.${index + 1}`,
                onClick: () => onReadMore(post),
                className: "text-xs font-medium text-accent hover:text-accent/80 inline-flex items-center gap-1 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/50 rounded",
                children: [
                  "Read More ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3" })
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function BlogSection() {
  const [readMorePost, setReadMorePost] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "blog",
        "data-ocid": "blog.section",
        className: "py-24 bg-background",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              className: "mb-16",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent text-sm font-medium uppercase tracking-widest mb-3", children: "Insights" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground", children: [
                  "From the ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Blog" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-4 max-w-xl text-base", children: "Practical QA engineering insights — automation strategies, API testing patterns, and CI/CD for quality teams." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: BLOG_POSTS.map((post, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            BlogCard,
            {
              post,
              index: i,
              onReadMore: setReadMorePost
            },
            post.id
          )) }),
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm text-center sm:text-left", children: "Follow along for more QA engineering deep-dives:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "https://www.linkedin.com/in/soumalya-hajra/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "data-ocid": "blog.linkedin.link",
                    className: "text-accent text-sm font-medium hover:underline inline-flex items-center gap-1.5 flex-shrink-0 transition-smooth",
                    children: [
                      "Follow on LinkedIn ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                    ]
                  }
                )
              ]
            }
          )
        ] })
      }
    ),
    readMorePost && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ReadMoreModal,
      {
        post: readMorePost,
        onClose: () => setReadMorePost(null)
      }
    )
  ] });
}
export {
  BlogSection as default
};
