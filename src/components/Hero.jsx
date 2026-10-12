import { useState } from "react";
import { ArrowUpRight, Check, Circle } from "lucide-react";
import Button from "./Button";

const tasks = [
  { title: "Finalize homepage wireframes", project: "Website refresh", owner: "AM", status: "In progress" },
  { title: "Review launch timeline", project: "Spring launch", owner: "JL", status: "In progress" },
  { title: "Share client feedback", project: "Client onboarding", owner: "SK", status: "Up next" },
  { title: "Approve campaign brief", project: "Spring launch", owner: "TR", status: "Done" },
];

const filters = ["All work", "In progress", "Done"];

function WorkspacePreview() {
  const [filter, setFilter] = useState("All work");
  const visibleTasks =
    filter === "All work" ? tasks : tasks.filter((task) => task.status === filter);

  return (
    <div
      aria-label="Interactive sample workspace preview"
      role="region"
      className="workspace-preview animate-enter-right"
    >
      <div className="workspace-topbar">
        <div className="flex items-center gap-3">
          <span className="workspace-mark" aria-hidden="true">N</span>
          <span className="text-sm font-semibold text-ink">Studio workspace</span>
        </div>
      </div>

      <div className="workspace-content">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-ink">
            Team overview
          </h2>
        </div>

        <div className="workspace-summary">
          <div className="summary-cell summary-cell-featured">
            <p>Everything in one place</p>
            <span>Projects, owners, and next steps stay connected.</span>
            <ArrowUpRight aria-hidden="true" size={19} />
          </div>
          <div className="summary-cell">
            <span className="summary-icon"><Check aria-hidden="true" size={15} /></span>
            <p>Clear ownership</p>
            <span>Every task has a next step.</span>
          </div>
        </div>

        <div className="mt-6">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h3 className="text-sm font-semibold text-ink">Team tasks</h3>
            <div aria-label="Filter tasks" className="filter-tabs" role="group">
              {filters.map((item) => (
                <button
                  aria-pressed={filter === item}
                  className={`filter-tab ${filter === item ? "filter-tab-active" : ""}`}
                  key={item}
                  onClick={() => setFilter(item)}
                  type="button"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <ul aria-live="polite" className="task-list">
            {visibleTasks.map(({ title, project, owner, status }) => (
              <li className="task-row" key={title}>
                <span
                  aria-hidden="true"
                  className={`task-state ${status === "Done" ? "task-state-done" : ""}`}
                >
                  {status === "Done" ? <Check size={12} /> : <Circle size={12} />}
                </span>
                <span className="min-w-0 flex-1">
                  <span className={`block truncate text-xs font-medium ${status === "Done" ? "text-muted line-through" : "text-ink"}`}>
                    {title}
                  </span>
                  <span className="mt-1 block truncate text-[11px] text-muted">{project}</span>
                </span>
                <span aria-label={`Assigned to ${owner}`} className="owner-avatar">{owner}</span>
                <span className={`task-status ${status === "Done" ? "task-status-done" : ""}`}>
                  {status}
                </span>
              </li>
            ))}
            {visibleTasks.length === 0 && (
              <li className="py-8 text-center text-sm text-muted">No tasks in this view.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-inner">
        <div className="hero-copy animate-enter">
          <p className="hero-kicker">
            <span aria-hidden="true" className="hero-kicker-mark">N</span>
            Work, without the busywork
          </p>
          <h1 className="font-heading text-pretty text-[clamp(2.75rem,5.2vw,4.75rem)] font-bold leading-[1.03] tracking-[-0.065em] text-ink">
            Bring every part of <span className="text-accent-ink">work together.</span>
          </h1>
          <p className="mt-6 max-w-[29rem] text-base leading-7 text-body sm:text-lg sm:leading-8">
            Plan projects, share updates, and keep the next step clear for everyone on your team.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#pricing" showArrow>
              Start Free Trial
            </Button>
            <Button href="#contact" variant="secondary">
              Book Demo
            </Button>
          </div>
        </div>
        <WorkspacePreview />
      </div>
    </section>
  );
}
