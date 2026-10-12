import { FolderPlus, UserPlus, Workflow } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    title: "Create Your Workspace",
    description:
      "Set up your team space in minutes and bring projects, tasks, and files into one place.",
    icon: FolderPlus,
  },
  {
    title: "Invite Your Team",
    description:
      "Add teammates, assign roles, and start collaborating without a long onboarding process.",
    icon: UserPlus,
  },
  {
    title: "Automate and Track Work",
    description:
      "Turn repeating processes into simple automations and track progress as work moves forward.",
    icon: Workflow,
  },
];

export default function HowItWorks() {
  return (
    <section className="border-y border-line bg-soft py-20 sm:py-28 lg:py-32" id="how-it-works">
      <ScrollReveal className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          description="No complicated setup. Invite your team, connect your tools, and start organizing work."
          title="Up and running in a few minutes"
          centered={false}
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
          {steps.map(({ title, description, icon: Icon }, index) => (
            <article
              className={`process-step ${index > 0 ? "md:border-l md:border-line md:pl-8" : ""} ${index < steps.length - 1 ? "md:pr-8" : ""}`}
              key={title}
            >
              <span aria-hidden="true" className="process-icon">
                <Icon size={19} strokeWidth={1.7} />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold tracking-tight text-ink">{title}</h3>
              <p className="mt-2 max-w-[34ch] text-sm leading-6 text-body">{description}</p>
            </article>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
