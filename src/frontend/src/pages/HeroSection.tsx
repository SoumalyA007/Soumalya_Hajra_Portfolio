import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  // ── Particle canvas ────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      alpha: number;
    }[] = [];
    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.4,
        alpha: Math.random() * 0.45 + 0.08,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
        ctx.fill();
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.07 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="home"
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
    >
      {/* Animated particle background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
      />

      {/* Radial glow accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 65% 50%, rgba(56,189,248,0.09) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, oklch(var(--background)))",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
          {/* Status badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-medium mb-5 fade-in"
            style={{ animationDelay: "0s" }}
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Open to SDET Opportunities
          </div>

          {/* Headline */}
          <h1
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4 slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-foreground">QA Engineer Building </span>
            <span className="text-gradient">Scalable Automation</span>
            <span className="text-foreground"> &amp; Reliable Systems</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-muted-foreground text-lg sm:text-xl leading-relaxed mb-3 max-w-xl mx-auto lg:mx-0 slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Specializing in Selenium, API Testing, and CI/CD-driven quality
            engineering
          </p>

          {/* Location badge */}
          <div
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground mb-8 slide-up"
            style={{ animationDelay: "0.25s" }}
          >
            <MapPin className="w-4 h-4 text-accent" />
            <span>India</span>
            <span className="text-accent/50">·</span>
            <span className="text-accent/80 font-medium">
              Open to Relocation
            </span>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10 slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              data-ocid="hero.view_projects.button"
              variant="default"
              size="lg"
              className="btn-glow bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 transition-smooth"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </Button>
            {/* To enable downloads: replace src/frontend/public/resume.pdf with your actual resume PDF */}
            <a
              href="/resume.pdf"
              download
              data-ocid="hero.download_resume.button"
              className="inline-flex items-center gap-2 px-8 py-2.5 rounded-md border border-accent/40 text-accent bg-accent/10 hover:bg-accent/20 font-semibold text-sm transition-smooth btn-glow"
            >
              Download Resume
            </a>
          </div>

          {/* Social links */}
          <div
            className="flex items-center gap-3 justify-center lg:justify-start slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="https://github.com/SoumalyA007"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.github.link"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 transition-smooth"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/soumalya-hajra/"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.linkedin.link"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 transition-smooth"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:soumalya.uchalan@gmail.com"
              data-ocid="hero.email.link"
              aria-label="Email"
              className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 transition-smooth"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Static profile avatar column */}
        <div className="flex-shrink-0 order-1 lg:order-2 slide-in-right">
          <div className="relative flex flex-col items-center gap-3">
            <div className="relative flex items-center justify-center">
              {/* Outer pulse ring */}
              <div
                className="absolute rounded-full animate-pulse-glow"
                style={{
                  width: "176px",
                  height: "176px",
                  background:
                    "radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)",
                  border: "1px solid rgba(56,189,248,0.25)",
                }}
              />

              {/* Static avatar container */}
              <div
                className="relative rounded-full overflow-hidden"
                style={{
                  width: "140px",
                  height: "140px",
                  boxShadow:
                    "0 0 0 3px rgba(56,189,248,0.5), 0 0 24px rgba(56,189,248,0.4), 0 0 48px rgba(56,189,248,0.15)",
                }}
              >
                {/* Inner glow */}
                <div
                  className="absolute inset-0 rounded-full z-10 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 40% 35%, rgba(56,189,248,0.12) 0%, transparent 60%)",
                  }}
                  aria-hidden="true"
                />

                {/* Profile photo */}
                <img
                  src="/assets/soumalya_hajra.jpeg"
                  alt="Soumalya Hajra — QA Engineer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Floating badge — experience */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1.5 rounded-full bg-card border border-accent/40 text-xs font-semibold text-accent"
                style={{
                  boxShadow: "0 0 12px rgba(56,189,248,0.2)",
                }}
              >
                1+ Year Experience
              </div>

              {/* Floating badge — role */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full bg-card border border-border/50 text-xs font-medium text-muted-foreground">
                QA → SDET
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={scrollToAbout}
        data-ocid="hero.scroll_down.button"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-accent transition-smooth"
      >
        <span className="text-xs font-medium tracking-wide">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
}
