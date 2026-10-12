import { ArrowRight } from "lucide-react";

const variants = {
  primary: "bg-accent text-white shadow-[var(--nf-shadow)] hover:bg-accent-hover",
  secondary:
    "border border-line bg-card text-ink hover:border-accent/40 hover:bg-soft",
  quiet: "text-body hover:bg-soft hover:text-ink",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  showArrow = false,
  type = "button",
  ...props
}) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 py-3 text-sm font-semibold transition-[background-color,border-color,color,box-shadow,transform] duration-180 ease-[var(--nf-ease-out)] active:scale-[0.98] ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {showArrow && <ArrowRight aria-hidden="true" size={16} />}
    </>
  );

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {content}
    </button>
  );
}
