import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, B as Button } from "./index-SpweSjyp.js";
import { M as MapPin } from "./map-pin-DpZTXDp7.js";
import { G as Github } from "./github-C7hiizCa.js";
import { L as Linkedin, M as Mail } from "./mail-CaANLlqJ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
];
const ArrowDown = createLucideIcon("arrow-down", __iconNode);
function HeroSection() {
  const canvasRef = reactExports.useRef(null);
  const scrollToAbout = () => {
    var _a;
    (_a = document.getElementById("about")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  };
  reactExports.useEffect(() => {
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
    const particles = [];
    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.4,
        alpha: Math.random() * 0.45 + 0.08
      });
    }
    let animId;
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "home",
      "data-ocid": "hero.section",
      className: "relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "canvas",
          {
            ref: canvasRef,
            className: "absolute inset-0 w-full h-full pointer-events-none opacity-60"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 55% 45% at 65% 50%, rgba(56,189,248,0.09) 0%, transparent 70%)"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-0 left-0 right-0 h-32 pointer-events-none",
            style: {
              background: "linear-gradient(to bottom, transparent, oklch(var(--background)))"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-center lg:text-left order-2 lg:order-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-medium mb-5 fade-in",
                style: { animationDelay: "0s" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-accent animate-pulse" }),
                  "Open to SDET Opportunities"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h1",
              {
                className: "font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4 slide-up",
                style: { animationDelay: "0.1s" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "QA Engineer Building " }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Scalable Automation" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: " & Reliable Systems" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-muted-foreground text-lg sm:text-xl leading-relaxed mb-3 max-w-xl mx-auto lg:mx-0 slide-up",
                style: { animationDelay: "0.2s" },
                children: "Specializing in Selenium, API Testing, and CI/CD-driven quality engineering"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground mb-8 slide-up",
                style: { animationDelay: "0.25s" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-accent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "India" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent/50", children: "·" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent/80 font-medium", children: "Open to Relocation" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex flex-wrap gap-3 justify-center lg:justify-start mb-10 slide-up",
                style: { animationDelay: "0.3s" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      "data-ocid": "hero.view_projects.button",
                      variant: "default",
                      size: "lg",
                      className: "btn-glow bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 transition-smooth",
                      onClick: () => {
                        var _a;
                        return (_a = document.getElementById("projects")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                      },
                      children: "View Projects"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "/resume.pdf",
                      download: true,
                      "data-ocid": "hero.download_resume.button",
                      className: "inline-flex items-center gap-2 px-8 py-2.5 rounded-md border border-accent/40 text-accent bg-accent/10 hover:bg-accent/20 font-semibold text-sm transition-smooth btn-glow",
                      children: "Download Resume"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-3 justify-center lg:justify-start slide-up",
                style: { animationDelay: "0.4s" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "https://github.com/SoumalyA007",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "data-ocid": "hero.github.link",
                      "aria-label": "GitHub",
                      className: "w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 transition-smooth",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "w-5 h-5" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "https://www.linkedin.com/in/soumalya-hajra/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "data-ocid": "hero.linkedin.link",
                      "aria-label": "LinkedIn",
                      className: "w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 transition-smooth",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "w-5 h-5" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "mailto:soumalya.uchalan@gmail.com",
                      "data-ocid": "hero.email.link",
                      "aria-label": "Email",
                      className: "w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 transition-smooth",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-5 h-5" })
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 order-1 lg:order-2 slide-in-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex flex-col items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute rounded-full animate-pulse-glow",
                style: {
                  width: "176px",
                  height: "176px",
                  background: "radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)",
                  border: "1px solid rgba(56,189,248,0.25)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative rounded-full overflow-hidden",
                style: {
                  width: "140px",
                  height: "140px",
                  boxShadow: "0 0 0 3px rgba(56,189,248,0.5), 0 0 24px rgba(56,189,248,0.4), 0 0 48px rgba(56,189,248,0.15)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute inset-0 rounded-full z-10 pointer-events-none",
                      style: {
                        background: "radial-gradient(circle at 40% 35%, rgba(56,189,248,0.12) 0%, transparent 60%)"
                      },
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      viewBox: "0 0 140 140",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "w-full h-full",
                      "aria-label": "Soumalya Hajra — QA Engineer",
                      role: "img",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "140", height: "140", fill: "oklch(0.13 0.04 240)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "ellipse",
                          {
                            cx: "70",
                            cy: "115",
                            rx: "36",
                            ry: "22",
                            fill: "oklch(0.18 0.06 240)"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "70", cy: "60", r: "26", fill: "oklch(0.72 0.08 40)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            d: "M50 102 Q70 90 90 102",
                            stroke: "rgba(56,189,248,0.35)",
                            strokeWidth: "1.5",
                            fill: "none"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "circle",
                          {
                            cx: "70",
                            cy: "70",
                            r: "65",
                            fill: "none",
                            stroke: "rgba(56,189,248,0.18)",
                            strokeWidth: "1"
                          }
                        )
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1.5 rounded-full bg-card border border-accent/40 text-xs font-semibold text-accent",
                style: {
                  boxShadow: "0 0 12px rgba(56,189,248,0.2)"
                },
                children: "1+ Year Experience"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full bg-card border border-border/50 text-xs font-medium text-muted-foreground", children: "QA → SDET" })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: scrollToAbout,
            "data-ocid": "hero.scroll_down.button",
            "aria-label": "Scroll to about section",
            className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-accent transition-smooth",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium tracking-wide", children: "Scroll" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { className: "w-4 h-4 animate-bounce" })
            ]
          }
        )
      ]
    }
  );
}
export {
  HeroSection as default
};
