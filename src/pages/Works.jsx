import { useMemo, useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import SectionLabel from "../components/SectionLabel.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";

const filters = [
  { type: "Web", label: "Web" },
  { type: "Kiosk", label: "Kiosk" },
  { type: "Software", label: "Softwares" },
  { type: "App", label: "Apps" },
];
const process = [
  [
    "01",
    "Listen",
    "Every project starts with good conversations. Learn about your goals, users, challenges, and expectations.",
  ],
  [
    "02",
    "Define",
    "Simplify the problem into a clear product vision, making sure every design decision supports what matters most.",
  ],
  [
    "03",
    "Explore",
    "Sketch, prototype, and test multiple approaches before committing, exploring possibilities to uncover best experience.",
  ],
  [
    "04",
    "Design",
    "With direction in place, craft polished interfaces, realistic prototypes ready for collaboration and development.",
  ],
  [
    "05",
    "Refine",
    "Fine-tune every state, transition, ensuring the final product feels thoughtful, intuitive, and ready for launch.",
  ],
];

export default function Works() {
  const [active, setActive] = useState("Web");
  const [grid, setGrid] = useState(true);
  const visible = useMemo(
    () =>
      projects.filter((project) => project.type === active && !project.homeOnly),
    [active],
  );
  return (
    <main className="page-content works-page section-width">
      <SectionLabel>WORKS</SectionLabel>
      <h1 className="page-title works-title">crafting the finest of all.</h1>
      <div className="work-controls">
        <div className="filter-tabs">
          {filters.map(({ type, label }) => {
            const count = projects.filter((project) => project.type === type && !project.homeOnly).length;
            return (
              <button
                type="button"
                key={type}
                className={active === type ? "selected" : ""}
                onClick={() => setActive(type)}
              >
                {label}
                <span>{type === "Web" ? count : String(count).padStart(2, "0")}</span>
              </button>
            );
          })}
        </div>
        <div className="view-controls">
          <span>
            {visible.length} shown
          </span>
          <button
            className={grid ? "selected" : ""}
            onClick={() => setGrid(true)}
            aria-label="Grid view"
          >
            <LayoutGrid size={15} />
          </button>
          <button
            className={!grid ? "selected" : ""}
            onClick={() => setGrid(false)}
            aria-label="List view"
          >
            <List size={15} />
          </button>
        </div>
      </div>
      <div className={grid ? "work-grid" : "work-grid list-view"}>
        {visible.map((project) => (
          <ProjectCard key={project.title} {...project} compact />
        ))}
      </div>
      <section className="work-sky-scene" aria-labelledby="work-sky-title">
        <img className="work-sky-background" src="/images/work-hot-air-balloons.png" alt="" aria-hidden="true" loading="lazy" />
        <div className="work-sky-copy">
          <h2 id="work-sky-title">Great ideas deserve room to rise.</h2>
          <p>Thoughtful design gives ambitious ideas the lift to become something real.</p>
        </div>
      </section>
      <section className="process-section">
        <span className="section-kicker">HOW I WORK</span>
        <h2>
          The process, <span>in brief.</span>
        </h2>
        <div className="process-grid">
          {process.map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
