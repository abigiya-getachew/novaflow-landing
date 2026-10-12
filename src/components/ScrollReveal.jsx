import { useEffect, useRef } from "react";

export default function ScrollReveal({ children, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (
      !element ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.remove("scroll-reveal-pending");
          element.classList.add("scroll-reveal-visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.12 },
    );

    element.classList.add("scroll-reveal-pending");
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
}
