export default function SectionHeading({ title, description, centered = true }) {
  return (
    <div className={`mb-12 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <h2 className="font-heading text-pretty text-3xl font-bold leading-tight tracking-[-0.04em] text-ink sm:text-4xl lg:text-[2.65rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-body sm:text-lg">{description}</p>
      )}
    </div>
  );
}
