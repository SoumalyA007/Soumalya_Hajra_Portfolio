import type { BlogPost } from "@/types/portfolio";
import { ArrowRight, BookOpen, Calendar, Tag, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

// ─── Hardcoded blog posts ────────────────────────────────────────────────────

const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "Why Every QA Engineer Should Learn to Code",
    excerpt:
      "Coding skills are the bridge between manual testing and true SDET mastery. Discover how writing code elevates your testing career, enables automation at scale, and makes you indispensable to any engineering team.",
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
    isPublished: true,
  },
  {
    id: "blog-2",
    title: "Selenium vs. Playwright: A QA Engineer's Perspective",
    excerpt:
      "Two automation titans, one decision. After building real-world test frameworks with both, here's an honest comparison of Selenium and Playwright — covering speed, reliability, browser support, and when to choose each.",
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
    isPublished: true,
  },
  {
    id: "blog-3",
    title: "Building a REST API Test Framework from Scratch",
    excerpt:
      "A step-by-step guide to designing a reusable, maintainable REST API test framework using RestAssured and Java. Covers test data management, response validation, reporting, and CI/CD integration.",
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
    isPublished: true,
  },
];

// ─── Category styles ─────────────────────────────────────────────────────────

const CATEGORY_STYLES: Record<string, { badge: string; dot: string }> = {
  Automation: {
    badge: "bg-accent/10 text-accent border-accent/25",
    dot: "bg-accent",
  },
  "API Testing": {
    badge: "bg-primary/10 text-primary border-primary/25",
    dot: "bg-primary",
  },
  "CI/CD": {
    badge: "bg-secondary text-secondary-foreground border-border/40",
    dot: "bg-muted-foreground",
  },
  Career: {
    badge: "bg-accent/10 text-accent border-accent/25",
    dot: "bg-accent",
  },
  Testing: {
    badge: "bg-primary/10 text-primary border-primary/25",
    dot: "bg-primary",
  },
  General: {
    badge: "bg-muted text-muted-foreground border-border/30",
    dot: "bg-muted-foreground",
  },
};

function categoryStyle(cat: string) {
  return (
    CATEGORY_STYLES[cat] ?? {
      badge: "bg-muted text-muted-foreground border-border/30",
      dot: "bg-muted-foreground",
    }
  );
}

// ─── ReadMoreModal ────────────────────────────────────────────────────────────

function ReadMoreModal({
  post,
  onClose,
}: { post: BlogPost; onClose: () => void }) {
  const style = categoryStyle(post.category);
  return (
    <AnimatePresence>
      <dialog
        data-ocid="blog.read_more.dialog"
        open
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent border-0 max-w-none max-h-none w-full h-full m-0"
        aria-labelledby="readmore-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        onKeyDown={(e) => {
          if (e.key === "Escape") onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative z-10 w-full max-w-2xl max-h-[85vh] flex flex-col bg-card border border-border/70 rounded-2xl shadow-[0_0_60px_rgba(56,189,248,0.12)] overflow-hidden"
        >
          <div
            className={`h-0.5 w-full ${style.dot} opacity-70 flex-shrink-0`}
          />
          <div className="flex items-start justify-between gap-4 p-6 pb-4 flex-shrink-0 border-b border-border/40">
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full border ${style.badge}`}
                >
                  {post.category}
                </span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  <span>{post.publishedAt}</span>
                </div>
              </div>
              <h2
                id="readmore-title"
                className="font-display font-bold text-xl text-foreground leading-snug"
              >
                {post.title}
              </h2>
            </div>
            <button
              type="button"
              data-ocid="blog.read_more.close_button"
              onClick={onClose}
              className="flex-shrink-0 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6 pt-5">
            <p className="text-muted-foreground text-sm leading-relaxed italic border-l-2 border-accent/40 pl-4 mb-6">
              {post.excerpt}
            </p>
            <div className="text-foreground/90 text-sm leading-relaxed space-y-4">
              {(post.content ?? "")
                .split("\n")
                .reduce<{ key: string; text: string; blank: boolean }[]>(
                  (acc, line, i) => {
                    const trimmed = line.trim();
                    acc.push({
                      key: trimmed
                        ? `${i}-${trimmed.slice(0, 12)}`
                        : `gap-${i}`,
                      text: trimmed,
                      blank: !trimmed,
                    });
                    return acc;
                  },
                  [],
                )
                .map(({ key, text, blank }) =>
                  blank ? (
                    <div key={key} className="h-2" />
                  ) : (
                    <p key={key}>{text}</p>
                  ),
                )}
            </div>
            {post.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mt-8 pt-5 border-t border-border/40">
                <Tag className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-muted-foreground bg-muted/60 px-2.5 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </dialog>
    </AnimatePresence>
  );
}

// ─── BlogCard ─────────────────────────────────────────────────────────────────

function BlogCard({
  post,
  index,
  onReadMore,
}: {
  post: BlogPost;
  index: number;
  onReadMore: (post: BlogPost) => void;
}) {
  const style = categoryStyle(post.category);
  return (
    <motion.article
      data-ocid={`blog.item.${index + 1}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="bg-card border border-border/60 rounded-2xl overflow-hidden flex flex-col group hover:border-accent/30 hover:shadow-[0_0_20px_rgba(56,189,248,0.1)] transition-all duration-300"
    >
      <div className={`h-0.5 w-full ${style.dot} opacity-60`} />
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full border ${style.badge}`}
          >
            {post.category}
          </span>
        </div>
        <h3 className="font-display font-semibold text-base text-foreground leading-snug group-hover:text-accent/90 transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed flex-1 line-clamp-3">
          {post.excerpt}
        </p>
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs text-muted-foreground bg-muted/60 px-2 py-0.5 rounded-full"
              >
                #{tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="text-xs text-muted-foreground bg-muted/60 px-2 py-0.5 rounded-full">
                +{post.tags.length - 3}
              </span>
            )}
          </div>
        )}
        <div className="flex items-center justify-between mt-auto pt-1">
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {post.publishedAt}
          </span>
          <button
            type="button"
            data-ocid={`blog.read_more.${index + 1}`}
            onClick={() => onReadMore(post)}
            className="text-xs font-medium text-accent hover:text-accent/80 inline-flex items-center gap-1 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/50 rounded"
          >
            Read More <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

// ─── BlogSection ──────────────────────────────────────────────────────────────

export default function BlogSection() {
  const [readMorePost, setReadMorePost] = useState<BlogPost | null>(null);

  return (
    <>
      <section
        id="blog"
        data-ocid="blog.section"
        className="py-24 bg-background"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">
              Insights
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
              From the <span className="text-gradient">Blog</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl text-base">
              Practical QA engineering insights — automation strategies, API
              testing patterns, and CI/CD for quality teams.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, i) => (
              <BlogCard
                key={post.id}
                post={post}
                index={i}
                onReadMore={setReadMorePost}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 p-6 bg-card border border-border/50 rounded-2xl"
          >
            <BookOpen className="w-5 h-5 text-accent flex-shrink-0" />
            <p className="text-muted-foreground text-sm text-center sm:text-left">
              Follow along for more QA engineering deep-dives:
            </p>
            <a
              href="https://www.linkedin.com/in/soumalya-hajra/"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="blog.linkedin.link"
              className="text-accent text-sm font-medium hover:underline inline-flex items-center gap-1.5 flex-shrink-0 transition-smooth"
            >
              Follow on LinkedIn <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </section>

      {readMorePost && (
        <ReadMoreModal
          post={readMorePost}
          onClose={() => setReadMorePost(null)}
        />
      )}
    </>
  );
}
