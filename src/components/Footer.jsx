import { Globe, Mail, Send } from "lucide-react";
import Logo from "./Logo";

const footerLinks = [
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "Visit NovaFlow website", href: "#home", icon: Globe },
  { label: "Email NovaFlow", href: "mailto:hello@novaflow.example", icon: Mail },
  { label: "Message NovaFlow", href: "#contact", icon: Send },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-page">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
        <Logo />
        <p className="order-3 text-xs text-muted md:order-2">
          © 2026 NovaFlow. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-5 md:order-3">
          <nav aria-label="Footer" className="flex flex-wrap gap-5">
            {footerLinks.map(({ label, href }) => (
              <a
                className="text-xs font-medium text-body transition hover:text-ink"
                href={href}
                id={label === "Privacy" ? "privacy" : label === "Terms" ? "terms" : undefined}
                key={label}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                aria-label={label}
                className="inline-flex size-9 items-center justify-center rounded-xl border border-line text-muted transition hover:bg-soft hover:text-ink"
                href={href}
                key={label}
              >
                <Icon aria-hidden="true" size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
