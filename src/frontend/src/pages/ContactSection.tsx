import { Button } from "@/components/ui/button";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";

const CONTACT_DETAILS = [
  {
    icon: User,
    label: "Full Name",
    value: "Soumalya Hajra",
    href: undefined,
  },
  {
    icon: Mail,
    label: "Email",
    value: "soumalya.uchalan@gmail.com",
    href: "mailto:soumalya.uchalan@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7001923425",
    href: undefined,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India · Open to Relocation",
    href: undefined,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/soumalya-hajra",
    href: "https://www.linkedin.com/in/soumalya-hajra/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/SoumalyA007",
    href: "https://github.com/SoumalyA007",
  },
];

const SOCIAL_LINKS = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/SoumalyA007",
    ocid: "contact.github.link",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/soumalya-hajra/",
    ocid: "contact.linkedin.link",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:soumalya.uchalan@gmail.com",
    ocid: "contact.email.link",
  },
];

export default function ContactSection() {
  return (
    <>
      <section
        id="contact"
        data-ocid="contact.section"
        className="py-24 bg-background"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Section heading */}
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-medium uppercase tracking-widest mb-2">
              Contact
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
              Get <span className="text-gradient">In Touch</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Open to SDET roles, automation consulting, and collaborations.
              Reach out — I respond within 24 hours.
            </p>
          </div>

          {/* Contact card */}
          <div
            data-ocid="contact.card"
            className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Card header strip */}
            <div className="bg-accent/10 border-b border-border/40 px-8 py-5 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              <p className="text-accent font-semibold text-sm uppercase tracking-widest">
                Contact Information
              </p>
            </div>

            {/* Detail rows */}
            <div className="divide-y divide-border/30">
              {CONTACT_DETAILS.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-5 px-8 py-5 group hover:bg-accent/5 transition-smooth"
                >
                  {/* Icon bubble */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                    <item.icon
                      className="w-4.5 h-4.5 text-accent"
                      style={{ width: "18px", height: "18px" }}
                    />
                  </div>

                  {/* Label + value */}
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("mailto") ? undefined : "_blank"
                        }
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-foreground hover:text-accent transition-smooth break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground break-all">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Card footer — socials + resume */}
            <div className="bg-muted/20 border-t border-border/40 px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
              {/* Social icon pills */}
              <div className="flex items-center gap-2">
                <p className="text-xs text-muted-foreground mr-2">Find me on</p>
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    data-ocid={s.ocid}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-smooth"
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

              {/* To enable downloads: replace src/frontend/public/resume.pdf with your actual resume PDF */}
              <a
                href="/resume.pdf"
                download
                data-ocid="contact.resume.download_button"
              >
                <Button
                  variant="outline"
                  className="btn-glow border-accent/60 text-accent font-semibold text-sm hover:bg-accent/10 transition-smooth gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </a>
            </div>
          </div>

          {/* Availability badge */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-card border border-border/60 text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              Currently open to SDET opportunities
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        data-ocid="footer.section"
        className="bg-card border-t border-border/40 py-8"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-3">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Soumalya Hajra · Built with passion for
            quality engineering
          </p>
        </div>
      </footer>
    </>
  );
}
