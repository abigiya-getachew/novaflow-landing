import { useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Circle,
  Home,
  Inbox,
  LayoutDashboard,
  Plus,
  Search,
  Settings2,
} from "lucide-react";
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
        <div aria-hidden="true" className="workspace-window-controls">
          <span />
          <span />
          <span />
        </div>
        <span className="workspace-topbar-title">novaflow.app / studio</span>
        <button aria-label="Search workspace" className="workspace-search" disabled type="button">
          <Search aria-hidden="true" size={15} />
          <span>Search</span>
          <kbd>⌘ K</kbd>
        </button>
      </div>

      <div className="workspace-shell">
        <aside aria-label="Sample workspace navigation" className="workspace-sidebar">
          <button className="workspace-team" disabled type="button">
            <span aria-hidden="true" className="workspace-mark">N</span>
            <span className="min-w-0 flex-1 text-left">
              <span className="block truncate text-xs font-semibold text-ink">Northstar Studio</span>
              <span className="mt-0.5 block text-[10px] text-muted">Free workspace</span>
            </span>
            <ChevronDown aria-hidden="true" className="shrink-0 text-muted" size={14} />
          </button>

          <p className="workspace-nav-label">Workspace</p>
          <div className="workspace-nav-group">
            <span aria-current="page" className="workspace-nav-item workspace-nav-active">
              <LayoutDashboard aria-hidden="true" size={15} />
              Overview
            </span>
            <span className="workspace-nav-item">
              <Home aria-hidden="true" size={15} />
              My work
            </span>
            <span className="workspace-nav-item">
              <Inbox aria-hidden="true" size={15} />
              Inbox
              <span className="workspace-nav-count">3</span>
            </span>
            <span className="workspace-nav-item">
              <CalendarDays aria-hidden="true" size={15} />
              Calendar
            </span>
          </div>

          <div className="workspace-project-heading">
            <p className="workspace-nav-label">Projects</p>
            <button aria-label="Add a project" className="workspace-add-button" disabled type="button">
              <Plus aria-hidden="true" size={14} />
            </button>
          </div>
          <div className="workspace-project-list">
            <span><i className="project-swatch project-swatch-green" />Website refresh</span>
            <span><i className="project-swatch project-swatch-gold" />Spring launch</span>
            <span><i className="project-swatch project-swatch-blue" />Client onboarding</span>
          </div>

          <div className="workspace-profile">
            <span aria-hidden="true" className="workspace-profile-avatar">AM</span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[11px] font-semibold text-ink">Alex Morgan</span>
              <span className="block text-[10px] text-muted">Team admin</span>
            </span>
            <Settings2 aria-hidden="true" className="text-muted" size={15} />
          </div>
        </aside>

        <div className="workspace-content">
          <div className="workspace-page-heading">
            <div>
              <p className="workspace-date">MONDAY, OCTOBER 12</p>
              <h2 className="mt-1 font-heading text-2xl font-bold tracking-tight text-ink">
                Team overview
              </h2>
              <p className="mt-1 text-xs text-muted">Here’s what’s moving across your workspace.</p>
            </div>
            <button className="workspace-invite" disabled type="button">
              <Plus aria-hidden="true" size={14} />
              Invite
            </button>
          </div>

          <div className="workspace-summary">
            <div className="summary-cell summary-cell-featured">
              <span className="summary-eyebrow">Projects on track</span>
              <span className="summary-value">08</span>
              <span className="summary-note">Across your workspace</span>
              <ArrowUpRight aria-hidden="true" className="summary-trend" size={17} />
            </div>
            <div className="summary-cell">
              <span className="summary-eyebrow">Tasks this week</span>
              <span className="summary-value">24</span>
              <span className="summary-note">4 due today</span>
            </div>
            <div className="summary-cell">
              <span className="summary-eyebrow">Team members</span>
              <span className="summary-value">12</span>
              <span className="summary-note">Working together</span>
            </div>
          </div>

          <div className="workspace-task-heading">
            <div>
              <h3 className="text-sm font-semibold text-ink">Team tasks</h3>
              <p className="mt-0.5 text-[11px] text-muted">Keep an eye on what’s next.</p>
            </div>
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
          <p className="mt-6 max-w-116 text-base leading-7 text-body sm:text-lg sm:leading-8">
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
