import { Check } from "lucide-react";
import Button from "./Button";
import Card from "./Card";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
const plans = [
  {
    name: "Starter",
    price: "19",
    description: "For small teams getting organized with a shared workspace.",
    features: [
      "Up to 5 team members",
      "3 active projects",
      "Core task boards",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "49",
    description: "For growing teams that need automation and collaboration.",
    features: [
      "Up to 20 team members",
      "Unlimited projects",
      "Workflow automation",
      "Progress dashboards",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Scale",
    price: "99",
    description: "For companies that need advanced controls as they expand.",
    features: [
      "Unlimited team members",
      "Everything in Growth",
      "SSO and role permissions",
      "Advanced reporting",
      "Dedicated onboarding",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-20 sm:py-28" id="pricing">
      <ScrollReveal className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          description="Every plan starts with a 14-day trial. Choose the size that fits your team today."
          title="Simple pricing for every team"
        />
        <div className="grid items-stretch gap-3 lg:grid-cols-3">
          {plans.map(({ name, price, description, features, popular }) => (
            <Card
              as="article"
              className={`relative flex flex-col p-6 sm:p-8 ${popular ? "border-accent bg-soft shadow-[var(--nf-shadow)]" : ""}`}
              key={name}
            >
              {popular && (
                <span className="mb-4 w-fit rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-white">
                  Most Popular
                </span>
              )}
              <p className="font-heading text-lg font-bold text-ink">{name}</p>
              <p className="mt-2 min-h-12 text-sm leading-6 text-body">{description}</p>
              <div className="mt-6 flex items-end gap-1.5">
                <span className="font-heading text-5xl font-extrabold tracking-tight text-ink">
                  ${price}
                </span>
                <span className="pb-1.5 text-sm text-muted">/month</span>
              </div>
              <Button
                className="mt-6 w-full"
                href="#contact"
                variant={popular ? "primary" : "secondary"}
              >
                {name === "Scale" ? "Book Demo" : "Start Free Trial"}
              </Button>
              <div className="my-6 border-t border-line" />
              <ul className="space-y-3.5">
                {features.map((feature) => (
                  <li className="flex items-start gap-2.5 text-sm text-body" key={feature}>
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-success"
                      size={16}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
