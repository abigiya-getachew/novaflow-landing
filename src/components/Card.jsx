export default function Card({
  as: Tag = "div",
  children,
  className = "",
  hover = false,
  ...props
}) {
  return (
    <Tag
      className={`rounded-[1.25rem] border border-line bg-card ${hover ? "transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[var(--nf-shadow)]" : ""} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
