import ScrollReveal from "./ScrollReveal";

const workAreas = ["Projects", "People", "Files", "Conversations", "Follow-ups"];

export default function TrustedBy() {
  return (
    <section aria-labelledby="trusted-heading" className="border-y border-line bg-card py-7 sm:py-8">
      <ScrollReveal className="mx-auto grid max-w-7xl gap-4 px-5 sm:px-8 md:grid-cols-[1fr_2fr] md:items-center">
        <h2 className="text-sm font-semibold tracking-tight text-ink" id="trusted-heading">
          All the moving parts, together.
        </h2>
        <ul className="flex flex-wrap gap-x-7 gap-y-2 text-sm font-medium text-muted">
          {workAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </ScrollReveal>
    </section>
  );
}
