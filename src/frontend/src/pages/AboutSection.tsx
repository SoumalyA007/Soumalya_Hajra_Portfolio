import { CheckCircle2, ShieldCheck, TrendingDown, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const highlights = [
  "Reduced regression cycles significantly using Selenium automation",
  "Zero critical defects reached production across multiple releases",
  "CI/CD-integrated test pipelines with Jenkins auto-triggering",
  "Numerous API endpoints tested with reusable RestAssured frameworks",
];

const stats = [
  {
    value: "1+",
    label: "Years Experience",
    sublabel: "Manual & Automation QA",
    icon: Zap,
  },
  {
    value: "High",
    label: "Regression Reduction",
    sublabel: "Faster release cycles",
    icon: TrendingDown,
  },
  {
    value: "Zero",
    label: "P1 Defects",
    sublabel: "In production, 6+ sprints",
    icon: ShieldCheck,
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function AboutSection() {
  const { ref: sectionRef, inView } = useInView(0.12);
  const { ref: statsRef, inView: statsInView } = useInView(0.2);

  return (
    <section id="about" data-ocid="about.section" className="py-28 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
            About Me
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
            Turning Quality into a{" "}
            <span className="text-gradient">Competitive Advantage</span>
          </h2>
          <div className="section-divider w-24 mx-auto mt-6" />
        </div>

        {/* Main content grid */}
        <div
          ref={sectionRef}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16"
        >
          {/* Biography */}
          <div
            className="transition-all duration-700 ease-out"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(28px)",
              transitionDelay: "0ms",
            }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Results-driven QA Engineer with{" "}
              <span className="text-accent font-semibold">
                1+ year experience
              </span>{" "}
              in manual and automation testing. I specialize in transforming
              repetitive manual workflows into scalable automation frameworks
              using Selenium and RestAssured.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              I've worked on high-scale e-commerce systems where I reduced
              regression cycles{" "}
              <span className="text-accent font-bold">significantly</span> and
              ensured{" "}
              <span className="text-accent font-bold">
                zero critical defects
              </span>{" "}
              reached production across multiple releases.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I focus on building reliable, maintainable test systems integrated
              with CI/CD pipelines — aligning quality engineering with
              fast-paced product delivery.
            </p>

            {/* Decorative accent bar */}
            <div
              className="mt-8 h-1 rounded-full w-20"
              style={{
                background:
                  "linear-gradient(to right, oklch(var(--accent)), transparent)",
              }}
            />
          </div>

          {/* Highlights checklist */}
          <div
            className="space-y-3"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
              transitionDelay: "150ms",
            }}
          >
            {highlights.map((item, idx) => (
              <div
                key={item}
                data-ocid={`about.highlight.item.${idx + 1}`}
                className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50 card-glow"
                style={{
                  transitionDelay: `${150 + idx * 60}ms`,
                }}
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-foreground/90 text-sm leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stat cards */}
        <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                data-ocid={`about.stat.item.${idx + 1}`}
                className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border/50 overflow-hidden card-glow"
                style={{
                  opacity: statsInView ? 1 : 0,
                  transform: statsInView ? "translateY(0)" : "translateY(32px)",
                  transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
                  transitionDelay: `${idx * 100}ms`,
                }}
              >
                {/* Background glow blob */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-16 rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse, rgba(56,189,248,0.12) 0%, transparent 70%)",
                  }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: "rgba(56,189,248,0.1)",
                    border: "1px solid rgba(56,189,248,0.2)",
                  }}
                >
                  <Icon className="w-6 h-6 text-accent" />
                </div>

                {/* Value */}
                <div className="font-display font-bold text-4xl sm:text-5xl text-accent mb-1 leading-none">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="font-semibold text-foreground text-base mb-1">
                  {stat.label}
                </div>

                {/* Sublabel */}
                <div className="text-muted-foreground text-xs">
                  {stat.sublabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
