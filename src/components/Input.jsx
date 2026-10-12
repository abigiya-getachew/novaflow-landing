export default function Input({
  as = "input",
  label,
  id,
  className = "",
  ...props
}) {
  const Field = as;

  return (
    <label className="block text-sm font-medium text-ink" htmlFor={id}>
      {label}
      <Field
        className={`mt-2 w-full rounded-xl border border-line bg-card px-4 py-3 text-sm text-ink placeholder:text-muted transition-[border-color,box-shadow] focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 ${className}`}
        id={id}
        {...props}
      />
    </label>
  );
}
