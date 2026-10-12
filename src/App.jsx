import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import TrustedBy from "./components/TrustedBy";
import { ThemeContext } from "./theme";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  return window.novaFlowUtils.getInitialTheme();
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    window.novaFlowUtils.applyTheme(theme);
    window.novaFlowUtils.persistTheme(theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-card focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink focus:shadow-lg"
        href="#home"
      >
        Skip to content
      </a>
      <div className="min-h-dvh bg-page text-body">
        <Navbar />
        <main>
          <Hero />
          <TrustedBy />
          <Features />
          <HowItWorks />
          <Pricing />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
