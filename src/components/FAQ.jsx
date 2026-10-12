import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const questions = [
  {
    question: "Do I need technical skills to use NovaFlow?",
    answer:
      "No. NovaFlow is built for business teams. You can create workspaces, assign tasks, and set up automations without writing code.",
  },
  {
    question: "Can I invite my whole team?",
    answer:
      "Yes. Invite teammates by email, set roles, and collaborate in a shared workspace. Plans scale as your team grows.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes. Every plan includes a 14-day free trial so you can explore the workspace, automations, and dashboards before you subscribe.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. There are no long-term contracts. You can upgrade, downgrade, or cancel from your account whenever you need to.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 sm:py-28" id="faq">
      <ScrollReveal className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          description="Everything you need to know before getting started."
          title="Frequently asked questions"
        />
        <div className="divide-y divide-line border-y border-line">
          {questions.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div className="py-1" key={question}>
                <h3>
                  <button
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-5 py-5 text-left text-sm font-semibold text-ink sm:text-base"
                    id={buttonId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    type="button"
                  >
                    {question}
                    <ChevronDown
                      aria-hidden="true"
                      className={`shrink-0 text-muted transition ${isOpen ? "rotate-180" : ""}`}
                      size={18}
                    />
                  </button>
                </h3>
                {isOpen && (
                  <p
                    className="max-w-2xl pb-5 pr-8 text-sm leading-6 text-body"
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                  >
                    {answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </ScrollReveal>
    </section>
  );
}
