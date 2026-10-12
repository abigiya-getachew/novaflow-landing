import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import Button from "./Button";
import Logo from "./Logo";
import { useTheme } from "../theme";

const links = [
  ["Features", "#features"],
  ["How It Works", "#how-it-works"],
  ["Pricing", "#pricing"],
  ["Testimonials", "#testimonials"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-page/90 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <Logo onClick={() => setMenuOpen(false)} />

        <div className="hidden items-center gap-5 xl:flex">
          {links.map(([label, href]) => (
            <a
              className="text-[13px] font-medium text-body transition hover:text-ink"
              href={href}
              key={label}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            aria-pressed={isDark}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-line text-body transition hover:bg-soft hover:text-ink"
            onClick={toggleTheme}
            title={`Switch to ${isDark ? "light" : "dark"} mode`}
            type="button"
          >
            {isDark ? <Sun aria-hidden="true" size={18} /> : <Moon aria-hidden="true" size={18} />}
          </button>

          <div className="hidden items-center gap-2 xl:flex">
            <Button className="px-4 py-2.5" href="#contact" variant="quiet">
              Book Demo
            </Button>
            <Button className="px-4 py-2.5" href="#pricing">
              Start Free Trial
            </Button>
          </div>

          <button
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-line text-body xl:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="border-t border-line bg-card px-5 pb-6 pt-3 xl:hidden"
          id="mobile-menu"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {links.map(([label, href]) => (
              <a
                className="border-b border-line py-3.5 text-sm font-medium text-body hover:text-ink"
                href={href}
                key={label}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <Button href="#contact" variant="secondary">
                Book Demo
              </Button>
              <Button href="#pricing">Start Free Trial</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
