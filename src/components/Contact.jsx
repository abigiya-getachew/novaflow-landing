import { useState } from "react";
import { Info } from "lucide-react";
import Button from "./Button";
import Input from "./Input";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="border-t border-line bg-soft py-20 sm:py-28" id="contact">
      <ScrollReveal className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          description="Tell us about your team and what you need to bring together."
          title="Let’s talk about your workflow"
        />
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div className="max-w-md py-2">
            <h3 className="font-heading text-2xl font-bold tracking-tight text-ink">
              A clearer way to work starts with one conversation.
            </h3>
            <p className="mt-4 text-sm leading-7 text-body">
              Share what your team is working on, where handoffs get stuck, and what you would like to improve.
            </p>
          </div>

          <form
            className="rounded-[1.25rem] border border-line bg-card p-5 sm:p-8"
            onSubmit={handleSubmit}
          >
            {submitted && (
              <div
                aria-live="polite"
                className="mb-6 flex items-start gap-3 rounded-xl border border-warning/30 bg-soft p-4 text-sm leading-6 text-ink"
                role="alert"
              >
                <Info aria-hidden="true" className="mt-0.5 shrink-0 text-accent-ink" size={18} />
                This demo form is not connected to a submission service. Your message has not been sent.
              </div>
            )}
            <div className="grid gap-5 sm:grid-cols-2">
              <Input
                autoComplete="name"
                id="full-name"
                label="Full Name"
                name="name"
                placeholder="Alex Morgan"
                required
              />
              <Input
                autoComplete="email"
                id="work-email"
                label="Work Email"
                name="email"
                placeholder="alex@company.com"
                required
                type="email"
              />
              <div className="sm:col-span-2">
                <Input
                  autoComplete="organization"
                  id="company"
                  label="Company"
                  name="company"
                  placeholder="Your company"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <Input
                  as="textarea"
                  className="min-h-32 resize-y"
                  id="message"
                  label="Message"
                  name="message"
                  placeholder="Tell us about your team and what you’d like to organize first."
                  required
                  rows={4}
                />
              </div>
            </div>
            <div className="mt-6">
              <Button className="w-full sm:w-auto" type="submit">
                Book Demo
              </Button>
            </div>
          </form>
        </div>
      </ScrollReveal>
    </section>
  );
}
