export default function Logo({ className = "", ...props }) {
  return (
    <a
      aria-label="NovaFlow home"
      className={`flex items-center gap-2.5 ${className}`}
      href="#home"
      {...props}
    >
      <span
        aria-hidden="true"
        className="relative flex size-9 items-center justify-center rounded-xl bg-accent text-white"
      >
        <span className="font-heading text-[15px] font-extrabold leading-none tracking-tight">
          N
        </span>
      </span>
      <span className="font-heading text-xl font-extrabold tracking-tight text-ink">
        NovaFlow
      </span>
    </a>
  );
}
