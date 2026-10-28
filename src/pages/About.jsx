import SectionLabel from "../components/SectionLabel.jsx";
const roles = [
  {
    company: "Virtubox",
    icon: "/images/company-ui-ux.png",
    title: "Product Designer",
    dates: "April 2025 – Present",
    bullets: [
      "Designing end-to-end product experiences across web and mobile platforms.",
      "Working on user flows, wireframes, prototypes, and scalable design systems.",
      "Solving usability challenges for enterprise, government, and event-based products.",
      "Using AI-assisted workflows to speed up research, ideation, UX writing, and design exploration.",
    ],
  },
  {
    company: "Badho",
    icon: "/images/company-product-design.png",
    title: "Graphic and UI/UX Intern",
    dates: "July 2024 – Sept 2024",
    bullets: [
      "Created social media creatives, thumbnails, and in-app promotional components.",
      "Contributed to interface improvements through design iterations and user-focused updates.",
      "Improved engagement through banners, pop-ups, and clearer visual communication.",
    ],
  },
  {
    company: "Blockstash",
    icon: "/images/company-graphic-ui.png",
    title: "UI/UX Intern",
    dates: "Aug 2023 – Nov 2023",
    bullets: [
      "Designed landing page and dashboard experiences for a crypto intelligence platform.",
      "Built structured workflows for reports, graphs, and watchlist-based interfaces.",
      "Learned to design data-heavy products with clarity and hierarchy.",
    ],
  },
];

export default function About() {
  return (
    <main className="page-content about-page section-width">
      <SectionLabel>ABOUT</SectionLabel>
      <h1 className="page-title">
        <span>more than</span> visuals. built through curiosity.
      </h1>
      <section className="about-intro">
        <div className="about-portrait">
          <img
            src="/images/about-vr.png"
            alt="Sumit wearing a VR headset"
          />
        </div>
        <div className="about-summary">
          <span className="section-kicker">A SUMMARY</span>
          <h2>
            Know me <span>as I am.</span>
          </h2>
          <p>
            <em>I design products that get out of the way.</em> 1.7 years across
            websites, apps, kiosk systems, dashboards, and digital platforms —
            from the brief to the build. I care about usability, structure, and
            building experiences that feel simple, thoughtful, and natural to
            use.
          </p>
          <dl className="profile-facts">
            <div>
              <dt>BASED</dt>
              <dd>Noida, IN</dd>
            </div>
            <div>
              <dt>CURRENTLY</dt>
              <dd>Product Designer</dd>
            </div>
            <div>
              <dt>DOMAIN</dt>
              <dd>Web · Apps · Kiosks · Product Systems</dd>
            </div>
          </dl>
        </div>
      </section>
      <div className="tools-panel" aria-label="Design tools">
        <picture className="tools-image-picture">
          <source
            media="(max-width: 767px)"
            srcSet="/images/tools-app-view.png"
          />
          <img
            className="tools-image"
            src="/images/design-tools.png"
            alt="Design and creative tools: Figma, Photoshop, Sketch, Illustrator, Framer, XD, Gemini, OpenAI, Claude, Notion, Slack, Jitter, Canva, and Adobe apps"
          />
        </picture>
      </div>
      <section className="career-section">
        <span className="section-kicker">CAREER LADDER</span>
        <h2>How I got here.</h2>
        <div className="career-list">
          {roles.map((role) => (
            <article className="career-item" key={role.title}>
              <div className="career-title">
                <img
                  className="career-icon"
                  src={role.icon}
                  alt={`${role.company} logo`}
                />
                <h3>{role.title}</h3>
                <span className="career-date">{role.dates}</span>
              </div>
              <ul>
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <div className="about-cloud-ending" aria-hidden="true">
        <img src="/images/about-cloud-ending.png?v=2" alt="" loading="lazy" />
      </div>
    </main>
  );
}
