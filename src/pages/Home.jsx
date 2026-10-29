import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import SectionLabel from "../components/SectionLabel.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";

const interests = [
  "Visual Design",
  "User Experience",
  "Food",
  "Product Design",
  "Photography",
  "Music",
];

const featuredProjects = [
  {
    title: "SpeedLabs",
    tags: ["Educational Platform", "Student Assessment & Analysis"],
    description:
      "An educational platform that simplifies student assessment with OMR sheet evaluation, student performance tracking, and class-wise analytics—helping teachers monitor progress and make data-driven decisions.",
    action: "View design",
    mobileAction: "View design",
    image: "/images/home-speedlabs.png",
    href: "https://www.figma.com/proto/EWPDU2i5KUIFI2QaZYFWlB/Works?node-id=2337-9688&viewport=-985%2C10937%2C0.2&t=mYv1UJiuDYRIXS4a-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2337%3A9688&show-proto-sidebar=1&page-id=0%3A1",
  },
  {
    title: "Colgate × Harry Potter",
    tags: ["Interactive Kiosk", "Oral Care & Gamification"],
    description:
      "Designed an interactive brand experience featuring gamified oral care challenges, product discovery, and engaging activities inspired by the Wizarding World.",
    action: "View design",
    image: "/images/home-colgate.png",
    href: "https://www.figma.com/proto/EWPDU2i5KUIFI2QaZYFWlB/Works?node-id=2242-100143&viewport=-985%2C10937%2C0.2&t=mYv1UJiuDYRIXS4a-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2242%3A100143&page-id=0%3A1",
  },
  {
    title: "Visitor Management",
    tags: ["UX Case Study", "Visitor Management"],
    description:
      "A UX case study exploring the design of a visitor management kiosk to simplify registration, streamline check-ins, and improve the visitor entry experience.",
    action: "View Case study",
    image: "/images/home-visitor-management.png",
    href: "https://www.behance.net/gallery/247402295/Visitor-Management-Kiosk-Case-Study",
  },
];

const marqueeItems = [...interests, ...interests];

function CountUp({ target, decimals = 0, suffix = "", label }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const element = countRef.current;
    if (!element) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setCount(target);
      return undefined;
    }

    let frameId;
    let startedAt;
    const duration = 1400;
    const animate = (timestamp) => {
      if (startedAt === undefined) startedAt = timestamp;
      const progress = Math.min((timestamp - startedAt) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 4;
      setCount(target * easedProgress);
      if (progress < 1) frameId = window.requestAnimationFrame(animate);
    };

    if (!("IntersectionObserver" in window)) {
      frameId = window.requestAnimationFrame(animate);
      return () => window.cancelAnimationFrame(frameId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        frameId = window.requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.5 },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [target]);

  const formatted = count.toFixed(decimals);

  return (
    <strong ref={countRef} aria-label={`${target.toFixed(decimals)}${suffix} ${label}`}>
      {formatted}{suffix}
    </strong>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero section-width">
        <SectionLabel>HELLO — I'M SUMIT KASHYAP</SectionLabel>

        <h1>
          From sketching ideas to shaping
          <br className="desktop-break" />
          thoughtful digital products.
        </h1>

        <p className="hero-description">
          Design was never just a hobby for me. It began with sketching, visual
          curiosity, and a habit of noticing the details others often miss.
          <br className="desktop-break" />
          Over time, that instinct evolved into product design. Today, I create
          digital experiences that are clear, useful, and built with intention.
        </p>

        <div className="hero-gallery">
          <img src="/images/green-foliage.png" alt="Green foliage" />
          <img
            className="hero-photo-center"
            src="/images/home-my-portrait.png"
            alt="Portrait of Sumit Kashyap"
          />
          <img src="/images/sea-coast.png" alt="Coastline" />
        </div>
      </section>

      <section className="client-strip" aria-label="Clients">
        <p>Trusted by multiple clients worldwide</p>
        <div className="client-marquee">
          <div className="client-track" aria-hidden="true">
            <img src="/images/trusted-clients.png" alt="" />
            <img src="/images/trusted-clients.png" alt="" />
          </div>
        </div>
      </section>

      <section className="about-preview section-width" id="about">
        <div>
          <span className="section-kicker">KNOW ME</span>
          <h2>
            Little about <span>myself.</span>
          </h2>
          <p>
            I’m Sumit. I started in engineering and moved to design, and
            somewhere along the way started building of my own, giving me a
            different instinct — less “make it pretty,” more “will this actually
            work, and would someone use it?”
          </p>
          <Link className="inline-link" to="/about">
            More about me <ArrowRight size={13} />
          </Link>
        </div>

        <div className="stats">
          <div>
            <CountUp target={2} label="years in design" />
            <span>
              YEARS IN
              <br />
              DESIGN
            </span>
          </div>
          <div>
            <CountUp target={75} suffix="+" label="projects delivered" />
            <span>
              PROJECTS
              <br />
              DELIVERED
            </span>
          </div>
          <div className="stat-wide">
            <strong>
              CROSS-PLATFORM
              <br />
              DESIGN
              <br />
              EXPERIENCE
            </strong>
          </div>
        </div>
      </section>

      <div className="interest-marquee">
        <div className="interest-track">
          {marqueeItems.map((item, index) => (
            <span key={`${item}-${index}`}>
              {item}
              <i />
            </span>
          ))}
        </div>
      </div>

      <section className="work-section section-width">
        <span className="section-kicker">MY WORKS</span>
        <h2>
          Few Major things shipped <span>for others.</span>
        </h2>

        <div className="home-projects">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              {...featuredProjects[index]}
              featured
              compact
              staticMotion
            />
          ))}
        </div>

        <Link className="all-works-link" to="/works">
          Explore all projects <ArrowRight size={14} />
        </Link>
      </section>

      <section className="home-flight-scene" aria-label="A red airplane floating above the clouds">
        <img
          className="flight-sky"
          src="/images/home-airplane-sky.png?v=2"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <img
          className="flight-plane"
          src="/images/home-airplane-plane.png?v=3"
          alt="A red vintage airplane flying above the clouds"
          loading="lazy"
        />
      </section>
    </main>
  );
}

