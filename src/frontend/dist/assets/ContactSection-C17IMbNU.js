import { c as createLucideIcon, j as jsxRuntimeExports, B as Button } from "./index-BPyCoULN.js";
import { M as Mail, L as Linkedin } from "./mail-zjXqF5HM.js";
import { M as MapPin } from "./map-pin-BprGG47i.js";
import { G as Github } from "./github-BNtYHhgd.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode$2);
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
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
const CONTACT_DETAILS = [
  {
    icon: User,
    label: "Full Name",
    value: "Soumalya Hajra",
    href: void 0
  },
  {
    icon: Mail,
    label: "Email",
    value: "soumalya.uchalan@gmail.com",
    href: "mailto:soumalya.uchalan@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7001923425",
    href: void 0
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India · Open to Relocation",
    href: void 0
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/soumalya-hajra",
    href: "https://www.linkedin.com/in/soumalya-hajra/"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/SoumalyA007",
    href: "https://github.com/SoumalyA007"
  }
];
const SOCIAL_LINKS = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/SoumalyA007",
    ocid: "contact.github.link"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/soumalya-hajra/",
    ocid: "contact.linkedin.link"
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:soumalya.uchalan@gmail.com",
    ocid: "contact.email.link"
  }
];
function ContactSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "contact",
        "data-ocid": "contact.section",
        className: "py-24 bg-background",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent text-sm font-medium uppercase tracking-widest mb-2", children: "Contact" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-3xl sm:text-4xl text-foreground", children: [
              "Get ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "In Touch" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3 max-w-xl mx-auto", children: "Open to SDET roles, automation consulting, and collaborations. Reach out — I respond within 24 hours." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-ocid": "contact.card",
              className: "bg-card border border-border/60 rounded-2xl overflow-hidden shadow-lg",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-accent/10 border-b border-border/40 px-8 py-5 flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-accent animate-pulse" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent font-semibold text-sm uppercase tracking-widest", children: "Contact Information" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border/30", children: CONTACT_DETAILS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-5 px-8 py-5 group hover:bg-accent/5 transition-smooth",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        item.icon,
                        {
                          className: "w-4.5 h-4.5 text-accent",
                          style: { width: "18px", height: "18px" }
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wider mb-0.5", children: item.label }),
                        item.href ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "a",
                          {
                            href: item.href,
                            target: item.href.startsWith("mailto") ? void 0 : "_blank",
                            rel: "noopener noreferrer",
                            className: "text-sm font-medium text-foreground hover:text-accent transition-smooth break-all",
                            children: item.value
                          }
                        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground break-all", children: item.value })
                      ] })
                    ]
                  },
                  item.label
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/20 border-t border-border/40 px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mr-2", children: "Find me on" }),
                    SOCIAL_LINKS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: s.href,
                        target: s.href.startsWith("mailto") ? void 0 : "_blank",
                        rel: "noopener noreferrer",
                        "data-ocid": s.ocid,
                        "aria-label": s.label,
                        className: "w-9 h-9 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-smooth",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-4 h-4" })
                      },
                      s.label
                    ))
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "/resume.pdf",
                      download: true,
                      "data-ocid": "contact.resume.download_button",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          variant: "outline",
                          className: "btn-glow border-accent/60 text-accent font-semibold text-sm hover:bg-accent/10 transition-smooth gap-2",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
                            "Download Resume"
                          ]
                        }
                      )
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-card border border-border/60 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" }),
            "Currently open to SDET opportunities"
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "footer",
      {
        "data-ocid": "footer.section",
        className: "bg-card border-t border-border/40 py-8",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Soumalya Hajra · Built with passion for quality engineering"
        ] }) })
      }
    )
  ] });
}
export {
  ContactSection as default
};
