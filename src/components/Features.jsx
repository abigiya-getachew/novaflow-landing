import {
  ChartNoAxesCombined,
  LockKeyhole,
  Plug,
  Sparkles,
  LayoutDashboard,
  UsersRound,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const features = [
  {
    icon: LayoutDashboard,
    title: "Unified Workspace",
    description:
      "Keep projects, files, and conversations in one shared space so nothing gets lost between tools.",
  },
  {
    icon: Sparkles,
    title: "Smart Automation",
    description:
      "Automate handoffs, reminders, and recurring tasks so your team can focus on higher-value work.",
  },
  {
    icon: UsersRound,
    title: "Team Collaboration",
    description:
      "Assign owners, leave comments, and keep everyone aligned without extra meetings.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Progress Tracking",
    description:
      "See what’s moving, what’s blocked, and what’s due with clean dashboards and status updates.",
  },
  {
    icon: LockKeyhole,
    title: "Secure Access",
    description:
      "Role-based permissions and SSO keep client work and internal data in the right hands.",
  },
  {
    icon: Plug,
    title: "Integrations",
    description:
      "Connect Slack, email, calendars, and CRMs so NovaFlow fits the tools you already use.",
  },
];

export default function Features() {
  return (
    <section className="py-24 sm:py-32 lg:py-36" id="features">
      <ScrollReveal className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          description="Manage projects, automate workflows, and collaborate with one simple platform."
          title="Everything your team needs to stay organized"
          centered={false}
        />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-12">
          {features.map(({ icon: Icon, title, description }, index) => (
            <article
              className={`feature-tile ${index === 0 ? "feature-tile-primary lg:col-span-7" : ""} ${index === 1 ? "feature-tile-tint lg:col-span-5" : ""} ${index > 1 ? "lg:col-span-3" : ""}`}
              key={title}
            >
              <Icon aria-hidden="true" className="feature-icon" size={21} strokeWidth={1.7} />
              <h3 className="mt-8 font-heading text-lg font-bold tracking-tight">{title}</h3>
              <p className="mt-2 max-w-[35ch] text-sm leading-6">{description}</p>
            </article>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
