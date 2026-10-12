import Card from "./Card";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    quote:
      "NovaFlow gave our operations team one place to track work. Handoffs are clearer, and weekly reporting takes a fraction of the time.",
    name: "Sara K.",
    role: "Operations Lead",
    initials: "SK",
  },
  {
    quote:
      "We finally see project status without chasing updates in chat. The dashboard is simple enough that the whole product team actually uses it.",
    name: "Daniel M.",
    role: "Product Manager",
    initials: "DM",
  },
  {
    quote:
      "As a founder, I needed a clean system that clients and contractors could follow. NovaFlow looks professional and keeps everyone aligned.",
    name: "Aisha R.",
    role: "Founder",
    initials: "AR",
  },
];

export default function Testimonials() {
  return (
    <section className="border-y border-line bg-soft py-20 sm:py-28 lg:py-32" id="testimonials">
      <ScrollReveal className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          description="A shared view helps teams spend less time chasing updates and more time moving projects forward."
          title="Good work is easier to see"
        />
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">
          {testimonials.map(({ quote, name, role, initials }, index) => (
            <Card
              as="article"
              className={`flex flex-col p-6 sm:p-8 ${index === 0 ? "lg:col-span-6 lg:row-span-2 lg:justify-between" : "lg:col-span-6"}`}
              key={name}
            >
              <blockquote className="flex-1 text-base leading-7 text-body">
                “{quote}”
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex size-10 items-center justify-center rounded-full bg-soft text-xs font-bold text-accent-ink"
                >
                  {initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">{name}</span>
                  <span className="mt-0.5 block text-xs text-muted">{role}</span>
                </span>
              </div>
            </Card>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
