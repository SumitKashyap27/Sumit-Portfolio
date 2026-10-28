import { NavLink, Outlet, useLocation } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/works", label: "Works" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

const verbs = ["build", "ship", "develop", "design"];

function AnimatedVerb() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visibleText, setVisibleText] = useState(verbs[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const word = verbs[wordIndex];
    const delay = deleting ? 65 : visibleText === word ? 1250 : 100;
    const timer = window.setTimeout(() => {
      if (!deleting && visibleText === word) {
        setDeleting(true);
      } else if (deleting && visibleText.length === 0) {
        setDeleting(false);
        setWordIndex((current) => (current + 1) % verbs.length);
      } else if (deleting) {
        setVisibleText(word.slice(0, visibleText.length - 1));
      } else {
        setVisibleText(word.slice(0, visibleText.length + 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, visibleText, wordIndex]);

  return (
    <>
      <span className="sr-only">build</span>
      <span className="rotating-verb" aria-hidden="true">
        {visibleText}
      </span>
    </>
  );
}

export default function Layout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <>
      <header className="site-header">
        <nav className="main-nav" aria-label="Main navigation">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `nav-link${isActive ? " active" : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <NavLink
          className="mobile-contact-swatch"
          to="/contact"
          aria-label="Contact"
        />
      </header>
      <Outlet />
      <footer className="site-footer">
        <div className="footer-heading">
          <h2>
            Let’s <AnimatedVerb />
            <br />
            <span>incredible work</span> <em>together.</em>
          </h2>
        </div>
        <div className="footer-columns">
          <div className="footer-intro">
            <p>
              I help teams turn vague ideas into products people actually want.
              <br />— open to opportunities.
            </p>
            <a
              className="talk-button"
              href="https://cal.com/sumit-kashyap-5znl0j/30min"
              target="_blank"
              rel="noreferrer"
            >
              Let’s talk <ArrowRight size={15} />
            </a>
          </div>
          <div className="footer-col">
            <span className="footer-label">PAGES</span>
            {links.map((item) => (
              <NavLink key={item.to} to={item.to}>
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="footer-col">
            <span className="footer-label">CONNECT</span>
            <a
              href="https://www.linkedin.com/in/sumit-kashyap-821985225/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="https://www.behance.net/sumitkashyap17" target="_blank" rel="noreferrer">
              Behance
            </a>
            <a href="https://unsplash.com/@sumitkashyap27" target="_blank" rel="noreferrer">
              Unsplash
            </a>
            <a href="https://medium.com/@sumit20020927" target="_blank" rel="noreferrer">
              Medium
            </a>
          </div>
          <div className="footer-col reach-out">
            <span className="footer-label">REACH OUT</span>
            <a href="mailto:sumitkashyap0927@gmail.com">
              sumitkashyap0927@gmail.com
            </a>
          </div>
        </div>
      </footer>
      <div className="bottom-band">
        <img
          className="bottom-band-image"
          src="/images/footer.png"
          alt="© 2026 designed with love by Sumit Kashyap"
        />
      </div>
    </>
  );
}
