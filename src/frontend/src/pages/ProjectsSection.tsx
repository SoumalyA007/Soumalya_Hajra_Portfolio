import { Badge } from "@/components/ui/badge";
import type { GithubRepo, Project } from "@/types/portfolio";
import {
  Code,
  ExternalLink,
  GitFork,
  Github,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const FEATURED_PROJECTS: Project[] = [
  {
    id: "opencart-automation",
    title: "OpenCart Automation Framework",
    description:
      "A production-grade Selenium + TestNG automation framework using Page Object Model, covering critical e-commerce user journeys from login to checkout.",
    highlights: [
      "Automated critical user journeys — login, search, cart, checkout",
      "Reduced regression effort significantly vs manual baseline",
      "CI/CD integrated with Jenkins — auto-triggered on every commit",
      "Page Object Model design for maximum maintainability",
    ],
    techStack: ["Selenium", "TestNG", "Java", "Jenkins", "Maven", "POM"],
    githubUrl: "https://github.com/SoumalyA007",
  },
  {
    id: "api-automation",
    title: "REST API Automation Framework",
    description:
      "Comprehensive RestAssured framework testing authentication, cart, and payment APIs with reusable builder patterns and detailed defect tracking.",
    highlights: [
      "Tested numerous endpoints across auth, cart, and payments modules",
      "Reusable request builder greatly reduced test creation time",
      "Identified multiple critical API defects before UI integration",
      "JSON schema validation and response time assertions",
    ],
    techStack: ["RestAssured", "Java", "TestNG", "Postman", "JSON Schema"],
    githubUrl: "https://github.com/SoumalyA007",
  },
];

interface MetricBadge {
  label: string;
  value: string;
  icon: React.ElementType;
}

const PROJECT_METRICS: Record<string, MetricBadge[]> = {
  "opencart-automation": [
    { value: "Major", label: "Less Regression Effort", icon: TrendingUp },
    { value: "CI/CD", label: "Jenkins Integrated", icon: Zap },
  ],
  "api-automation": [
    { value: "Faster", label: "Test Creation Time", icon: TrendingUp },
    { value: "Several", label: "Critical Defects Found", icon: Zap },
  ],
};

function FeaturedProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const metrics = PROJECT_METRICS[project.id] ?? [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      data-ocid={`projects.item.${index + 1}`}
      className="relative bg-card border border-border/60 rounded-2xl overflow-hidden flex flex-col gap-0 group hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_28px_rgba(56,189,248,0.18)] hover:-translate-y-1"
    >
      {/* Accent top bar */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display font-semibold text-lg text-foreground leading-snug group-hover:text-accent transition-colors duration-200">
              {project.title}
            </h3>
          </div>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid={`projects.github.link.${index + 1}`}
              aria-label={`View ${project.title} on GitHub`}
              className="flex-shrink-0 text-muted-foreground hover:text-accent transition-smooth p-1.5 rounded-lg hover:bg-accent/10"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>

        {/* Impact metrics */}
        {metrics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {metrics.map((m) => (
              <div
                key={m.value}
                className="flex items-center gap-1.5 bg-accent/10 border border-accent/25 rounded-full px-3 py-1"
              >
                <m.icon className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                <span className="text-accent font-bold text-sm">{m.value}</span>
                <span className="text-muted-foreground text-xs">{m.label}</span>
              </div>
            ))}
          </div>
        )}

        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-2">
          {project.highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2.5 text-sm text-foreground/80"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/40">
          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function GithubRepoCard({
  repo,
  index,
}: {
  repo: GithubRepo;
  index: number;
}) {
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      data-ocid={`projects.github_repo.item.${index + 1}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-card border border-border/50 rounded-xl p-4 flex flex-col gap-2.5 hover:border-accent/40 hover:shadow-[0_0_16px_rgba(56,189,248,0.12)] hover:-translate-y-0.5 transition-all duration-300 group"
    >
      <div className="flex items-center gap-2.5">
        <Code className="w-4 h-4 text-accent flex-shrink-0" />
        <span className="font-medium text-sm text-foreground truncate min-w-0 group-hover:text-accent transition-colors">
          {repo.name}
        </span>
        <ExternalLink className="w-3 h-3 text-muted-foreground ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      {repo.description && (
        <p className="text-muted-foreground text-xs line-clamp-2 leading-relaxed">
          {repo.description}
        </p>
      )}
      <div className="flex items-center gap-3 text-xs text-muted-foreground mt-auto">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-accent" />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Star className="w-3 h-3" />
          {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <GitFork className="w-3 h-3" />
          {repo.forks_count}
        </span>
      </div>
    </motion.a>
  );
}

function RepoSkeleton() {
  return (
    <div className="bg-card border border-border/40 rounded-xl p-4 flex flex-col gap-3 animate-pulse">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-muted rounded" />
        <div className="h-3.5 bg-muted rounded w-2/3" />
      </div>
      <div className="h-3 bg-muted rounded w-full" />
      <div className="h-3 bg-muted rounded w-4/5" />
      <div className="flex gap-3 mt-1">
        <div className="h-2.5 bg-muted rounded w-12" />
        <div className="h-2.5 bg-muted rounded w-8" />
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/SoumalyA007/repos?sort=updated&per_page=6",
    )
      .then((r) => {
        if (!r.ok) throw new Error("GitHub API error");
        return r.json();
      })
      .then((data: GithubRepo[]) => {
        if (Array.isArray(data)) {
          setRepos(data.slice(0, 6));
        } else {
          setFetchError(true);
        }
      })
      .catch(() => {
        setFetchError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section
      id="projects"
      data-ocid="projects.section"
      className="py-24 bg-muted/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">
            Work
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-base">
            Real-world automation frameworks with measurable impact on quality
            and delivery speed.
          </p>
        </motion.div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {FEATURED_PROJECTS.map((p, i) => (
            <FeaturedProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* GitHub repos divider */}
        <div className="section-divider mb-10" />

        {/* More on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-1.5 bg-accent/10 rounded-lg border border-accent/20">
              <Github className="w-4 h-4 text-accent" />
            </div>
            <h3 className="font-display font-semibold text-xl text-foreground">
              More on GitHub
            </h3>
            <a
              href="https://github.com/SoumalyA007"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="projects.github.profile_link"
              className="ml-auto text-xs text-accent hover:underline flex items-center gap-1 transition-smooth"
            >
              View all
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {loading ? (
            <div
              data-ocid="projects.github.loading_state"
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoSkeleton key={n} />
              ))}
            </div>
          ) : fetchError ? (
            <div
              data-ocid="projects.github.error_state"
              className="flex flex-col items-center justify-center py-12 gap-3 bg-card border border-border/40 rounded-xl text-center px-6"
            >
              <Github className="w-8 h-8 text-muted-foreground/50" />
              <p className="text-muted-foreground text-sm">
                Unable to load repos right now.
              </p>
              <a
                href="https://github.com/SoumalyA007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-sm hover:underline flex items-center gap-1"
              >
                View repositories on GitHub
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ) : repos.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {repos.map((repo, i) => (
                <GithubRepoCard key={repo.id} repo={repo} index={i} />
              ))}
            </div>
          ) : (
            <div
              data-ocid="projects.github.empty_state"
              className="text-center py-8 text-muted-foreground text-sm"
            >
              <a
                href="https://github.com/SoumalyA007"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                View all repositories on GitHub →
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
